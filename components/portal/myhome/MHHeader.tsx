import { MapPin, CircleCheck, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { MH_HEADER } from "@/lib/portal-myhome-data";

export function MHHeader() {
  const p = MH_HEADER;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid gap-6 lg:grid-cols-[240px_1.3fr_auto_1fr] lg:items-center">
        {/* Image */}
        <Photo src={p.image} seed="portal-house" alt={p.name} className="h-44 w-full rounded-xl" />

        {/* Details */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ridge/12 px-3 py-1 text-[11px] font-semibold text-ridge">
            {p.status}
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon">{p.name}</h2>
          <p className="mt-1 flex items-start gap-1.5 text-sm text-ink-70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
            <span>{p.addressLine1}<br />{p.addressLine2}</span>
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {p.specs.map((s) => (
              <div key={s.label}>
                <p className="text-[10px] uppercase tracking-wide text-ink-50">{s.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-horizon">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verascor Score */}
        <div className="flex flex-col items-center border-t border-mist pt-4 lg:border-l lg:border-t-0 lg:px-6 lg:pt-0">
          <p className="text-[10px] uppercase tracking-wide text-ink-50">Verascor Score</p>
          <div
            className="relative mt-2 flex h-20 w-20 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-success) 0% ${p.score}%, var(--color-mist) ${p.score}% 100%)` }}
          >
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-xl font-bold text-horizon">{p.score}</span>
            </div>
          </div>
          <p className="mt-1 text-xs font-semibold text-success">{p.scoreRating}</p>
        </div>

        {/* Property Status */}
        <div className="border-t border-mist pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="text-[11px] font-semibold text-ink-50">{p.propertyStatus.label}</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-success">
            <CircleCheck className="h-5 w-5" /> {p.propertyStatus.headline}
          </p>
          <p className="mt-1 text-xs text-ink-70">{p.propertyStatus.desc}</p>
          <p className="mt-2 text-[11px] text-ink-50">{p.propertyStatus.updated}</p>
          <a href={p.propertyStatus.link.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            {p.propertyStatus.link.label} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
