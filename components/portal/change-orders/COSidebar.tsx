import { ArrowRight, ChevronRight, Clock } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { CO_SUMMARY, CO_TOTAL, CO_IMPACT, CO_RESOURCES } from "@/lib/portal-change-orders-data";

function summaryGradient() {
  const total = CO_SUMMARY.total || 1;
  let acc = 0;
  const stops = CO_SUMMARY.segments
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

export function COSidebar() {
  return (
    <aside className="space-y-5">
      {/* Summary donut */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{CO_SUMMARY.title}</h3>
        <div className="mt-4 flex justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full" style={{ background: summaryGradient() }}>
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-clear">
              <span className="text-[10px] text-ink-50">Total</span>
              <span className="font-serif text-2xl font-bold text-horizon">{CO_SUMMARY.total}</span>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {CO_SUMMARY.segments.map((s) => (
            <li key={s.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-ink-70">
                <span className={`h-2 w-2 rounded-full ${s.tone}`} /> {s.label}
              </span>
              <span className="flex items-center gap-4">
                <span className="font-semibold text-horizon">{s.count}</span>
                <span className="w-20 text-right text-ink-50">{s.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Total */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5 text-center">
        <p className="text-sm font-bold text-horizon">{CO_TOTAL.title}</p>
        <p className="mt-2 font-serif text-3xl font-bold text-horizon">{CO_TOTAL.amount}</p>
        <p className="text-[11px] text-ink-50">{CO_TOTAL.sub}</p>
        <a href={CO_TOTAL.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {CO_TOTAL.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Impact */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{CO_IMPACT.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {CO_IMPACT.rows.map((r) => (
            <li key={r.label} className={`flex items-center justify-between text-sm ${r.bold ? "border-t border-mist pt-2.5" : ""}`}>
              <span className={r.bold ? "font-bold text-horizon" : "text-ink-50"}>{r.label}</span>
              <span className={`flex items-center gap-1 font-semibold ${r.tone ?? "text-horizon"} ${r.bold ? "font-bold" : ""}`}>
                {r.label === "Schedule Impact" && <Clock className="h-3.5 w-3.5" />}
                {r.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Helpful Resources */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{CO_RESOURCES.title}</h3>
        <ul className="mt-3 divide-y divide-mist">
          {CO_RESOURCES.items.map((r) => (
            <li key={r.label}>
              <a href={r.href} className="flex items-center justify-between gap-2 py-2.5 text-sm text-ink-70 hover:text-ridge">
                <span className="flex items-center gap-2.5">
                  <Icon name="document" className="h-4 w-4 text-ridge" /> {r.label}
                </span>
                <ChevronRight className="h-4 w-4 text-ink-50" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
