"use client";

import { useState } from "react";
import {
  ChevronDown,
  UploadCloud,
  ArrowRight,
  Clock,
  Award,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { PROJECT_TYPE_OPTIONS, TIMELINE_OPTIONS } from "@/lib/contact-data";
import { submitLead } from "@/lib/lead-client";

const ASSURANCES = [
  { icon: Clock, title: "Fast response", desc: "We reply in under 1 business day." },
  { icon: ShieldCheck, title: "No pressure", desc: "Honest advice, no pushy sales." },
  { icon: Award, title: "25-year warranty", desc: "Workmanship, backed in writing." },
];

const INPUT =
  "mt-1.5 w-full rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge";

export function ContactFormSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    projectType: PROJECT_TYPE_OPTIONS[0] ?? "",
    timeline: TIMELINE_OPTIONS[0] ?? "",
    message: "",
    _hp: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.firstName.trim() && !form.lastName.trim()) return setError("Please enter your name.");
    if (!form.email.trim() && !form.phone.trim()) return setError("Please enter an email or a phone number.");
    setStatus("sending");
    const res = await submitLead({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      address: form.address,
      service: form.projectType,
      timeline: form.timeline,
      message: form.message,
      _hp: form._hp,
    });
    if (res.ok) {
      setStatus("done");
    } else {
      setStatus("idle");
      setError(res.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact-form" className="scroll-mt-24 bg-clear py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
        {/* Intro */}
        <div>
          <p className="eyebrow text-ridge">Send a Message</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">Tell Us About Your Project</h2>
          <p className="mt-4 max-w-md text-ink-70">
            Fill out the form and our team will get back to you with next steps — an estimate, an inspection, or answers
            to your questions.
          </p>
          <ul className="mt-8 space-y-5">
            {ASSURANCES.map((a) => (
              <li key={a.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                  <a.icon className="h-5 w-5 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{a.title}</p>
                  <p className="text-sm text-ink-50">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-clear p-7 shadow-elevated ring-1 ring-mist lg:p-8">
          {status === "done" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                <CheckCircle2 className="h-8 w-8 text-success" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-bold text-horizon">Message sent!</h3>
              <p className="mt-2 max-w-sm text-sm text-ink-70">
                Thanks, {form.firstName || "there"} — our team will reach out within one business day. Need us sooner?
                Call <span className="font-semibold text-ridge">(425) 628-8505</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-horizon">
                <MessageSquare className="h-5 w-5 text-ridge" /> Send Us a Message
              </h3>
              <div className="mt-5 grid gap-4">
                {/* honeypot (hidden from users) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={form._hp}
                  onChange={set("_hp")}
                  className="hidden"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-medium text-ink-70">First Name</span>
                    <input type="text" value={form.firstName} onChange={set("firstName")} className={INPUT} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-70">Last Name</span>
                    <input type="text" value={form.lastName} onChange={set("lastName")} className={INPUT} />
                  </label>
                </div>
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
                <label className="block">
                  <span className="text-xs font-medium text-ink-70">Property Address</span>
                  <input type="text" value={form.address} onChange={set("address")} className={INPUT} />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-ink-70">Project Type</span>
                  <div className="relative mt-1.5">
                    <select
                      value={form.projectType}
                      onChange={set("projectType")}
                      className="w-full appearance-none rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge"
                    >
                      {PROJECT_TYPE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-ink-70">Estimated Project Timeline</span>
                  <div className="relative mt-1.5">
                    <select
                      value={form.timeline}
                      onChange={set("timeline")}
                      className="w-full appearance-none rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge"
                    >
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-ink-70">Message</span>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us more about your project..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
                  />
                </label>
                <div>
                  <span className="text-xs font-medium text-ink-70">Upload Photos (Optional)</span>
                  <div className="mt-1.5 flex flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-mist bg-mist-soft px-4 py-6 text-center">
                    <UploadCloud className="h-5 w-5 text-ink-50" />
                    <p className="text-xs text-ink-50">Drag &amp; drop files here or click to browse</p>
                    <p className="text-[10px] text-ink-50">JPG, PNG up to 10MB each</p>
                  </div>
                </div>
                {error && <p className="text-sm font-medium text-danger">{error}</p>}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="flex items-center justify-center gap-1.5 text-[11px] text-ink-50">
                  <Clock className="h-3.5 w-3.5" />
                  Average response time: Under 1 business day
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
