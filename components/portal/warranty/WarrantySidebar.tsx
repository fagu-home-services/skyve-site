import { Phone, CircleCheck, ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PW_COVERAGE, PW_QUICK_ACTIONS, PW_HELP, PW_REMINDERS } from "@/lib/portal-warranty-data";

function coverageGradient() {
  const segs = PW_COVERAGE.segments;
  let acc = 0;
  const stops = segs
    .map((s) => {
      const from = acc;
      acc += s.pct;
      return `${s.color} ${from}% ${acc}%`;
    })
    .join(", ");
  return `conic-gradient(${stops})`;
}

export function WarrantySidebar() {
  return (
    <aside className="space-y-5">
      {/* Coverage overview */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PW_COVERAGE.title}</h3>
        <div className="mt-4 flex justify-center">
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full" style={{ background: coverageGradient() }}>
            <div className="flex flex-col items-center justify-center rounded-full bg-clear" style={{ height: "6.5rem", width: "6.5rem" }}>
              <span className="font-serif text-2xl font-bold text-horizon">{PW_COVERAGE.centerValue}</span>
              <span className="px-3 text-center text-[9px] leading-tight text-ink-50">{PW_COVERAGE.centerLabel}</span>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {PW_COVERAGE.segments.map((s) => (
            <li key={s.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-ink-70">
                <span className={`h-2 w-2 rounded-full ${s.tone}`} /> {s.label}
              </span>
              <span className="font-semibold text-horizon">{s.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PW_QUICK_ACTIONS.title}</h3>
        <div className="mt-3 space-y-1">
          {PW_QUICK_ACTIONS.items.map((a) => (
            <button key={a.label} type="button" className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
              <span className="flex items-center gap-2.5">
                <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
              </span>
              <ChevronRight className="h-4 w-4 text-ink-50" />
            </button>
          ))}
        </div>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{PW_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{PW_HELP.desc}</p>
        <a href={PW_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PW_HELP.button.label}
        </a>
        <a href={`tel:${PW_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {PW_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{PW_HELP.hours}</p>
      </div>

      {/* Important reminders */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PW_REMINDERS.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {PW_REMINDERS.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-xs text-ink-70">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {p}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
