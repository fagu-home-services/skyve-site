"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { PM_TABS, PM_OVERVIEW, PM_UPCOMING, PM_TIPS, PM_BOTTOM } from "@/lib/portal-maintenance-data";

export function MaintMain() {
  const [tab, setTab] = useState("Overview");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {PM_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`shrink-0 whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors ${
              tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Overview */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{PM_OVERVIEW.title}</h2>
        <p className="text-xs text-ink-50">{PM_OVERVIEW.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PM_OVERVIEW.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-mist bg-clear p-4 shadow-card">
              <div className="flex items-center gap-2">
                <Icon name={s.icon} className={`h-4 w-4 ${s.tone}`} />
                <p className="text-[11px] text-ink-50">{s.label}</p>
              </div>
              <p className="mt-2 font-serif text-lg font-bold text-horizon">{s.value}</p>
              <p className="text-[11px] text-ink-50">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Maintenance */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">Upcoming Maintenance</h2>
        <div className="mt-4 divide-y divide-mist">
          {PM_UPCOMING.map((t) => (
            <article key={t.title} className="grid gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto_auto] sm:items-center">
              <div className="flex items-start gap-3">
                <Photo src="" seed={t.title} alt="" className="h-14 w-20 shrink-0 rounded-lg" />
                <div>
                  <p className="text-sm font-bold text-horizon">{t.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{t.desc}</p>
                  <span className={`mt-1.5 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${t.badgeTone}`}>{t.badge}</span>
                </div>
              </div>
              <div className="sm:text-right">
                <p className="text-sm font-semibold text-horizon">{t.date}</p>
                <p className="text-[11px] text-ink-50">{t.countdown}</p>
              </div>
              <button type="button" className="justify-self-start rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear sm:justify-self-end">
                View Details
              </button>
            </article>
          ))}
        </div>
        <Link href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ridge hover:text-accent">
          View Full Maintenance Schedule <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Tips & Guides */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-horizon">{PM_TIPS.title}</h2>
            <p className="text-xs text-ink-50">{PM_TIPS.subtitle}</p>
          </div>
          <Link href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All Guides <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PM_TIPS.items.map((g) => (
            <div key={g.title} className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
              <Photo src="" seed={g.title} alt="" className="h-24 w-full" />
              <div className="p-3">
                <p className="text-xs font-bold leading-snug text-horizon">{g.title}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink-50">{g.desc}</p>
                <a href="#" className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-ridge hover:text-accent">
                  Read More <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom band */}
      <div className="relative overflow-hidden rounded-2xl bg-sky-soft/50 p-6">
        <div className="relative z-10 flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clear shadow-card">
            <Home className="h-5 w-5 text-ridge" />
          </span>
          <div className="max-w-md">
            <h2 className="font-serif text-lg font-bold text-horizon">{PM_BOTTOM.title}</h2>
            <p className="mt-1 text-xs text-ink-70">{PM_BOTTOM.desc}</p>
            <Link href={PM_BOTTOM.button.href} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
              {PM_BOTTOM.button.label}
            </Link>
          </div>
        </div>
        <Home className="pointer-events-none absolute -right-4 top-1/2 hidden h-36 w-36 -translate-y-1/2 text-ridge/10 lg:block" />
      </div>
    </div>
  );
}
