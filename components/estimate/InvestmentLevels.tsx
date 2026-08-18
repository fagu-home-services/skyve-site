import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { INVESTMENT_LEVELS } from "@/lib/estimate-data";
import { liveHref } from "@/lib/launch-phase";

export function InvestmentLevels() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          Material Options &amp; Investment Levels
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-50">
          Choose the material package that fits your home and budget.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {INVESTMENT_LEVELS.map((tier) => (
            <div
              key={tier.badge}
              className={`relative flex flex-col rounded-2xl bg-clear p-7 shadow-card ${
                tier.popular ? "ring-2 ring-accent" : "border border-mist"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-clear shadow-card">
                  Most Popular
                </span>
              )}

              <div className="flex items-start justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                    tier.popular
                      ? "bg-horizon-deep text-clear"
                      : "bg-horizon-deep/90 text-clear"
                  }`}
                >
                  {tier.badge}
                </span>
                <ArrowRight className="h-4 w-4 -rotate-45 text-ink-50" />
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <h3 className="font-serif text-xl font-bold text-horizon">
                  {tier.name}
                </h3>
                <div className="text-right">
                  <p className="font-mono text-2xl font-bold text-horizon">
                    <span className="align-super text-sm">$</span>
                    {tier.price}
                  </p>
                  <p className="text-[11px] text-ink-50">Est. Total</p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-70">
                {tier.desc}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5 border-t border-mist pt-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink-70">
                    <Check className="h-4 w-4 shrink-0 text-ridge" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={liveHref("/estimate/detailed", "/instant-estimate/")}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
              >
                View Full Breakdown <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
