# Skyve Roofing — Deploy on Vercel

The site is a Next.js 16 app (App Router). It deploys to **Vercel** from **GitHub**.
Migrated off the old Locaweb static-export + PHP setup: the lead form is now a
native serverless route (`app/api/lead/route.ts`) that forwards straight to the
**Verascor CRM** (Skyve keeps no database of its own).

## Repository
- **Root directory for Vercel = this folder** (`site/`). The sibling `public_html/`
  (old Locaweb PHP) is NOT part of the Vercel deploy.
- Framework preset: **Next.js** (auto-detected). Build command `next build`,
  output handled by Vercel. No `output: export`.

## One-time setup
1. Push this folder to a GitHub repo (see below).
2. In Vercel: **Add New → Project → import the GitHub repo**.
   - If the repo root is the monorepo, set **Root Directory = `skyve/site`**.
3. Add the environment variables (next section).
4. Deploy. Every push to the default branch → production; every PR → a preview URL.

## Environment variables (Vercel → Settings → Environment Variables)

| Variable | Required | Value |
|---|---|---|
| `VERASCOR_API_URL` | **yes** (before real traffic) | Verascor CRM API base, e.g. `https://api.verascor.net/api/v1` |
| `VERASCOR_INTAKE_KEY` | **yes** | The Skyve intake key issued by the Verascor CRM |
| `NEXT_PUBLIC_SITE_URL` | yes | Final public origin (no trailing slash), e.g. `https://skyve.net` |
| `LEAD_FALLBACK_WEBHOOK` | optional | Interim webhook (Zapier/Make → email) used only if Verascor is not set, so no lead is lost |
| `NEXT_PUBLIC_GA4_ID` | optional | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_META_PIXEL_ID` | optional | Meta Pixel id |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | optional | `AW-XXXXXXXXXX` |

> ⚠️ **Lead delivery gate:** until `VERASCOR_API_URL` **and** `VERASCOR_INTAKE_KEY`
> are set, the form still submits (visitor sees the thank-you) but the lead is
> **not delivered** (`delivered: false`, logged server-side). Set them — or a
> `LEAD_FALLBACK_WEBHOOK` — before sending real traffic.

## Domain
`skyve.net` currently points at Locaweb. To move: in Vercel → Domains add
`skyve.net`, then update DNS (A/CNAME) at the registrar to Vercel's targets.
Keep Locaweb up until DNS has propagated.

## The lead contract (forwarded to Verascor)
`POST {VERASCOR_API_URL}/crm/leads` with JSON:
`{ key, name, email?, phone?, service?, message?, address?, city?, state, postal_code?, preferred_date?, utm_*, gclid?, referrer?, source_page? }`
(empty fields omitted). Same contract the old `public_html/api/lead.php` used.

## Local dev
```bash
npm install
npm run dev        # http://localhost:3000
```
Copy `.env.example` → `.env.local` and fill values to test lead delivery locally.

## Notes
- `public/skyve-studio.html` is an internal content-editing tool (noindex). It is
  harmless in production but can be deleted before launch if you prefer it not be
  reachable.
