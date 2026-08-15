"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, TrendingUp } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { MON_TABS, MON_HEALTH, MON_TREND, MON_LIVE, MON_ACTIVITY } from "@/lib/portal-monitoring-data";

function Spark() {
  return (
    <svg viewBox="0 0 120 20" className="mt-2 h-5 w-full" preserveAspectRatio="none">
      <polyline
        points="0,15 15,12 30,14 45,10 60,12 75,8 90,11 105,7 120,9"
        fill="none"
        stroke="var(--color-success)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function trendPoints() {
  const pts = MON_TREND.points;
  const w = 700;
  const h = 150;
  return pts.map((v, i) => `${((i / (pts.length - 1)) * w).toFixed(1)},${(h - (v / 100) * h).toFixed(1)}`).join(" ");
}

export function MonMain() {
  const [tab, setTab] = useState("Overview");
  const pts = trendPoints();
  const last = pts.split(" ").slice(-1)[0].split(",");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {MON_TABS.map((t) => (
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

      {/* Home Health Overview */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{MON_HEALTH.title}</h2>
        <p className="text-xs text-ink-50">{MON_HEALTH.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MON_HEALTH.cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-mist bg-clear p-4 text-center shadow-card">
              <Icon name={c.icon} className="mx-auto h-6 w-6 text-ridge" />
              <p className="mt-2 text-[11px] text-ink-50">{c.title}</p>
              <p className="font-serif text-xl font-bold text-success">{c.value}</p>
              <p className="text-[11px] font-semibold text-ink-70">{c.tag}</p>
              <p className="text-[10px] text-ink-50">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roof Health Trend */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-bold text-horizon">{MON_TREND.title}</h2>
            <p className="text-xs text-ink-50">{MON_TREND.subtitle}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-mist px-3 py-1.5 text-xs font-semibold text-ink-70">
            {MON_TREND.range} <ChevronDown className="h-3.5 w-3.5" />
          </span>
        </div>
        <svg viewBox="0 0 700 160" className="mt-4 h-40 w-full" preserveAspectRatio="none">
          {[0, 25, 50, 75, 100].map((g) => (
            <line key={g} x1="0" x2="700" y1={150 - (g / 100) * 150} y2={150 - (g / 100) * 150} stroke="var(--color-mist)" strokeWidth="0.5" />
          ))}
          <polyline points={pts} fill="none" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={last[0]} cy={last[1]} r="4" fill="var(--color-success)" />
        </svg>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-success/8 px-3 py-2.5">
          <span className="flex items-center gap-1.5 text-xs text-ink-70">
            <TrendingUp className="h-3.5 w-3.5 text-success" /> {MON_TREND.note}
          </span>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View Details <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Live Monitoring */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{MON_LIVE.title}</h2>
        <p className="text-xs text-ink-50">{MON_LIVE.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MON_LIVE.sensors.map((s) => (
            <div key={s.title} className="rounded-2xl border border-mist bg-clear p-4 shadow-card">
              <div className="flex items-center justify-between">
                <Icon name={s.icon} className="h-5 w-5 text-ridge" />
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.statusTone}`}>{s.status}</span>
              </div>
              <p className="mt-2 text-[11px] font-semibold text-ink-70">{s.title}</p>
              <p className="font-serif text-xl font-bold text-horizon">
                {s.value}
                {s.unit && <span className="text-sm">{s.unit}</span>}
              </p>
              <p className="text-[11px] text-ink-50">{s.label}</p>
              <Spark />
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{MON_ACTIVITY.title}</h2>
        <p className="text-xs text-ink-50">{MON_ACTIVITY.subtitle}</p>
        <div className="mt-4 divide-y divide-mist">
          {MON_ACTIVITY.items.map((a) => (
            <div key={a.title} className="flex items-center gap-4 py-3 first:pt-0">
              <Icon name={a.icon} className={`h-5 w-5 shrink-0 ${a.tone}`} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{a.title}</p>
                <p className="text-[11px] text-ink-50">{a.desc}</p>
              </div>
              <span className="hidden shrink-0 text-[11px] text-ink-50 sm:block">{a.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ridge hover:text-accent">
            View All Activity <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
