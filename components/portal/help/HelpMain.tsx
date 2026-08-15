"use client";

import { useState } from "react";
import { Search, ChevronRight, ChevronDown, Phone, Mail, MessageSquare, Paperclip } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { HLP_ACTIONS, HLP_CONTACT, HLP_KB, HLP_QUESTIONS, HLP_REQUEST, HLP_BAND } from "@/lib/portal-help-data";

export function HelpMain() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {/* How can we help */}
      <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
        <div>
          <h2 className="font-serif text-lg font-bold text-horizon">{HLP_ACTIONS.title}</h2>
          <p className="mt-1 text-xs text-ink-50">{HLP_ACTIONS.subtitle}</p>
        </div>
        <div>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input type="text" placeholder="Search for help articles, topics, or keywords..." className="w-full rounded-xl border border-mist bg-clear py-3 pl-11 pr-4 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HLP_ACTIONS.items.map((a) => (
              <button key={a.label} type="button" className="flex items-start gap-2.5 rounded-xl border border-mist bg-clear p-3 text-left transition-colors hover:border-ridge">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={a.icon} className="h-4 w-4 text-ridge" />
                </span>
                <span>
                  <span className="block text-xs font-bold text-horizon">{a.label}</span>
                  <span className="block text-[10px] leading-snug text-ink-50">{a.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact + Knowledge Base */}
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Contact Support */}
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <h2 className="text-sm font-bold text-horizon">{HLP_CONTACT.title}</h2>
          <p className="text-xs text-ink-50">{HLP_CONTACT.subtitle}</p>
          <ul className="mt-4 space-y-4">
            {HLP_CONTACT.items.map((c) => (
              <li key={c.label} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  {c.icon === "phone" ? <Phone className="h-4 w-4 text-ridge" /> : c.icon === "message" ? <Mail className="h-4 w-4 text-ridge" /> : <MessageSquare className="h-4 w-4 text-ridge" />}
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink-50">{c.label}</p>
                  <p className={`text-sm font-bold ${c.live ? "text-success" : "text-horizon"}`}>{c.value}</p>
                  <p className="text-[11px] text-ink-50">{c.sub}</p>
                </div>
              </li>
            ))}
          </ul>
          <button type="button" className="mt-4 w-full rounded-lg border border-ridge bg-clear py-2.5 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {HLP_CONTACT.button.label}
          </button>
        </div>

        {/* Knowledge Base */}
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-horizon">{HLP_KB.title}</h2>
            <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">View All Articles →</a>
          </div>
          <ul className="mt-3 divide-y divide-mist">
            {HLP_KB.items.map((k) => (
              <li key={k.title}>
                <a href="#" className="flex items-center gap-3 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={k.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-horizon">{k.title}</p>
                    <p className="text-[11px] leading-snug text-ink-50">{k.desc}</p>
                  </div>
                  <span className={`hidden shrink-0 rounded-md px-2.5 py-1 text-[10px] font-semibold sm:inline ${k.tagTone}`}>{k.tag}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-ink-50" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popular Questions + Submit a Request */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Popular Questions */}
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <h2 className="text-sm font-bold text-horizon">{HLP_QUESTIONS.title}</h2>
          <ul className="mt-4 space-y-2">
            {HLP_QUESTIONS.items.map((it, i) => (
              <li key={it.q} className="rounded-xl border border-mist">
                <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                  <span className="text-sm font-semibold text-horizon">{it.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-ink-50 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="px-4 pb-3 text-xs leading-relaxed text-ink-70">{it.a}</p>}
              </li>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm font-semibold text-ridge hover:text-accent">{HLP_QUESTIONS.link} →</a>
          </div>
        </div>

        {/* Submit a Request */}
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <h2 className="text-sm font-bold text-horizon">{HLP_REQUEST.title}</h2>
          <p className="text-xs text-ink-50">{HLP_REQUEST.subtitle}</p>
          <div className="mt-4 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-horizon">{HLP_REQUEST.typeLabel}</span>
                <div className="relative mt-1.5">
                  <select defaultValue="" className="w-full appearance-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge">
                    <option value="">{HLP_REQUEST.typePlaceholder}</option>
                    {HLP_REQUEST.typeOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
                </div>
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-horizon">{HLP_REQUEST.subjectLabel}</span>
                <input type="text" placeholder={HLP_REQUEST.subjectPlaceholder} className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-semibold text-horizon">{HLP_REQUEST.messageLabel}</span>
              <textarea rows={4} placeholder={HLP_REQUEST.messagePlaceholder} className="mt-1.5 w-full resize-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-dashed border-mist bg-mist-soft/40 p-4">
              <Paperclip className="h-5 w-5 shrink-0 text-ink-50" />
              <div className="text-xs text-ink-70">
                <p>Attach Files <span className="text-ink-50">(optional)</span></p>
                <p className="text-[11px] text-ink-50">{HLP_REQUEST.attachNote} <span className="font-semibold text-ridge">{HLP_REQUEST.attachLink}</span></p>
                <p className="text-[10px] text-ink-50">{HLP_REQUEST.attachMax}</p>
              </div>
            </div>
            <button type="button" className="rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
              {HLP_REQUEST.button}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="rounded-2xl border border-mist bg-sky-soft/40 p-6">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex items-start gap-3">
            <Icon name="shield" className="mt-0.5 h-6 w-6 shrink-0 text-ridge" />
            <div>
              <p className="text-sm font-bold text-horizon">{HLP_BAND.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-70">{HLP_BAND.desc}</p>
            </div>
          </div>
          {HLP_BAND.items.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <Icon name={b.icon} className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
              <div>
                <p className="text-sm font-bold text-horizon">{b.title}</p>
                <p className="text-[11px] leading-snug text-ink-50">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
