import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/site-map";
import { isLive, NEVER_CRAWL, SITE_URL } from "@/lib/launch-phase";

export const dynamic = "force-static";

/* The live surface is an allowlist (lib/launch-phase.ts), so instead of
   "Disallow: /" with Allow exceptions — one typo away from deindexing the whole
   site — we enumerate the routes that are NOT released. Explicit and safe: a
   page can only be blocked by being absent from LAUNCH_PATHS. */
export default function robots(): MetadataRoute.Robots {
  const deferred = SITE_ROUTES.filter((r) => !isLive(r.path))
    .map((r) => (r.path === "/" ? "" : `${r.path}/`))
    .filter(Boolean);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...new Set([...deferred, ...NEVER_CRAWL])].sort(),
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
