This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Static export

This site is configured for static export (`output: 'export'` in `next.config.mjs`) — there is no server, no API routes, and no Node runtime required at deploy time. Both CTAs (Book a Call, Enroll Now) link out to Acuity and Stripe directly.

```bash
npm run build
```

This produces a fully static site in the `out/` directory. Verify it locally before deploying:

```bash
npx serve out
```

## Deploy to Vercel

This repo is connected to Vercel via its GitHub integration — every push to `main` triggers an automatic build and deploy. No manual steps needed for a normal update:

1. Commit and push to `main`.
2. Vercel picks up the push, runs `next build`, and deploys automatically.
3. The new deployment is live at every domain attached to the project within a minute or two.

To connect a fresh clone of this repo to Vercel from scratch: import the repo at vercel.com (**Add New... → Project**), and leave the Framework Preset/Build Command/Output Directory at their auto-detected Next.js defaults — no environment variables are required.

### DNS: subdomain setup

This site is deployed on the subdomain **`start.halthehealthcoach.com`**, separate from the root domain (`halthehealthcoach.com`), which stays on Squarespace.

- In the Vercel project, add `start.halthehealthcoach.com` under **Settings → Domains**. Vercel will show the exact DNS record to add (typically a `CNAME` pointing at `cname.vercel-dns.com`).
- In whatever DNS provider manages `halthehealthcoach.com`'s DNS records (Squarespace, or elsewhere if already migrated), add that record for the `start` subdomain.
- **Do not touch the root domain's existing Squarespace DNS records** (the `A`/`ALIAS`/`CNAME` records for `@` and `www`) — those keep serving the existing Squarespace site untouched. Only the `start` subdomain record is added.
- Confirm it's working: the domain should show a green "Valid Configuration" in Vercel's domain settings, not a DNS warning.
