import { ArrowRight, FileText, Cloud } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { MH_ALERTS, MH_EVENTS, MH_WEATHER, MH_DOCUMENTS } from "@/lib/portal-myhome-data";

export function MHSidebar() {
  return (
    <aside className="space-y-5">
      {/* Active Alerts */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{MH_ALERTS.title}</h3>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <ul className="mt-3 space-y-3">
          {MH_ALERTS.items.map((a) => (
            <li key={a.title} className="flex gap-3">
              <Icon name={a.icon} className={`mt-0.5 h-4 w-4 shrink-0 ${a.tone}`} />
              <div>
                <p className="text-sm font-bold text-horizon">{a.title}</p>
                <p className="text-[11px] text-ink-50">{a.desc}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-warning">{a.meta}</p>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="mt-4 w-full rounded-lg border border-mist py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
          {MH_ALERTS.button.label}
        </button>
      </div>

      {/* Upcoming Events */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{MH_EVENTS.title}</h3>
          <a href={MH_EVENTS.button.href} className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View Calendar <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <ul className="mt-3 space-y-3">
          {MH_EVENTS.items.map((e) => (
            <li key={e.title} className="flex items-center gap-3">
              <div className="flex w-10 shrink-0 flex-col items-center rounded-lg bg-mist-soft/60 py-1">
                <span className="text-[9px] font-bold uppercase text-accent">{e.month}</span>
                <span className="font-serif text-base font-bold text-horizon">{e.day}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{e.title}</p>
                <p className="text-[11px] text-ink-50">{e.desc}</p>
              </div>
              <span className="shrink-0 text-[11px] font-semibold text-ink-70">{e.time}</span>
            </li>
          ))}
        </ul>
        <button type="button" className="mt-4 w-full rounded-lg border border-mist py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
          {MH_EVENTS.button.label}
        </button>
      </div>

      {/* Current Weather */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MH_WEATHER.title}</h3>
        <p className="text-[11px] text-ink-50">{MH_WEATHER.location}</p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Cloud className="h-9 w-9 text-sky" />
            <div>
              <p className="font-serif text-2xl font-bold text-horizon">{MH_WEATHER.temp}</p>
              <p className="text-[11px] text-ink-50">{MH_WEATHER.condition}</p>
            </div>
          </div>
          <ul className="space-y-1 text-[11px]">
            {MH_WEATHER.rows.map((r) => (
              <li key={r.label} className="flex items-center justify-between gap-3">
                <span className="text-ink-50">{r.label}</span>
                <span className="font-semibold text-horizon">{r.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <a href={MH_WEATHER.link.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {MH_WEATHER.link.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Important Documents */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MH_DOCUMENTS.title}</h3>
        <ul className="mt-3 space-y-3">
          {MH_DOCUMENTS.items.map((d) => (
            <li key={d.name} className="flex items-center gap-3">
              <FileText className={`h-4 w-4 shrink-0 ${d.tone}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-horizon">{d.name}</p>
                <p className="text-[11px] text-ink-50">{d.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href={MH_DOCUMENTS.link.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {MH_DOCUMENTS.link.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
