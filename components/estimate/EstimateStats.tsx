import { Icon } from "@/components/shared/Icon";
import { ESTIMATE_STATS } from "@/lib/estimate-data";

export function EstimateStats() {
  return (
    <section className="bg-mist-soft pt-16 pb-4 lg:pt-20">
      <div className="container-skyve">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-mist bg-clear p-8 shadow-card lg:grid-cols-4">
          {ESTIMATE_STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                <Icon name={s.icon} className="h-6 w-6 text-ridge" />
              </span>
              <div>
                <p className="text-xs text-ink-50">{s.label}</p>
                <p className="font-mono text-2xl font-bold text-horizon">
                  {s.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
