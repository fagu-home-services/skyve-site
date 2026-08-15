import { Phone } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { TL_OVERVIEW, TL_KEY_DATES, TL_ACTIONS, TL_INSIGHTS, TL_HELP } from "@/lib/portal-timeline-data";

function overviewGradient() {
  const total = TL_OVERVIEW.total || 1;
  let acc = 0;
  const stops = TL_OVERVIEW.segments
    .filter((s) => s.count > 0)
    .map((s) => {
      const from = (acc / total) * 100;
      acc += s.count;
      const to = (acc / total) * 100;
      return `${s.color} ${from}% ${to}%`;
    })
    .join(", ");
  return `conic-gradient(${stops})`;
}

export function TLSidebar() {
  return (
    <aside className="space-y-5">
      {/* Overview donut */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{TL_OVERVIEW.title}</h3>
        <div className="mt-4 flex justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full" style={{ background: overviewGradient() }}>
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-2xl font-bold text-horizon">{TL_OVERVIEW.total}</span>
              <span className="text-[10px] text-ink-50">Total Events</span>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {TL_OVERVIEW.segments.map((s) => (
            <li key={s.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-ink-70">
                <span className={`h-2 w-2 rounded-full ${s.tone}`} /> {s.label}
              </span>
              <span className="font-semibold text-horizon">{s.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Dates */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{TL_KEY_DATES.title}</h3>
        <ul className="mt-3 space-y-3">
          {TL_KEY_DATES.items.map((k) => (
            <li key={k.title} className="flex items-start gap-3">
              <Icon name={k.icon} className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-horizon">{k.title}</p>
                  <p className="shrink-0 text-xs font-semibold text-horizon">{k.date}</p>
                </div>
                <p className="text-[11px] text-ink-50">{k.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline Actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{TL_ACTIONS.title}</h3>
        <div className="mt-3 space-y-1">
          {TL_ACTIONS.items.map((a) => (
            <button key={a.label} type="button" className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2.5 text-left text-sm font-medium text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
              <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Connected Insights */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{TL_INSIGHTS.title}</h3>
        <ul className="mt-3 space-y-3">
          {TL_INSIGHTS.items.map((it) => (
            <li key={it.title} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success/10">
                <Icon name={it.icon} className="h-4 w-4 text-success" />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{it.title}</p>
                <p className="text-[11px] leading-snug text-ink-50">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href={TL_INSIGHTS.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {TL_INSIGHTS.button.label}
        </a>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{TL_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{TL_HELP.desc}</p>
        <a href={TL_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {TL_HELP.button.label}
        </a>
        <a href={`tel:${TL_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {TL_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{TL_HELP.hours}</p>
      </div>
    </aside>
  );
}
