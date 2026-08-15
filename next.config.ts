import type { NextConfig } from "next";

/** Vercel deployment (Next.js server + serverless functions).
 *  Lead intake is a native Route Handler at app/api/lead/route.ts, which
 *  forwards straight to the Verascor CRM (Skyve keeps no database of its own).
 *  Migrated off the old Locaweb static-export + PHP setup. */
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Keep raw <img>/next-image passthrough. Flip off to use Vercel image
    // optimization once we confirm bandwidth/cost.
    unoptimized: true,
  },
};

export default nextConfig;
