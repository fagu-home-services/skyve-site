import { Icon } from "@/components/shared/Icon";
import { IP_SNAPSHOT, IP_REVENUE, IP_USE } from "@/lib/investors-data";
import { conicStops } from "@/lib/conic-stops";

function RevenueChart() {
  const max = Math.max(...IP_REVENUE.bars.map((b) => b.value));
  return (
    <div className="mt-4 flex items-end justify-between gap-3" style={{ height: 180 }}>
      {IP_REVENUE.bars.map((b, i) => (
        <div key={b.year} className="flex flex-1 flex-col items-center justify-end gap-2">
          <span className="text-[11px] font-bold text-horizon">{b.label}</span>
          <div
            className={`w-full max-w-[46px] rounded-t-md ${i === IP_REVENUE.bars.length - 1 ? "bg-ridge" : "bg-ridge/70"}`}
            style={{ height: `${(b.value / max) * 130}px` }}
          />
          <span className="text-[10px] text-ink-50">{b.year}</span>
        </div>
      ))}
    </div>
  );
}

function UseDonut() {
  const stops = conicStops(IP_USE, { normalizeTo100: false });
  return (
    <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative h-32 w-32 shrink-0">
        <div className="h-full w-full rounded-full" style={{ background: `conic-gradient(${stops.join(", ")})` }} />
        <div className="absolute inset-[26%] rounded-full bg-clear" />
      </div>
      <ul className="flex-1 space-y-2">
        {IP_USE.map((s) => (
          <li key={s.label} className="flex items-start gap-2 text-xs">
            <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
            <span className="w-8 shrink-0 font-bold text-horizon">{s.pct}%</span>
            <span className="min-w-0">
              <span className="block font-semibold text-horizon">{s.label}</span>
              <span className="block text-[10px] text-ink-50">{s.desc}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IPSnapshot() {
  return (
    <section className="bg-clear py-10">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Snapshot */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Company Snapshot</h2>
          <ul className="mt-4 space-y-3.5">
            {IP_SNAPSHOT.map((s) => (
              <li key={s.label} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={s.icon} className="h-4 w-4 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{s.label}</p>
                  <p className="text-[11px] leading-snug text-ink-50">{s.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Revenue */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">
            Revenue Growth <span className="text-ink-50">(Projected)</span>
          </h2>
          <p className="mt-3 font-serif text-3xl font-extrabold text-horizon">{IP_REVENUE.headline}</p>
          <p className="text-[11px] text-ink-50">{IP_REVENUE.sub}</p>
          <RevenueChart />
        </div>

        {/* Use of investment */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Use of Investment</h2>
          <UseDonut />
        </div>
      </div>
    </section>
  );
}
