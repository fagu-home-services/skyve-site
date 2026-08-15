import { Phone } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PI_OVERVIEW, PI_TYPES, PI_CONDITION, PI_QUICK_ACTIONS, PI_HELP } from "@/lib/portal-inspection-data";

function overviewGradient() {
  const total = PI_OVERVIEW.total || 1;
  let acc = 0;
  const stops = PI_OVERVIEW.segments
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

export function InspSidebar() {
  return (
    <aside className="space-y-5">
      {/* Overview donut */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PI_OVERVIEW.title}</h3>
        <div className="mt-4 flex justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full" style={{ background: overviewGradient() }}>
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-2xl font-bold text-horizon">{PI_OVERVIEW.total}</span>
              <span className="text-[10px] text-ink-50">Total</span>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {PI_OVERVIEW.segments.map((s) => (
            <li key={s.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-ink-70">
                <span className={`h-2 w-2 rounded-full ${s.tone}`} /> {s.label}
              </span>
              <span className="font-semibold text-horizon">{s.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Types */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PI_TYPES.title}</h3>
        <ul className="mt-3 space-y-1">
          {PI_TYPES.items.map((t) => (
            <li key={t.label} className="flex items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-mist-soft/60">
              <span className="flex items-center gap-2.5 text-ink-70">
                <Icon name={t.icon} className={`h-4 w-4 ${t.tone}`} /> {t.label}
              </span>
              <span className="font-semibold text-horizon">{t.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Condition summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">
          {PI_CONDITION.title} <span className="text-xs font-normal text-ink-50">{PI_CONDITION.latest}</span>
        </h3>
        <ul className="mt-3 space-y-2.5">
          {PI_CONDITION.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="text-ink-70">{r.label}</span>
              <span className={`font-semibold ${r.good ? "text-success" : "text-warning"}`}>{r.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PI_QUICK_ACTIONS.title}</h3>
        <div className="mt-3 space-y-1">
          {PI_QUICK_ACTIONS.items.map((a) => (
            <button key={a.label} type="button" className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2.5 text-left text-sm font-medium text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
              <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{PI_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{PI_HELP.desc}</p>
        <a href={PI_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PI_HELP.button.label}
        </a>
        <a href={`tel:${PI_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {PI_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{PI_HELP.hours}</p>
      </div>
    </aside>
  );
}
