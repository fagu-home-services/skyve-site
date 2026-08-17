"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { submitLead } from "@/lib/lead-client";

const SERVICES = [
  "Roof Replacement",
  "Roof Repair",
  "Gutters / Fascia",
  "Siding",
  "Skylights",
  "Roof Inspection",
  "Not sure yet",
];

const INPUT =
  "mt-1.5 w-full rounded-lg border border-mist bg-mist-soft px-3.5 py-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge";

export function InstantEstimateForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: SERVICES[0],
    message: "",
    _hp: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    const res = await submitLead(form);
    if (res.ok) {
      setStatus("done");
    } else {
      setStatus("error");
      setError(res.error || "Something went wrong. Please call (425) 628-8505.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-clear p-8 text-center shadow-elevated">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <h2 className="mt-4 font-serif text-2xl font-bold text-horizon">Thank you!</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-70">
          We got your request and a member of the Skyve team will reach out within{" "}
          <span className="font-semibold text-horizon">1 business day</span>. Need us sooner?
          Call <a href="tel:+14256288505" className="font-semibold text-ridge">(425) 628-8505</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-clear p-6 shadow-elevated sm:p-7">
      <h2 className="font-serif text-2xl font-bold text-horizon">Get your free estimate</h2>
      <p className="mt-1 text-sm text-ink-50">Honest, itemized pricing — no pressure.</p>

      {/* honeypot (hidden) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form._hp}
        onChange={set("_hp")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="mt-5 space-y-4">
        <label className="block">
          <span className="text-sm font-semibold text-ink-90">Full name</span>
          <input required value={form.name} onChange={set("name")} placeholder="Your name" className={INPUT} />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-ink-90">Phone</span>
            <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="(425) 000-0000" className={INPUT} />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-ink-90">Email</span>
            <input type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className={INPUT} />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-ink-90">Property address</span>
          <input value={form.address} onChange={set("address")} placeholder="123 Main St, Bothell, WA" className={INPUT} />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-ink-90">What do you need?</span>
          <select value={form.service} onChange={set("service")} className={INPUT}>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-ink-90">Anything else? <span className="font-normal text-ink-50">(optional)</span></span>
          <textarea value={form.message} onChange={set("message")} rows={3} placeholder="Tell us about your project…" className={INPUT} />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-accent/10 px-3.5 py-2.5 text-sm text-accent">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-bold text-clear shadow-card transition-colors hover:bg-accent-hover disabled:opacity-70"
      >
        {status === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <>Request My Free Estimate <ArrowRight className="h-4 w-4" /></>
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-50">
        <Lock className="h-3.5 w-3.5" /> Your information is secure and never sold.
      </p>
    </form>
  );
}
