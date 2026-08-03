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

## Deploy to Cloudflare Pages

1. **Connect the repo** (recommended) — in the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**, and select this repository. Alternatively, for a one-off deploy without Git, use **Direct Upload** and drag in the `out/` folder after running `npm run build` locally.
2. **Build settings** (only needed for the Git-connected flow):
   - **Build command:** `next build`
   - **Build output directory:** `out`
3. Cloudflare will build and deploy automatically on every push to the connected branch (Git flow), or serve the uploaded folder immediately (Direct Upload flow).

### DNS: subdomain setup

This site deploys to a subdomain (e.g. `book.halthehealthcoach.com`), separate from the root domain (`halthehealthcoach.com`), which stays on Squarespace.

- In Cloudflare Pages, add `book.halthehealthcoach.com` as a **Custom domain** for this Pages project. Cloudflare will provide the exact CNAME target to use (typically `<project-name>.pages.dev`).
- In whatever DNS provider manages `halthehealthcoach.com`'s DNS records (Squarespace, or elsewhere if already migrated), add a **CNAME record** for the `book` subdomain pointing to that Cloudflare Pages target.
- **Do not touch the root domain's existing Squarespace DNS records** (the `A`/`ALIAS`/`CNAME` records for `@` and `www`) — those keep serving the existing Squarespace site untouched. Only the new `book` subdomain record is added.
