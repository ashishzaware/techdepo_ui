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
| `WHATSAPP_ACCESS_TOKEN` | Meta permanent access token. Enables WhatsApp notifications — see **WhatsApp Business API Setup** below. |
| `WHATSAPP_PHONE_NUMBER_ID` | Phone Number ID from Meta's WhatsApp API Setup page. |
| `WHATSAPP_TEMPLATE_ALERT` | Approved template name for the business-side "new enquiry" alert. Default: `new_enquiry_alert`. |
| `WHATSAPP_TEMPLATE_THANK_YOU` | Approved template name for the customer "thank you" reply. Default: `enquiry_thank_you`. |
| `WHATSAPP_ALERT_NUMBERS` | Optional comma-separated override for who gets the owner alert. Defaults to every number in `siteConfig.contacts`. |

Set the same variables in your hosting provider's dashboard for production — never commit real
values to `.env.local` or `.env`.

## WhatsApp Business API Setup

Every enquiry form (`/sales-enquiry`, `/service-enquiry`, `/contact`) already calls out to
WhatsApp on submission — see `src/lib/whatsappBusiness.ts`, wired in via `dispatchNotifications`
in `src/lib/actions.ts`. Until you complete the steps below, those calls are no-ops that log to
the server console — nothing breaks, email notifications (once `RESEND_API_KEY` is set) keep
working independently.

What it does once configured:
- **Business alert** — every new enquiry sends a WhatsApp message to each number in
  `siteConfig.contacts` (currently Ashish and Yogesh).
- **Customer auto-reply** — the customer's own WhatsApp number (the mobile they submitted) gets
  a "thank you, we'll connect shortly" message automatically.

This requires Meta's official **WhatsApp Business Platform (Cloud API)** — there is no free way
to send automated WhatsApp messages without it, and Meta requires pre-approved message templates
for any message a business sends first (not started by the customer). Steps:

1. **Create a Meta Business Account** at [business.facebook.com](https://business.facebook.com) if
   you don't have one, and verify your business.
2. **Create an app** at [developers.facebook.com](https://developers.facebook.com/apps) → add the
   **WhatsApp** product to it.
3. **Add a phone number.** Meta gives you a free test number to start with (fine for testing, but
   it can only message a handful of verified test recipients). For production, add and verify a
   real number under WhatsApp → API Setup → Add Phone Number. Note: a number actively used in the
   regular consumer WhatsApp app can't easily also be used here — if you want to keep using the
   regular WhatsApp app on your existing numbers, use a spare/new number for this integration
   instead.
4. **Generate a permanent access token.** In Meta Business Settings → Users → System Users, create
   a System User, assign it to your WhatsApp app with `whatsapp_business_messaging` permission,
   and generate a token with no expiry. This is your `WHATSAPP_ACCESS_TOKEN`.
5. **Copy the Phone Number ID** from WhatsApp → API Setup (not the phone number itself — it's a
   numeric ID). This is your `WHATSAPP_PHONE_NUMBER_ID`.
6. **Create and submit two message templates** in WhatsApp Manager → Account Tools → Message
   Templates → Create Template. Use these exact settings so the code above matches without
   further changes:

   **Template 1 — `new_enquiry_alert`** (Category: Utility, Language: English)
   ```
   New {{1}} enquiry from {{2}} ({{3}}). Details: {{4}}
   ```
   Example values when submitting: `Sales`, `Ramesh Kumar`, `9876543210`, `CCTV Camera — need 4 cameras for shop`

   **Template 2 — `enquiry_thank_you`** (Category: Utility, Language: English)
   ```
   Hi {{1}}, thank you for reaching out to TechDepo! We've received your enquiry and our team will connect with you shortly.
   ```
   Example value: `Ramesh Kumar`

   Utility-category templates are reviewed faster than marketing ones and usually approve within
   a few hours.
7. **Add the environment variables** (`WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, and
   the two template names if you used different ones) to Vercel → Project Settings → Environment
   Variables, then redeploy.

Meta's Cloud API has a free monthly conversation allowance, then charges per conversation after
that — pricing depends on your business's country; check
[Meta's WhatsApp pricing page](https://developers.facebook.com/docs/whatsapp/pricing) for current
rates. For a small local business's enquiry volume, this typically stays within or close to the
free tier.

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
