"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/lead-client";

/* Captures first-touch ad attribution (utm_*, gclid, referrer) on page load and
   stores it for the session. Mounted once in the root layout so it runs on the
   ad landing page — the visitor then converts on /estimate/instant, where the
   stored attribution is attached to the lead. Renders nothing. */
export function Attribution() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
