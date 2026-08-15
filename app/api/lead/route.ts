import { NextResponse } from "next/server";

/**
 * Lead intake (Vercel serverless). Forwards straight to the Verascor CRM
 * (`POST {VERASCOR_API_URL}/crm/leads`) — Skyve keeps no database of its own.
 * Mirrors the contract the old public_html/api/lead.php used.
 *
 * Required env (set in Vercel → Project → Settings → Environment Variables):
 *   VERASCOR_API_URL     e.g. https://api.verascor.net/api/v1   (no trailing slash needed)
 *   VERASCOR_INTAKE_KEY  the Skyve intake key issued by the Verascor CRM
 * Optional:
 *   LEAD_FALLBACK_WEBHOOK  a webhook (e.g. Zapier catch hook → email) used
 *                          only when Verascor is not configured. Interim safety
 *                          net so leads are never silently lost before launch.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OK_MSG = "Thanks — we got your request and will reach out within 1 business day.";
const FAIL_MSG = "Something went wrong on our end. Please call us at (425) 628-8505.";

const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");
const isEmail = (e: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept & drop bots.
  if (str(body._hp) !== "" || str(body.fax_number) !== "") {
    return NextResponse.json({ ok: true, delivered: false, message: OK_MSG });
  }

  let name = str(body.name);
  if (!name) name = `${str(body.firstName)} ${str(body.lastName)}`.trim();
  const email = str(body.email);
  const phone = str(body.phone);

  if (!name) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!email && !phone) {
    return NextResponse.json({ ok: false, error: "Please enter an email or a phone number." }, { status: 400 });
  }
  if (email && !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const sourcePage = str(body.sourcePage);
  const lead: Record<string, string> = {};
  const put = (k: string, v: string) => {
    if (v) lead[k] = v;
  };
  put("name", name);
  put("email", email);
  put("phone", phone);
  put("service", str(body.service) || str(body.projectType));
  put("message", str(body.message));
  put("address", str(body.address));
  put("city", str(body.city));
  lead.state = str(body.state) || "WA";
  put("postal_code", str(body.zip) || str(body.postal_code));
  put("preferred_date", str(body.timeline) || str(body.preferred_date));
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "referrer"]) {
    put(k, str(body[k]));
  }
  put("referrer", lead.referrer || sourcePage);
  put("source_page", sourcePage);

  const url = (process.env.VERASCOR_API_URL || "").replace(/\/$/, "");
  const key = process.env.VERASCOR_INTAKE_KEY || "";
  const fallback = process.env.LEAD_FALLBACK_WEBHOOK || "";

  // Primary destination: Verascor CRM.
  if (url && key) {
    try {
      const res = await fetch(`${url}/crm/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ key, ...lead }),
        signal: AbortSignal.timeout(10000),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; lead_id?: number; id?: number };
      if (res.ok && data.ok !== false) {
        return NextResponse.json({ ok: true, delivered: true, message: OK_MSG, lead_id: data.lead_id ?? data.id ?? null });
      }
      console.error("[lead] Verascor forward failed", res.status, JSON.stringify(data));
      return NextResponse.json({ ok: false, error: FAIL_MSG }, { status: 502 });
    } catch (e) {
      console.error("[lead] Verascor forward error", (e as Error).message);
      return NextResponse.json({ ok: false, error: FAIL_MSG }, { status: 502 });
    }
  }

  // Interim: Verascor not configured yet → optional webhook so leads aren't lost.
  if (fallback) {
    try {
      await fetch(fallback, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "skyve", ...lead }),
        signal: AbortSignal.timeout(10000),
      });
      return NextResponse.json({ ok: true, delivered: true, message: OK_MSG });
    } catch (e) {
      console.error("[lead] Fallback webhook error", (e as Error).message);
    }
  }

  // Nothing configured — accept in the UI but DO NOT pretend it was delivered.
  // Launch checklist MUST set VERASCOR_API_URL + VERASCOR_INTAKE_KEY before real traffic.
  console.warn("[lead] No destination configured (VERASCOR_API_URL/INTAKE_KEY missing). Lead NOT delivered:", JSON.stringify(lead));
  return NextResponse.json({ ok: true, delivered: false, message: OK_MSG });
}
