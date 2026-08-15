# Skyve Roofing & Exteriors — Deploy & Integration Handoff

**For:** the developer deploying this site and connecting it to the Verascor CRM.
**What this is:** a Next.js marketing + lead-generation website. It has **no database of its own** — every lead is forwarded to the **Verascor CRM**. The company's sales/ops team manages leads, customers and jobs inside the Verascor platform; this site is the public front door (marketing + lead capture).

Follow this doc top to bottom and the deploy + integration is ~30 minutes.

---

## 1. Tech stack & prerequisites

| | |
|---|---|
| Framework | **Next.js 16.2.9** (App Router, Turbopack) |
| Runtime | **React 19.2** |
| Styling | **Tailwind CSS v4** (`@theme` tokens in `app/globals.css`) |
| Language | TypeScript |
| Node | **20.x or newer** (Next 16 requires ≥ 18.18; use 20 LTS) |
| Package manager | npm (a `package-lock.json` is included) |

> ⚠️ **Read `AGENTS.md` before touching framework code.** This repo pins Next 16, which has breaking changes vs older App Router conventions. The bundled docs live in `node_modules/next/dist/docs/`.

---

## 2. Local setup (run it once before deploying)

```bash
npm install
cp .env.example .env.local     # then fill in the values (see §3)
npm run dev                    # dev server → http://localhost:3000
```

To reproduce a production build locally:

```bash
npm run build
npm start                      # serves the production build on :3000
```

If `npm run build` succeeds, the site is deploy-ready. It builds **135 static/SSG routes** plus one dynamic API route (`/api/lead`).

---

## 3. Environment variables ← **the only thing you must configure**

Copy `.env.example` to `.env.local` (local) and set the same keys in your host's dashboard (production).

| Variable | Scope | What it is |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | public | Canonical production origin, **no trailing slash**. Drives canonical/OG tags, `robots.txt`, `sitemap.xml`. |
| `VERASCOR_API_URL` | **server-only** | Base URL of the Verascor API v1, **no trailing slash**. The lead route posts to `${VERASCOR_API_URL}/crm/leads`. |
| `VERASCOR_INTAKE_KEY` | **server-only** | The Skyve public intake key created in Verascor (`crm_intake_keys` row, org = Skyve). |

```dotenv
NEXT_PUBLIC_SITE_URL=https://www.skyvewa.com
VERASCOR_API_URL=https://<verascor-host>/api/v1
VERASCOR_INTAKE_KEY=<the Skyve public_key from crm_intake_keys>
```

**Where to get the Verascor values:** they were created on the Verascor side (org + intake key in the `crm_intake_keys` table). `VERASCOR_API_URL` is the base of the Verascor API v1 (the same host that serves `POST /api/v1/crm/leads`). `VERASCOR_INTAKE_KEY` is that row's `public_key`.

> 🔐 `VERASCOR_INTAKE_KEY` and `VERASCOR_API_URL` **do not** have the `NEXT_PUBLIC_` prefix on purpose — they stay server-side and are never shipped to the browser. Do not rename them with `NEXT_PUBLIC_`.

> ⚠️ **Confirm the domain.** `NEXT_PUBLIC_SITE_URL` defaults to `https://www.skyvewa.com` (matches the company email `info@skyvewa.com`). If the live domain is different, set it — otherwise `sitemap.xml` / canonical tags will point to the wrong host.

**Graceful pre-connection behavior:** if `VERASCOR_API_URL` + `VERASCOR_INTAKE_KEY` are not both set, the forms still work — submissions are validated and **logged server-side** (nothing is lost) but not forwarded. Set both to go live with the CRM.

---

## 4. How the Verascor integration works

```
Browser form (Contact / Estimate)
   └─ POST /api/lead            (same-origin; runs on the server)
        ├─ honeypot check + validation (name + email|phone)
        ├─ maps fields → Verascor contract, injects VERASCOR_INTAKE_KEY
        └─ POST ${VERASCOR_API_URL}/crm/leads     (server-to-server)
                 └─ Verascor CRM  → crm_leads (org = Skyve)
```

**Why the proxy (`/api/lead`) instead of posting to Verascor from the browser:**
1. The intake key stays server-side (never exposed in client JS).
2. **No CORS to worry about** — the call to Verascor is server-to-server.
3. First-touch attribution (UTM / `gclid` / referrer) is attached automatically.

**Verascor contract** (already implemented — for your reference): `POST {VERASCOR_API_URL}/crm/leads`, JSON body with `key`, `name` (required), `email`/`phone` (at least one), plus optional `service`, `message`, `address`, `city`, `state`, `postal_code`, `preferred_date`, `utm_*`, `gclid`, `referrer`. Verascor de-duplicates by org + person + day and returns `201 { ok, lead_id, message }`.

**Failure handling (already built):**
| Situation | User sees | Server does |
|---|---|---|
| Success | "Thanks — we'll reach out within 1 business day." | forwards, gets `lead_id` |
| Verascor unreachable / rejects | "Please call us at (425) 628-8505." (HTTP 502) | logs the error |
| Env not configured yet | success message | logs the full lead so nothing is lost |
| Bot (honeypot filled) | success message | silently drops, does **not** forward |

**Key files:**
- `app/api/lead/route.ts` — the server route (mapping, validation, forwarding).
- `lib/lead-client.ts` — client submit helper + attribution + analytics event.
- `components/contact/ContactFormSection.tsx`, `components/estimate/Step1Address.tsx` — the two wired forms.

