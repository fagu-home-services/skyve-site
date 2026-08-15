/**
 * REFERENCE ONLY — original Next.js lead route.
 * Production intake is public_html/api/lead.php (PostgreSQL on Locaweb).
 * Kept for contract parity when wiring Verascor later.
 *
 * @see public_html/api/lead.php
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PHONE = "(425) 628-8505";
const OK_MSG = "Thanks — we received your request. Our team will reach out within one business day.";
const FAIL_MSG = `We couldn't submit your request right now. Please call us at ${PHONE} and we'll help you directly.`;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const isEmail = (e: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (str(body._hp) !== "" || str(body.fax_number) !== "") {
    return Response.json({ ok: true, delivered: false, message: OK_MSG });
  }

  const name = str(body.name) || `${str(body.firstName)} ${str(body.lastName)}`.trim();
  const email = str(body.email);
  const phone = str(body.phone);

  if (!name) return Response.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  if (!email && !phone)
    return Response.json({ ok: false, error: "Please enter an email or a phone number." }, { status: 400 });
  if (email && !isEmail(email))
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });

  const endpoint = process.env.VERASCOR_API_URL?.replace(/\/$/, "");
  const key = process.env.VERASCOR_INTAKE_KEY;

  const payload: Record<string, unknown> = {
    key,
    name,
    email,
    phone,
    service: str(body.service) || str(body.projectType),
    message: str(body.message),
    address: str(body.address),
    city: str(body.city),
    state: str(body.state) || "WA",
    postal_code: str(body.zip) || str(body.postal_code),
    preferred_date: str(body.timeline) || str(body.preferred_date),
  };
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "referrer"]) {
    const v = str(body[k]);
    if (v) payload[k] = v;
  }
  if (str(body.sourcePage)) payload.referrer = payload.referrer || str(body.sourcePage);

  if (!endpoint || !key) {
    console.warn("[lead] Verascor not configured — lead captured to logs:", JSON.stringify({ ...payload, key: undefined }));
    return Response.json({ ok: true, delivered: false, message: OK_MSG });
  }

  try {
    const r = await fetch(`${endpoint}/crm/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    const data = (await r.json().catch(() => ({}))) as Record<string, unknown>;
    if (!r.ok || data.ok === false) {
      console.error("[lead] Verascor rejected the lead:", r.status, data);
      return Response.json({ ok: false, error: FAIL_MSG }, { status: 502 });
    }
    return Response.json({
      ok: true,
      delivered: true,
      lead_id: data.lead_id ?? data.id ?? null,
      message: typeof data.message === "string" ? data.message : OK_MSG,
    });
  } catch (e) {
    console.error("[lead] Verascor unreachable:", e);
    return Response.json({ ok: false, error: FAIL_MSG }, { status: 502 });
  }
}
