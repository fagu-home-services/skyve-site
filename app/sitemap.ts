import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/site-map";
import { isPhase2, SITE_URL } from "@/lib/launch-phase";

export const dynamic = "force-static";

/* Launch v1 sitemap: only the exposed marketing surface. Phase-2 routes are
   excluded here and disallowed in robots.ts; re-include them in Phase 2. */

// non-indexable utility routes to keep out of the sitemap
// /free-estimate is a paid-traffic landing page: noindex + kept out of the sitemap
const EXCLUDE = new Set(["/login", "/all-pages", "/estimate", "/free-estimate"]);

// rough priority by section (home highest, cities/services strong for SEO)
function meta(path: string): { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] } {
  if (path === "/") return { priority: 1, changeFrequency: "weekly" };
  if (path === "/instant-estimate" || path === "/contact") return { priority: 0.9, changeFrequency: "monthly" };
  if (path.startsWith("/services") || path.startsWith("/exteriors") || path.startsWith("/materials"))
    return { priority: 0.8, changeFrequency: "monthly" };
  if (path.startsWith("/roofing-") || path === "/service-area") return { priority: 0.7, changeFrequency: "monthly" };
  return { priority: 0.6, changeFrequency: "monthly" };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return SITE_ROUTES.filter((r) => !isPhase2(r.path) && !EXCLUDE.has(r.path))
    .map((r) => {
      const { priority, changeFrequency } = meta(r.path);
      return { url: `${SITE_URL}${r.path === "/" ? "" : r.path}`, lastModified: now, changeFrequency, priority };
    });
}
