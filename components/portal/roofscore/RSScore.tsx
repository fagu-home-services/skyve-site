import { Icon } from "@/components/shared/Icon";
import { RS_OVERALL } from "@/lib/portal-roofscore-data";

export function RSScore() {
  const s = RS_OVERALL;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <h2 className="text-sm font-bold text-horizon">Overall Roof Score</h2>

      <div className="mt-4 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
        {/* Gauge */}
        <div className="mx-auto">
          <div
            className="relative flex h-44 w-44 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-success) 0% ${s.score}%, var(--color-mist) ${s.score}% 100%)` }}
          >
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-4xl font-bold text-horizon">{s.score}</span>
              <span className="text-sm font-semibold text-success">{s.rating}</span>
            </div>
          </div>
        </div>

        {/* Blurb + stats */}
        <div>
          <p className="max-w-md text-sm leading-relaxed text-ink-70">{s.blurb}</p>
          <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {s.stats.map((st) => (
              <div key={st.label}>
                <Icon name={st.icon} className="h-5 w-5 text-ridge" />
                <p className="mt-1.5 text-[11px] text-ink-50">{st.label}</p>
                <p className="text-sm font-bold text-horizon">{st.value}</p>
                <p className="text-[10px] text-ink-50">{st.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scale */}
      <div className="mt-6">
        <div className="relative h-2.5 rounded-full" style={{ background: "linear-gradient(90deg, #dc2626, #f59e0b, #84cc16, #22c55e)" }}>
          <span
            className="absolute -top-6 -translate-x-1/2 rounded-full bg-success px-2 py-0.5 text-[10px] font-bold text-clear"
            style={{ left: `${s.score}%` }}
          >
            {s.score}
          </span>
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] text-ink-50">
          {s.scale.map((m) => (
            <span key={m.label} className="flex flex-col items-start">
              <span>{m.at}</span>
              <span className="font-semibold text-ink-70">{m.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
