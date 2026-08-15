import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { MON_ALERTS, MON_ENV, MON_UPTIME, MON_INTEGRATIONS, MON_TIPS } from "@/lib/portal-monitoring-data";

export function MonSidebar() {
  return (
    <aside className="space-y-5">
      {/* Active Alerts */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{MON_ALERTS.title}</h3>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <ul className="mt-3 space-y-3">
          {MON_ALERTS.items.map((a) => (
            <li key={a.title} className="flex gap-3">
              <Icon name={a.icon} className={`mt-0.5 h-4 w-4 shrink-0 ${a.tone}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-horizon">{a.title}</p>
                  <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold ${a.tagTone}`}>{a.tag}</span>
                </div>
                <p className="text-[11px] leading-snug text-ink-50">{a.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Environmental Conditions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MON_ENV.title}</h3>
        <p className="text-[11px] text-ink-50">{MON_ENV.location}</p>
        <ul className="mt-3 space-y-2.5">
          {MON_ENV.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5 text-ink-70">
                <Icon name={r.icon} className="h-4 w-4 text-ridge" /> {r.label}
              </span>
              <span className="font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-between border-t border-mist pt-3">
          <span className="text-[10px] text-ink-50">{MON_ENV.source}</span>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            {MON_ENV.link} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* System Uptime */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MON_UPTIME.title}</h3>
        <p className="text-[11px] text-ink-50">{MON_UPTIME.subtitle}</p>
        <p className="mt-3 text-center font-serif text-3xl font-bold text-success">{MON_UPTIME.pct}</p>
        <p className="text-center text-[11px] text-ink-50">{MON_UPTIME.period}</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist">
          <div className="h-full w-full rounded-full bg-success" />
        </div>
        <ul className="mt-3 space-y-2">
          {MON_UPTIME.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-ink-70">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> {r.label}
              </span>
              <span className="font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Connected Integrations */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MON_INTEGRATIONS.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {MON_INTEGRATIONS.items.map((it) => (
            <li key={it.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5 text-ink-70">
                <Icon name={it.icon} className="h-4 w-4 text-ridge" /> {it.label}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Connected
              </span>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {MON_INTEGRATIONS.link} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Monitoring Tips */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MON_TIPS.title}</h3>
        <p className="text-[11px] text-ink-50">{MON_TIPS.subtitle}</p>
        <ul className="mt-3 space-y-3">
          {MON_TIPS.items.map((t) => (
            <li key={t.title} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={t.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{t.title}</p>
                <p className="text-[11px] leading-snug text-ink-50">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {MON_TIPS.link} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
