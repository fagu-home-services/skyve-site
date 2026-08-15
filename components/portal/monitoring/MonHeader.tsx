import { MapPin } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { MON_HEADER } from "@/lib/portal-monitoring-data";

export function MonHeader() {
  const p = MON_HEADER;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <Photo src={p.image} seed="portal-house" alt={p.name} className="h-44 w-full rounded-xl" />

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ridge/12 px-3 py-1 text-[11px] font-semibold text-ridge">
            {p.status}
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon">{p.name}</h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-70">
            <MapPin className="h-4 w-4 text-ridge" /> {p.address}
          </p>

          <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-3">
            {p.specs.map((s) => (
              <div key={s.label}>
                <p className="text-[10px] uppercase tracking-wide text-ink-50">{s.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-horizon">{s.value}</p>
              </div>
            ))}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Verascor Score</p>
              <p className="mt-0.5 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/12 text-xs font-bold text-success">{p.score}</span>
                <span className="text-sm font-semibold text-success">{p.scoreRating}</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Monitoring Status</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> {p.monitoringStatus}
              </p>
              <p className="text-[10px] text-ink-50">{p.monitoringSub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
