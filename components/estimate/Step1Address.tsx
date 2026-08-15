"use client";

import { useState } from "react";
import { MapPin, Clock, ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { AERIAL_BENEFITS, AERIAL_IMAGE } from "@/lib/estimate-data";
import { submitLead } from "@/lib/lead-client";

const INPUT =
  "mt-1.5 w-full rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge";

export function Step1Address() {
  const [form, setForm] = useState({ address: "", name: "", email: "", phone: "", _hp: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) return setError("Please enter your name.");
    if (!form.email.trim() && !form.phone.trim()) return setError("Add an email or phone so we can send your estimate.");
    setStatus("sending");
    const res = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      service: "Instant Estimate Request",
      _hp: form._hp,
    });
    if (res.ok) setStatus("done");
    else {
      setStatus("idle");
      setError(res.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-6 lg:grid-cols-2">
        {/* Form card */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card lg:p-8">
          {status === "done" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                <CheckCircle2 className="h-8 w-8 text-success" />
              </span>
              <h2 className="mt-5 font-serif text-2xl font-bold text-horizon">You&apos;re all set!</h2>
              <p className="mt-2 max-w-sm text-sm text-ink-70">
                Thanks, {form.name}. We&apos;re pulling aerial measurements for{" "}
                <span className="font-semibold text-horizon">{form.address || "your property"}</span> and will send your
                estimate within one business day. Need it sooner? Call{" "}
                <span className="font-semibold text-ridge">(425) 628-8505</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h2 className="font-serif text-2xl font-bold text-horizon">Get Your Free Estimate</h2>
              <p className="mt-1 text-sm text-ink-50">
                Enter your address and contact info — we&apos;ll measure your roof from aerial data and send pricing.
              </p>

              {/* honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form._hp}
                onChange={set("_hp")}
                className="hidden"
              />

              <label className="mt-6 block text-xs font-semibold uppercase tracking-wide text-ink-70">
                Property Address
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-mist bg-mist-soft px-3.5 py-3 focus-within:border-ridge">
                <input
                  type="text"
                  value={form.address}
                  onChange={set("address")}
                  placeholder="Enter your property address"
                  className="w-full bg-transparent text-sm text-ink-90 outline-none placeholder:text-ink-50"
                />
                <MapPin className="h-4 w-4 text-ridge" />
              </div>
              <p className="mt-2 text-xs text-ink-50">We&apos;ll use aerial data to measure your roof.</p>

              <div className="mt-5 grid gap-4">
                <label className="block">
                  <span className="text-xs font-medium text-ink-70">Full Name</span>
                  <input type="text" value={form.name} onChange={set("name")} className={INPUT} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-medium text-ink-70">Email</span>
                    <input type="email" value={form.email} onChange={set("email")} className={INPUT} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-70">Phone</span>
                    <input type="tel" value={form.phone} onChange={set("phone")} className={INPUT} />
                  </label>
                </div>
              </div>

              {error && <p className="mt-4 text-sm font-medium text-danger">{error}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-ridge px-5 py-3.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Get My Free Estimate <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-ink-50">
                <Clock className="h-3.5 w-3.5" /> No obligation · Response within 1 business day
              </p>
            </form>
          )}
        </div>

        {/* Aerial visual */}
        <div className="relative">
          <Photo src={AERIAL_IMAGE} alt="Aerial roof measurement" className="aspect-[4/3] rounded-2xl shadow-card" />
          <div className="relative z-10 mx-4 -mt-16 rounded-xl border border-mist bg-clear p-5 shadow-elevated sm:mx-8">
            <h3 className="font-serif text-lg font-bold text-horizon">Why We Use Aerial Data</h3>
            <ul className="mt-3 grid gap-2.5">
              {AERIAL_BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-ink-70">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ridge/10">
                    <Check className="h-3 w-3 text-ridge" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
