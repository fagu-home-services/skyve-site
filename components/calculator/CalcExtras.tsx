import { Icon } from "@/components/shared/Icon";
import { WhatsIncludedCard, PreciseCard } from "./CalcResults";
import type { CalcData } from "@/lib/calculator-data";

export function CalcExtras({ data }: { data: CalcData }) {
  if (!data.extrasRow) return null;
  return (
    <section className="bg-clear pb-4">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* What affects */}
        {data.whatAffects && (
          <div className="rounded-2xl border border-mist bg-mist-soft/40 p-6 shadow-card">
            <h2 className="font-serif text-base font-bold text-horizon">{data.whatAffects.title}</h2>
            <ul className="mt-4 space-y-4">
              {data.whatAffects.items.map((it) => (
                <li key={it.title} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-clear ring-1 ring-mist">
                    <Icon name={it.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-horizon">{it.title}</p>
                    <p className="mt-0.5 text-xs leading-snug text-ink-50">{it.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <WhatsIncludedCard data={data} />
        <PreciseCard data={data} />
      </div>
    </section>
  );
}
