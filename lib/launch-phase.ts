/* ─────────────────────────────────────────────────────────────────────────
   LAUNCH PHASING — Skyve

   The whole site is built and deployed, but only a small, reviewed surface is
   exposed. This is an ALLOWLIST on purpose: pages are released one at a time as
   Fabricio finishes reviewing them, so "release a page" = add one line below.
   Anything not listed stays deployed but hidden (out of nav, out of sitemap,
   disallowed in robots). Nothing is ever rebuilt to bring it back.

   Why so small right now (2026-07-05): booked appointments start arriving this
   week. The site's job for that channel is NOT lead generation — the agency
   books the appointment. It is credibility: the homeowner googles "Skyve" before
   the visit to check the company is real. So the live set answers exactly that
   question and nothing else, and everything unreviewed stays out of sight.
   ──────────────────────────────────────────────────────────────────────── */

/** Live pages. To release a page: add its path here (exact match, no trailing slash). */
export const LAUNCH_PATHS: readonly string[] = [
  "/",                            // who we are
  "/why-skyve",                   // the differentiator (transparency + Verascor)
  "/services",                    // everything we do (hub)
  "/services/roof-replacement",   // the service being sold right now
  "/projects",                    // visual proof
  "/reviews",                     // social proof
  "/about",                       // real people
  "/contact",                     // real phone + address
  "/licenses-insurance",          // first thing a homeowner checks in roofing
  "/warranty",                    // what they get
  "/faq",                         // kills objections before the visit
  // "/financing",                // HIDDEN 2026-08-16: page advertised specific
  //                              lenders/rates (GreenSky, Synchrony, 0% APR) we
  //                              have no partner for yet. Re-enable when a real
  //                              financing partner is signed (and the page copy
  //                              is made honest).
  "/service-area",                // coverage = credibility
  "/legal/privacy",               // required
  "/legal/terms",                 // required
  "/estimate",                    // redirects to /estimate/instant
  "/estimate/instant",            // the working lead form
  "/free-estimate",               // paid-traffic landing page (self-noindex)

  // ── Fase 1.5 — libera as 33 cidades assim que o template for revisado ──
  // "/roofing-seattle-wa", "/roofing-bellevue-wa", ... (ver CIDADES abaixo)
];

/** The 33 city pages share ONE template: review /roofing-seattle-wa once and
    flip this to true to release all of them at the same time.
    Released 2026-07-05 — they were already public before the cut, so this
    restores existing pages rather than exposing anything new. */
export const CITIES_LIVE = true;

const norm = (p: string): string => {
  const clean = p.split("?")[0].split("#")[0];
  return clean.length > 1 && clean.endsWith("/") ? clean.slice(0, -1) : clean;
};

/** True if the route is exposed in this release. */
export function isLive(path: string): boolean {
  const p = norm(path);
  if (LAUNCH_PATHS.includes(p)) return true;
  if (CITIES_LIVE && p.startsWith("/roofing-")) return true;
  return false;
}

/** True if a route is deferred (hidden from nav, search and sitemap). */
export function isPhase2(path: string): boolean {
  return !isLive(path);
}

/** Server paths that must never be crawled, even though they aren't site routes. */
export const NEVER_CRAWL: readonly string[] = ["/painel/", "/api/", "/check.php", "/all-pages/"];

/**
 * Use for links that may point at a page that isn't released yet.
 * Keeps the link useful (the section still shows what we do) without sending a
 * visitor into a page nobody has reviewed. Falls back to the services hub.
 */
export function liveHref(href: string, fallback = "/services"): string {
  return isLive(href) ? href : fallback;
}

/** Canonical production origin — override via NEXT_PUBLIC_SITE_URL at deploy.
    Default: Locaweb domain skyve.net. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://skyve.net";