---

## 5. Deploy

### Option A — Vercel (recommended, zero-config)
1. Import the repo into Vercel. It auto-detects Next.js (build: `next build`, output handled automatically).
2. **Project → Settings → Environment Variables:** add the three vars from §3 (Production + Preview).
3. Deploy.
4. **Domain:** Settings → Domains → add `www.skyvewa.com` (and the apex `skyvewa.com` → redirect to `www`). Point DNS as Vercel instructs; SSL is automatic.
5. Make sure `NEXT_PUBLIC_SITE_URL` matches the final domain, then redeploy if you changed it.

### Option B — any Node host (Render, Fly, a VPS, etc.)
```bash
npm ci
npm run build
npm start          # starts the production server (PORT env respected; default 3000)
```
Put it behind your reverse proxy / SSL (nginx, Caddy, etc.), set the three env vars in the process environment, and point the domain at it. The `/api/lead` route needs the Node server runtime (it is not a static export).

> This is **not** a static export — it has a server route (`/api/lead`). Do not `next export` / deploy as pure static.

---

## 6. Post-deploy smoke test (verify the integration end-to-end)

1. **Site loads:** open the homepage on the real domain.
2. **robots/sitemap:** `https://<domain>/robots.txt` and `/sitemap.xml` — confirm they show your real domain (not skyvewa.com if you changed it).
3. **Submit a real test lead:** go to `/contact` (or `/estimate/instant`), fill name + email/phone, submit → you should see the success state.
4. **Confirm it landed in Verascor:** check the Skyve org's CRM inbox in Verascor (`GET /crm/leads` for the org, or the CRM UI) — the test lead should appear in the **"new"** stage with the right fields (name, email/phone, service, address).
5. **Quick API check** (optional):
   ```bash
   curl -s -X POST https://<domain>/api/lead \
     -H 'Content-Type: application/json' \
     -d '{"name":"Deploy Test","email":"test@example.com","service":"Roof Repair"}'
   # → {"ok":true,"delivered":true,"lead_id":...}
   ```
   If you get `"delivered":false`, the env vars aren't set. If `502`, the env is set but Verascor rejected/was unreachable — check `VERASCOR_API_URL`, the key, and that the Verascor host is reachable from your server.

---

## 7. What's live vs deferred (don't think pages are "broken")

The site is split into a focused **Launch v1** surface and a **Phase 2** set that is intentionally hidden but still deployed.

- **v1 (public, indexed):** home, all services / exteriors / materials, service area + 33 city pages, why-skyve, about, contact, reviews, projects, financing, estimate, FAQ, legal, trust pages.
- **Phase 2 (deployed but hidden — removed from nav, `Disallow`ed in `robots.txt`, excluded from `sitemap.xml`):** customer portal, knowledge center (`/learn`), Skyve TV, field reports, community/ambassadors, pro-partner funnels, calculators, testimonials.

The gating is centralized in **`lib/launch-phase.ts`** (`PHASE2_PREFIXES`, `isPhase2()`, `SITE_URL`). To bring a section back in Phase 2, remove its prefix there and re-add its nav links in `lib/site-data.ts`. Nothing needs to be rebuilt from scratch.

Internal review tool (noindex): `/all-pages` — a clickable map of every route split v1 vs Phase 2.

---

## 8. Analytics / ad pixels (before running ads — TODO for you)

The conversion **event** already fires on a successful lead (`generate_lead` via `gtag`, `fbq`, and `dataLayer` — see `lib/lead-client.ts`). You still need to **install the tag scripts** and add the IDs:
- GA4 (`NEXT_PUBLIC_GA4_ID`), Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`), Google Ads (`NEXT_PUBLIC_GOOGLE_ADS_ID`) — placeholders are in `.env.example`.
- Add the scripts in `app/layout.tsx` (e.g. with `next/script`). Once installed, form submissions will report `generate_lead` automatically.

---

## 9. What was changed in this handoff (changelog)

- **Lead integration built:** `app/api/lead/route.ts` + `lib/lead-client.ts`; Contact and Estimate forms wired to Verascor CRM (were mock).
- **Launch phasing:** nav/footer curated to v1; `lib/launch-phase.ts` + `app/robots.ts` + `app/sitemap.ts` added; Phase-2 sections hidden.
- **Domain unified** on `NEXT_PUBLIC_SITE_URL` (fixed an inconsistency where the layout used `skyvewa.com` but robots/sitemap used `skyveroofing.com`).
- **Photography:** 50 branded photos wired site-wide via `components/shared/Photo.tsx` (no external stock).
- **QA:** 135 routes, 0 broken links, 0 v1 pages leaking to Phase 2, lead pipeline tested end-to-end (valid/invalid/honeypot/unreachable/not-configured).

---

## 10. Known non-blockers (nice-to-have, safe to launch without)

- **Per-page canonical / `og:url` tags** are not emitted per route yet (site-wide `metadataBase` is set, so OG images resolve correctly). No duplicate-content risk today (clean single URLs). Add per-page canonical when convenient.
- **Photo upload** on the contact form is a visual affordance only (files are not uploaded). Wire to storage later if needed.

---

**Questions on the Skyve side of the integration?** Everything lead-related routes through `app/api/lead/route.ts` — start there.
