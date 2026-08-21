# TechDepo Website

A professional business website for TechDepo (CCTV, computers/laptops, networking, and billing
software sales & service), built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Status: a few placeholders remain before launch

Real business info is wired in: phone/WhatsApp numbers (Ashish & Yogesh), email, both addresses
(Ahmednagar — primary, and Pimpri), GSTIN, Instagram, the real logo (favicon/header/footer/social
share image), and 4 genuine customer reviews. Still placeholder — **before going live**:

1. **Google Business Profile review link** in `src/config/site.ts` (search for the
   `PLACEHOLDER` comment). The site is live at https://techdepo.vercel.app — attach a real
   custom domain whenever one is purchased (see **Deployment** below) and update `domain` in
   `src/config/site.ts` to match.
2. **`src/data/projects.ts`** — still 6 clearly-labeled `[Sample]` placeholder projects; replace
   with real completed projects (real project photos aren't wired in yet either — see the
   `ProjectCard`/`image.placeholder` note in that file).
3. Set up email delivery — see **Environment Variables** below (forms work without this, but
   enquiries only get logged server-side, not emailed, until it's configured).

Nothing on the site claims a fake statistic, fake review, or fake years-in-business — those
sections were written to avoid unsupported claims per the original brief.

## Tech Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** for icons
- No database, no backend framework — enquiry forms use React 19 Server Actions that email
  submissions directly via the [Resend](https://resend.com) API (free tier: 3,000 emails/month).
- Content (services, projects, reviews, business info) lives in plain TypeScript files under
  `src/data/` and `src/config/` — no CMS or admin panel in this version, by design (see brief).

## Project Structure

```
src/
  app/                  Pages (App Router) — one folder per route
  components/
    layout/             Header, Footer
    sections/           Homepage/section-level building blocks
    forms/               Sales/Service/Contact forms + shared form fields
    ui/                  Button, Container, SectionHeading primitives
    icons/               Local social-icon SVGs (lucide-react dropped brand icons)
  config/site.ts        Central business info — phone, WhatsApp, address, etc.
  data/                 services.ts, projects.ts, reviews.ts — editable content
  lib/                  actions.ts (server actions), email.ts, validation.ts, structuredData.ts
  types/                Shared TypeScript types
```

## Local Development

```bash
npm install        # install dependencies
npm run dev         # start dev server at http://localhost:3000
npm run lint         # ESLint
npm run typecheck    # TypeScript check (tsc --noEmit)
npm run build         # production build
npm start              # run the production build locally (after `npm run build`)
```

No test suite is configured (none was requested; the project has no complex business logic that
would warrant one beyond the manual QA already performed).

## Environment Variables

Copy `.env.example` to `.env.local` for local development. All are optional — the site builds and
runs without any of them:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Enables emailing enquiry form submissions via [Resend](https://resend.com). Without it, submissions are logged to the server console only. |
| `ENQUIRY_TO_EMAIL` | Where enquiry notifications are sent. Defaults to `siteConfig.email`. |
| `RESEND_FROM_EMAIL` | Verified sender address for outgoing enquiry emails. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID. Analytics only loads if this is set. |

Set the same variables in your hosting provider's dashboard for production — never commit real
values to `.env.local` or `.env`.

## Deployment (Vercel — recommended, ₹0/month to start)

Vercel is the recommended host: it's built by the Next.js team, has zero-config support for
Server Actions/Route Handlers (used by the enquiry forms), and has a generous free tier.

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository — Next.js is
   auto-detected, no build configuration needed.
3. Add the environment variables from the table above under Project Settings → Environment
   Variables.
4. Deploy. Attach your domain under Project Settings → Domains.

Alternatively, deploy without git using the CLI:

```bash
npm install -g vercel
vercel --prod
```

### Alternative: Netlify

Netlify also has zero-config Next.js support (via `@netlify/plugin-nextjs`, auto-installed).
Import the repo at [app.netlify.com](https://app.netlify.com), or run `netlify deploy --prod`
after `npm install -g netlify-cli`.

### Alternative: Cloudflare Pages

Cloudflare Pages requires the `@cloudflare/next-on-pages` adapter for full Next.js
Server Actions support, which adds build complexity. It's a good option if you specifically want
everything on Cloudflare's network, but Vercel or Netlify will get you live faster with this
project as-is.

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
  automatically from the routes and data files — no manual editing needed as you add
  projects/services.
- Per-page metadata (title, description, canonical URL, Open Graph) is set in each route's
  `page.tsx`.
- `LocalBusiness` and `Service` structured data (JSON-LD) is generated from `src/config/site.ts`
  and `src/data/services.ts` — see `src/lib/structuredData.ts`. Update the config file and the
  structured data updates automatically.
- The favicon (`src/app/icon.png`) and Apple touch icon (`src/app/apple-icon.png`) are generated
  from the real logo at `/public/logo.png`. The Open Graph share image
  (`src/app/opengraph-image.tsx`) embeds that same logo at request time.
- Once real content is set, submit the site to
  [Google Search Console](https://search.google.com/search-console) and verify ownership.

## Anti-Spam

All three public forms (`/sales-enquiry`, `/service-enquiry`, `/contact`) share two lightweight,
serverless-friendly protections (see `src/lib/actions.ts` and `src/components/forms/AntiSpamFields.tsx`):

- A honeypot field, hidden off-screen, that only bots fill in.
- A minimum time-on-form check (rejects submissions faster than 1.5s from page load).

If spam becomes a real problem after launch, the next upgrade is adding
[Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) (free) — it's not wired up
here since it needs a site key that didn't exist yet.

## Known Placeholders to Replace

Search the codebase for these markers before launch:

- `PLACEHOLDER` comment in `src/config/site.ts` (Google review link)
- `[Sample]`-prefixed titles in `src/data/projects.ts`
