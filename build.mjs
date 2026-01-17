#!/usr/bin/env node
import * as esbuild from 'esbuild';
import tailwindPlugin from 'esbuild-plugin-tailwindcss';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isDev = process.argv.includes('--watch');
const outdir = path.join(__dirname, 'dist', 'public');

// Ensure output directory exists
if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir, { recursive: true });
}

// Copy public assets
const publicDir = path.join(__dirname, 'client', 'public');
if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir);
  files.forEach(file => {
    const src = path.join(publicDir, file);
    const dest = path.join(outdir, file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
      console.log(`Copied: ${file}`);
    }
  });
}

const config = {
  entryPoints: [path.join(__dirname, 'client', 'src', 'main.tsx')],
  bundle: true,
  outdir,
  format: 'esm',
  target: 'es2020',
  splitting: true,
  sourcemap: isDev ? 'linked' : false,
  minify: !isDev,
  plugins: [tailwindPlugin()],
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.gif': 'file',
    '.svg': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.eot': 'file',
  },
  define: {
    'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
  },
  logLevel: 'info',
};

async function build() {
  try {
    if (isDev) {
      const ctx = await esbuild.context(config);
      await ctx.watch();
      console.log('✅ esbuild watching for changes...');
    } else {
      await esbuild.build(config);
      console.log('✅ Build complete!');
    }
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
