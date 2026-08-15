import Link from "next/link";
import { ShieldCheck, Info, Check, ClipboardList, Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
import type { CalcData } from "@/lib/calculator-data";
import { conicStops } from "@/lib/conic-stops";

function Donut({ data }: { data: CalcData }) {
  const stops = conicStops(data.breakdown.segments);
  return (
    <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative h-32 w-32 shrink-0">
        <div className="h-full w-full rounded-full" style={{ background: `conic-gradient(${stops.join(", ")})` }} />
        <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full bg-clear text-center">
          <span className="font-serif text-base font-bold text-horizon">{data.breakdown.total}</span>
          <span className="text-[10px] text-ink-50">Average</span>
        </div>
      </div>
      <ul className="flex-1 space-y-2">
        {data.breakdown.segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-xs">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
            <span className="flex-1 text-ink-70">{s.label}</span>
            <span className="font-medium text-horizon">{s.amount}</span>
            <span className="w-9 text-right text-ink-50">({s.pct}%)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhatsIncludedCard({ data }: { data: CalcData }) {
  return (
    <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <h2 className="font-serif text-base font-bold text-horizon">What&apos;s Included</h2>
      <ul className="mt-4 space-y-2.5">
        {data.whatsIncluded.map((i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-ink-70">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" /> {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PreciseCard({ data }: { data: CalcData }) {
  return (
    <section className="rounded-2xl bg-horizon-deep p-5 text-clear shadow-card">
      <ClipboardList className="h-7 w-7 text-accent" />
      <h2 className="mt-2 font-serif text-lg font-bold leading-snug">{data.precise.title}</h2>
      <p className="mt-1.5 text-xs text-mist-soft/75">{data.precise.desc}</p>
      <Link href={data.precise.href} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
        {data.precise.button} <ArrowRight className="h-4 w-4" />
      </Link>
      <a href={COMPANY.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-sky hover:text-clear">
        <Phone className="h-4 w-4" /> {COMPANY.phone}
      </a>
    </section>
  );
}

export function CalcResults({ data }: { data: CalcData }) {
  return (
    <div className="space-y-6">
      {/* Estimated cost */}
      <section className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-mist-soft/60">{data.estimate.label}</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] font-bold uppercase text-success">
            <ShieldCheck className="h-3 w-3" /> Accuracy {data.estimate.accuracy}
          </span>
        </div>
        <p className="mt-2 font-serif text-3xl font-extrabold text-clear">{data.estimate.range}</p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-mist-soft/70">
          {data.estimate.perSqFt} <Info className="h-3.5 w-3.5" />
        </p>
      </section>

      {/* Summary */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="font-serif text-base font-bold text-horizon">Project Summary</h2>
        <dl className="mt-4 divide-y divide-mist text-sm">
          {data.summary.map((s) => (
            <div key={s.label} className="flex items-center justify-between py-2">
              <dt className="text-ink-50">{s.label}</dt>
              <dd className="font-medium text-horizon">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Breakdown */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="font-serif text-base font-bold text-horizon">Cost Breakdown</h2>
        <Donut data={data} />
      </section>

      {/* Materials */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-base font-bold text-horizon">{data.materialsHeading}</h2>
          <Link href="/learn/shingles" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All Materials <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {data.materials.map((m) => (
            <button
              key={m.name}
              type="button"
              className={`overflow-hidden rounded-xl border text-left transition-colors ${
                m.selected ? "border-ridge ring-1 ring-ridge" : "border-mist hover:border-ridge/40"
              }`}
            >
              <div className="relative">
                <Photo src={m.image} alt={m.name} className="aspect-[16/10]" />
                {m.selected && (
                  <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-ridge">
                    <Check className="h-2.5 w-2.5 text-clear" />
                  </span>
                )}
              </div>
              <div className="p-2.5">
                <p className="text-[11px] font-bold text-horizon">{m.name}</p>
                <p className="text-[10px] text-ink-50">{m.range}</p>
                <p className="mt-1 text-[9px] font-semibold uppercase text-ridge">{m.note}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Whats included + precise (only when no extras row) */}
      {!data.extrasRow && (
        <div className="grid gap-6 sm:grid-cols-2">
          <WhatsIncludedCard data={data} />
          <PreciseCard data={data} />
        </div>
      )}
    </div>
  );
}
