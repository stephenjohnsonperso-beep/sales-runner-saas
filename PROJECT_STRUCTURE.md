# Sales Runner - Project Structure

## Architecture Overview

Sales Runner is a full-stack B2B SaaS application with:
- **Frontend**: React 19 + Tailwind CSS 4 + tRPC client
- **Backend**: Express 4 + tRPC 11 + Drizzle ORM
- **Database**: MySQL/TiDB with Drizzle migrations
- **Auth**: Manus OAuth (can be replaced with any OAuth provider)
- **Styling**: Tailwind CSS 4 with custom design tokens

## Directory Structure

```
sales-runner-saas/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx      # Landing page
│   │   │   └── ...
│   │   ├── components/       # Reusable UI components
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── FreeLeadForm.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── ...
│   │   ├── contexts/         # React contexts
│   │   │   └── LanguageContext.tsx  # i18n support
│   │   ├── lib/
│   │   │   ├── trpc.ts       # tRPC client setup
│   │   │   ├── i18n.ts       # Translations (FR/EN)
│   │   │   └── ...
│   │   ├── App.tsx           # Main app component with routing
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Global styles + design tokens
│   ├── public/               # Static assets
│   │   └── logo.png          # Metallic SR logo
│   └── index.html            # HTML template
│
├── server/                    # Backend Express application
│   ├── _core/
│   │   ├── index.ts          # Express server setup
│   │   ├── context.ts        # tRPC context (user, auth)
│   │   ├── vite.ts           # Vite middleware (dev only)
│   │   ├── env.ts            # Environment variables
│   │   ├── llm.ts            # LLM integration
│   │   ├── notification.ts   # Notification system
│   │   └── ...
│   ├── db.ts                 # Database query helpers
│   ├── routers.ts            # tRPC procedure definitions
│   ├── storage.ts            # S3 storage helpers
│   └── auth.logout.test.ts   # Example test
│
├── drizzle/                   # Database schema & migrations
│   ├── schema.ts             # Drizzle ORM schema
│   └── migrations/           # Auto-generated migrations
│
├── shared/                    # Shared types & constants
│   └── types.ts
│
├── dist/                      # Build output (generated)
│   ├── index.js              # Compiled backend
│   └── public/               # Compiled frontend
│
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── vite.config.ts            # Vite build config (dev)
└── build.mjs                 # esbuild script (production)
```

## Key Features

### 1. Multilingual Support (FR/EN)
- Located in `client/src/lib/i18n.ts`
- Language toggle in header
- All UI text translated
- Easy to add more languages

### 2. Premium Design
- Silver/chrome background with metallic texture
- Metallic "SR" logo
- McKinsey-style color palette
- Responsive on all devices

### 3. tRPC API
- Type-safe client-server communication
- Procedures in `server/routers.ts`
- Hooks in `client/src/lib/trpc.ts`
- Protected procedures for authenticated users

### 4. Database Integration
- Drizzle ORM with MySQL/TiDB
- Schema in `drizzle/schema.ts`
- Query helpers in `server/db.ts`
- Auto-migrations with `pnpm db:push`

### 5. Authentication
- OAuth integration (Manus or custom)
- Protected routes and procedures
- User context available in tRPC

## Development Workflow

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (Vite + Express)
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Start production server
pnpm start
```

### Database Changes

```bash
# Edit drizzle/schema.ts
# Then run:
pnpm db:generate    # Generate migration
pnpm db:push        # Apply to database
```

### Adding New Pages

1. Create component in `client/src/pages/YourPage.tsx`
2. Add route in `client/src/App.tsx`
3. Add translations in `client/src/lib/i18n.ts`
4. Add tRPC procedures if needed in `server/routers.ts`

### Adding New API Endpoints

1. Add procedure in `server/routers.ts`
2. Use in component with `trpc.yourProcedure.useQuery/useMutation()`
3. Add database helpers in `server/db.ts` if needed

## Environment Variables

Required for production:
- `DATABASE_URL` - MySQL/TiDB connection string
- `JWT_SECRET` - Session signing secret
- `VITE_APP_ID` - OAuth application ID
- `OAUTH_SERVER_URL` - OAuth provider URL
- `STRIPE_SECRET_KEY` - Stripe API key (if using payments)

## Deployment

### Vercel (Recommended)
See `DEPLOY_VERCEL.md` for detailed instructions.

### Other Platforms
- Railway: Similar to Vercel, add build command `pnpm build`
- Render: Same as Railway
- AWS/GCP/Azure: Use Docker (see Dockerfile if provided)

## Performance Considerations

- Frontend: ~800KB JavaScript (minified)
- Build time: ~5 seconds
- Database queries: Optimized with Drizzle
- API responses: Cached where possible

## Security

- Environment variables not committed
- OAuth for authentication
- SQL injection prevention via Drizzle ORM
- CORS configured for API
- Sensitive data in database, not frontend

## Troubleshooting

**Dev server not starting**
- Check port 3000 is available
- Verify DATABASE_URL is set
- Check Node.js version (18+)

**Build fails**
- Run `pnpm install` again
- Clear cache: `rm -rf node_modules`
- Check TypeScript errors: `pnpm type-check`

**Database errors**
- Verify connection string
- Check database is running
- Run migrations: `pnpm db:push`

## Next Steps

1. Deploy to Vercel (see DEPLOY_VERCEL.md)
2. Configure custom domain
3. Set up monitoring/logging
4. Add more features (testimonials, blog, etc.)
5. Launch! 🚀
