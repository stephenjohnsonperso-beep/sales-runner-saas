# Sales Runner - Deployment Guide (Vercel)

## Quick Start

Sales Runner is a premium B2B lead generation SaaS built with React, Express, tRPC, and Tailwind CSS.

### Prerequisites
- Node.js 18+
- Vercel account (free)
- Git repository

### Step 1: Prepare Your Repository

```bash
# Clone or create your repo
git clone <your-repo-url>
cd sales-runner-saas

# Install dependencies
pnpm install

# Build the project
pnpm build
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts and select:
# - Framework: Other
# - Root directory: ./
# - Build command: pnpm build
# - Output directory: dist/public
```

#### Option B: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework: Other
   - Build Command: `pnpm build`
   - Output Directory: `dist/public`
6. Add environment variables (see below)
7. Deploy!

### Step 3: Environment Variables

Add these to your Vercel project settings:

```
DATABASE_URL=<your-database-url>
JWT_SECRET=<generate-random-string>
VITE_APP_ID=<your-app-id>
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://app.manus.im
OWNER_OPEN_ID=<your-open-id>
OWNER_NAME=<your-name>
STRIPE_SECRET_KEY=<your-stripe-key>
STRIPE_WEBHOOK_SECRET=<your-webhook-secret>
VITE_STRIPE_PUBLISHABLE_KEY=<your-publishable-key>
```

### Step 4: Database Setup

Sales Runner uses Drizzle ORM with MySQL/TiDB.

```bash
# Generate migrations
pnpm db:generate

# Push schema to database
pnpm db:push
```

### Features Included

✅ Premium McKinsey design with silver/chrome background
✅ Metallic "SR" logo
✅ Full FR/EN multilingual support
✅ Free Lead Form with validation
✅ Pricing Section with 3 tiers
✅ How It Works section
✅ Trust & Security section
✅ tRPC API with type safety
✅ User authentication with OAuth
✅ Database integration with Drizzle
✅ Tailwind CSS 4 styling
✅ Responsive design

### Troubleshooting

**Build fails with "Cannot find module"**
- Run `pnpm install` again
- Clear cache: `rm -rf node_modules .pnpm-store`
- Reinstall: `pnpm install`

**Database connection error**
- Verify DATABASE_URL is correct
- Ensure database is accessible from Vercel
- Check firewall/security groups

**OAuth not working**
- Verify VITE_APP_ID and OAUTH_SERVER_URL
- Check OAuth callback URL is registered

### Production Checklist

- [ ] Database is backed up
- [ ] Environment variables are set
- [ ] OAuth is configured
- [ ] Stripe is configured (if using payments)
- [ ] Custom domain is configured
- [ ] SSL certificate is active
- [ ] Monitoring/logging is set up

### Support

For issues, check:
1. Vercel logs: `vercel logs`
2. Build logs in Vercel dashboard
3. Database logs
4. Browser console for frontend errors

Good luck! 🚀
