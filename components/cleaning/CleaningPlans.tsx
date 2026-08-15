import Link from "next/link";
import { Check, Plus, ArrowRight } from "lucide-react";
import { CLEANING_PLANS, CLEANING_ADDONS } from "@/lib/cleaning-data";

export function CleaningPlans() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Choose the Cleaning Option That&apos;s Right for You
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {CLEANING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-clear p-6 ${
                plan.popular ? "ring-2 ring-accent shadow-elevated" : "border border-mist shadow-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-clear">
                  Most Popular
                </span>
              )}
              <h3 className="text-base font-bold text-horizon">{plan.name}</h3>
              <p className="mt-1 text-xs text-ink-50">{plan.tagline}</p>

              <ul className="mt-4 flex-1 space-y-2 border-t border-mist pt-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-ink-70">
                    <Check className="h-3.5 w-3.5 shrink-0 text-ridge" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-serif text-2xl font-extrabold text-horizon">
                <span className="align-super text-base">$</span>
                {plan.price}
              </p>
              <p className="text-[11px] text-ink-50">Starting at</p>

              <Link
                href="#"
                className={`mt-4 flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent text-clear hover:bg-accent-hover"
                    : "border border-ridge/30 text-ridge hover:border-ridge hover:bg-mist-soft"
                }`}
              >
                Choose {plan.short}
              </Link>
            </div>
          ))}

          {/* Add-ons */}
          <div className="flex flex-col rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-clear/10">
                <Plus className="h-4 w-4" />
              </span>
              <h3 className="font-serif text-base font-bold">Add-On Services</h3>
            </div>
            <ul className="mt-5 flex-1 space-y-4">
              {CLEANING_ADDONS.map((a) => (
                <li key={a.name} className="flex items-center justify-between gap-3 border-b border-clear/10 pb-3 text-sm">
                  <span className="text-clear">{a.name}</span>
                  <span className="text-xs text-sky-soft/70">{a.price}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-clear/10 px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-clear/20"
            >
              Customize Your Service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
