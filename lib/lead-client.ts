/* Client-side lead submission → PHP (Locaweb) or configurable endpoint.
   Captures first-touch attribution (UTM + gclid + referrer) on landing and
   persists it in sessionStorage so it's attached even if the visitor navigates
   before submitting a form. */

export type LeadInput = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  service?: string;
  projectType?: string;
  timeline?: string;
  message?: string;
  /** hidden honeypot field — must stay empty */
  _hp?: string;
};

export type LeadResult = { ok: boolean; error?: string; message?: string; delivered?: boolean };

const ATTR_KEY = "skyve_attr";
const ATTR_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

/** Native Next Route Handler (Vercel) → forwards to Verascor CRM.
    Override via NEXT_PUBLIC_LEAD_ENDPOINT. */
const LEAD_ENDPOINT =
  process.env.NEXT_PUBLIC_LEAD_ENDPOINT?.trim() || "/api/lead/";

/** Read stored first-touch attribution, merging any UTM present in the current URL. */
function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  let stored: Record<string, string> = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTR_KEY) || "{}");
  } catch {}
  const params = new URLSearchParams(window.location.search);
  let changed = false;
  for (const f of ATTR_FIELDS) {
    const v = params.get(f);
    if (v && !stored[f]) {
      stored[f] = v;
      changed = true;
    }
  }
  if (!stored.referrer && document.referrer && !document.referrer.includes(window.location.host)) {
    stored.referrer = document.referrer;
    changed = true;
  }
  if (changed) {
    try {
      sessionStorage.setItem(ATTR_KEY, JSON.stringify(stored));
    } catch {}
  }
  return stored;
}

/** Capture first-touch attribution on page load. Must run on every page: the
    ad lands on the landing page but the form is submitted on /estimate/instant,
    so without capturing at load the UTM/gclid would be lost on navigation. */
export function captureAttribution(): void {
  try {
    getAttribution();
  } catch {}
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...input,
        ...getAttribution(),
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "",
      }),
    });
    const data = (await res.json().catch(() => ({}))) as LeadResult;
    // fire a conversion event for analytics (GA4 / Meta / Google Ads) if present
    if (data.ok && typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.gtag === "function") w.gtag("event", "generate_lead", { source: input.service || "form" });
      if (typeof w.fbq === "function") w.fbq("track", "Lead");
      if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event: "generate_lead", lead_source: input.service || "form" });
    }
    return { ok: !!data.ok, error: data.error, message: data.message, delivered: data.delivered };
  } catch {
    return { ok: false, error: "Network error — please check your connection and try again." };
  }
}
