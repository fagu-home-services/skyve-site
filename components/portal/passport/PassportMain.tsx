"use client";

import { useState } from "react";
import { ArrowRight, Shield } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { PP_TABS, PP_OVERVIEW, PP_SYSTEMS, PP_INCLUDES, PP_ACTIVITY, PP_BAND } from "@/lib/portal-passport-data";

export function PassportMain() {
  const [tab, setTab] = useState("Overview");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {PP_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`shrink-0 whitespace-nowrap border-b-2 px-3.5 py-2.5 text-sm font-semibold transition-colors ${
              tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Home Overview */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{PP_OVERVIEW.title}</h2>
        <p className="text-xs text-ink-50">{PP_OVERVIEW.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PP_OVERVIEW.cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-mist bg-clear p-4 text-center shadow-card">
              <Icon name={c.icon} className={`mx-auto h-6 w-6 ${c.tone}`} />
              <p className="mt-2 text-[11px] text-ink-50">{c.title}</p>
              <p className="font-serif text-xl font-bold text-horizon">{c.value}</p>
              <p className="text-[11px] text-ink-50">{c.sub}</p>
              <a href="#" className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-ridge hover:text-accent">
                {c.link} <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Systems at a Glance */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{PP_SYSTEMS.title}</h2>
        <p className="text-xs text-ink-50">{PP_SYSTEMS.subtitle}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center">
          <Photo src="" seed="passport-3d" alt="3D home model" className="h-56 w-full rounded-xl" />
          <ul className="space-y-2.5">
            {PP_SYSTEMS.items.map((s) => (
              <li key={s.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-sm text-ink-70">
                  <Icon name={s.icon} className="h-4 w-4 text-ridge" /> {s.label}
                </span>
                <span className="text-sm font-semibold text-success">{s.status}</span>
              </li>
            ))}
            <li className="pt-1 text-right">
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                View All Systems <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Your Passport Includes */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{PP_INCLUDES.title}</h2>
        <p className="text-xs text-ink-50">{PP_INCLUDES.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PP_INCLUDES.items.map((it) => (
            <div key={it.title} className="rounded-xl border border-mist bg-clear p-4 text-center shadow-card">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft">
                <Icon name={it.icon} className="h-5 w-5 text-ridge" />
              </span>
              <p className="mt-2.5 text-xs font-bold text-horizon">{it.title}</p>
              <p className="mt-1 text-[10px] leading-snug text-ink-50">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{PP_ACTIVITY.title}</h2>
        <div className="mt-4 divide-y divide-mist">
          {PP_ACTIVITY.items.map((a) => (
            <div key={a.title} className="flex items-center gap-4 py-3 first:pt-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={a.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{a.title}</p>
                <p className="text-[11px] text-ink-50">{a.desc}</p>
              </div>
              <span className="hidden shrink-0 text-[11px] text-ink-50 sm:block">{a.date}</span>
              <a href="#" className="shrink-0 text-xs font-semibold text-ridge hover:text-accent">{a.link}</a>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ridge hover:text-accent">
            View Full Activity History <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Band */}
      <div className="relative overflow-hidden rounded-2xl bg-success/8 p-6">
        <div className="relative z-10 flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clear shadow-card">
            <Shield className="h-5 w-5 text-success" />
          </span>
          <div className="max-w-lg">
            <h2 className="font-serif text-lg font-bold text-horizon">{PP_BAND.title}</h2>
            <p className="mt-1 text-xs text-ink-70">{PP_BAND.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
