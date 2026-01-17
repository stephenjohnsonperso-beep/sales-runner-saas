#!/usr/bin/env node
import * as esbuild from 'esbuild';
import tailwindPlugin from 'esbuild-plugin-tailwindcss';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildBackend() {
  console.log('🔨 Building backend...');
  try {
    await esbuild.build({
      entryPoints: [path.join(__dirname, 'server', '_core', 'index.ts')],
      bundle: true,
      outfile: path.join(__dirname, 'dist', 'index.js'),
      format: 'esm',
      target: 'es2020',
      platform: 'node',
      external: ['express', 'vite', 'nanoid', 'drizzle-orm', 'better-sqlite3'],
      sourcemap: false,
      minify: true,
      define: {
        'process.env.NODE_ENV': '"production"',
      },
      logLevel: 'info',
    });
    console.log('✅ Backend built successfully');
  } catch (error) {
    console.error('❌ Backend build failed:', error);
    process.exit(1);
  }
}

async function buildFrontend() {
  console.log('🎨 Building frontend...');
  
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
      }
    });
  }

  try {
    await esbuild.build({
      entryPoints: [path.join(__dirname, 'client', 'src', 'main.tsx')],
      bundle: true,
      outdir,
      format: 'esm',
      target: 'es2020',
      splitting: true,
      sourcemap: false,
      minify: true,
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
        'process.env.NODE_ENV': '"production"',
      },
      logLevel: 'info',
    });
    console.log('✅ Frontend built successfully');
  } catch (error) {
    console.error('❌ Frontend build failed:', error);
    process.exit(1);
  }
}

async function main() {
  console.log('🚀 Starting build process...\n');
  await buildBackend();
  console.log('');
  await buildFrontend();
  console.log('\n✨ All builds complete!');
}

main();
