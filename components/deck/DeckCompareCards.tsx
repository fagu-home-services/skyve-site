import Link from "next/link";
import { ShieldCheck, Check, DollarSign, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import {
  DECK_CONSTRUCTION,
  DECK_WARRANTY_CARD,
  DECK_FINANCING,
} from "@/lib/deck-data";
import type { MaterialPage } from "@/lib/material-pages";

type WarrantyCard = { title: string; text: string; items: string[]; footer: string };
type FinancingCard = { title: string; text: string };

export function DeckCompareCards({
  comparison = DECK_CONSTRUCTION.comparison,
  warranty = DECK_WARRANTY_CARD,
  financing = DECK_FINANCING,
  highlightColumn = 0,
}: {
  comparison?: MaterialPage["comparison"];
  warranty?: WarrantyCard;
  financing?: FinancingCard;
  highlightColumn?: number;
}) {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
        {/* Comparison */}
        <div className="overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
          <h2 className="border-b border-mist px-5 py-3.5 font-serif text-base font-bold text-horizon">
            {comparison.title}
          </h2>
          <div className="grid grid-cols-[1.3fr_1fr_1fr] text-[11px]">
            <div className="bg-mist-soft px-3 py-2 font-bold uppercase tracking-wide text-ink-50">
              Feature
            </div>
            {comparison.columns.map((col, i) => (
              <div
                key={col}
                className={`px-2 py-2 text-center font-bold uppercase tracking-wide ${
                  i === highlightColumn ? "bg-ridge text-clear" : "bg-mist-soft text-ink-50"
                }`}
              >
                {col}
              </div>
            ))}
            {comparison.rows.map((r) => (
              <div key={r.feature} className="contents">
                <div className="flex items-center gap-1.5 border-t border-mist px-3 py-2.5 text-ink-70">
                  <Icon name={r.icon} className="h-3.5 w-3.5 shrink-0 text-ridge" /> {r.feature}
                </div>
                {r.values.map((v, i) => (
                  <div
                    key={i}
                    className={`border-t border-mist px-2 py-2.5 text-center ${
                      i === highlightColumn ? "bg-ridge/5 font-semibold text-ridge" : "text-ink-50"
                    }`}
                  >
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Warranty card */}
        <div className="rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 shrink-0 text-sky" />
            <div>
              <h3 className="font-serif text-lg font-bold">{warranty.title}</h3>
              <p className="mt-1 text-xs text-sky-soft/70">{warranty.text}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2.5">
            {warranty.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-accent" /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-clear/10 pt-4 text-xs text-sky-soft/70">
            {warranty.footer}
          </p>
        </div>

        {/* Financing card */}
        <div className="flex flex-col justify-center rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <DollarSign className="h-8 w-8 text-sky" />
          <h3 className="mt-4 font-serif text-lg font-bold">{financing.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-sky-soft/80">
            {financing.text}
          </p>
          <Link
            href="/financing"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
