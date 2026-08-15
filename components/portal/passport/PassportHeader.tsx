import { MapPin } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";
import { PP_HEADER } from "@/lib/portal-passport-data";

export function PassportHeader() {
  const p = PP_HEADER;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr_auto]">
        <Photo src={p.image} seed="portal-house" alt={p.name} className="h-40 w-full rounded-xl" />

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-3 py-1 text-[11px] font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> {p.status}
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon">{p.name}</h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-70">
            <MapPin className="h-4 w-4 text-ridge" /> {p.address}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {p.specs.map((s) => (
              <div key={s.label}>
                <p className="text-[10px] uppercase tracking-wide text-ink-50">{s.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-horizon">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 border-t border-mist pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="text-[10px] uppercase tracking-wide text-ink-50">Passport ID</p>
          <p className="mt-0.5 font-mono text-sm font-bold text-horizon">{p.passportId}</p>
          <p className="mt-3 text-[10px] uppercase tracking-wide text-ink-50">Created</p>
          <p className="mt-0.5 text-sm font-semibold text-horizon">{p.created}</p>
          <p className="mt-3 text-[10px] uppercase tracking-wide text-ink-50">Powered by</p>
          <VerascorMark className="mt-1" />
        </div>
      </div>
    </div>
  );
}
