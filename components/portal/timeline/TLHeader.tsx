import { MapPin, Calendar, ShieldCheck } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { TL_HEADER } from "@/lib/portal-timeline-data";

export function TLHeader() {
  const p = TL_HEADER;
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

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
            {p.specs.map((s) => (
              <div key={s.label}>
                <p className="text-[10px] uppercase tracking-wide text-ink-50">{s.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-horizon">{s.value}</p>
              </div>
            ))}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Verascor Score</p>
              <div className="mt-1 flex items-center gap-2">
                <div
                  className="relative flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ background: `conic-gradient(var(--color-success) 0% ${p.score}%, var(--color-mist) ${p.score}% 100%)` }}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-clear text-[11px] font-bold text-horizon">{p.score}</span>
                </div>
                <span className="text-xs font-semibold text-success">{p.scoreRating}</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Next Inspection</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-horizon">
                <Calendar className="h-4 w-4 text-ridge" /> {p.nextInspection}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Warranty Status</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-success">
                <ShieldCheck className="h-4 w-4" /> {p.warrantyStatus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
