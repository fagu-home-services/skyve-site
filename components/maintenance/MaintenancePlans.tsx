import Link from "next/link";
import { Check, Star, ShieldCheck } from "lucide-react";
import { MAINTENANCE_PLANS } from "@/lib/maintenance-data";

export function MaintenancePlans() {
  return (
    <section id="plans" className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <div className="grid gap-6 lg:grid-cols-3">
          {MAINTENANCE_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-clear p-7 ${
                plan.popular ? "ring-2 ring-accent shadow-elevated" : "border border-mist shadow-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-clear">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3">
                {plan.popular && (
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                    <ShieldCheck className="h-5 w-5 text-clear" />
                  </span>
                )}
                <h3 className="font-serif text-lg font-bold text-horizon">{plan.name}</h3>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink-70">
                    <Check className="h-4 w-4 shrink-0 text-ridge" />
                    {f}
                  </li>
                ))}
              </ul>

              {plan.showRating && (
                <div className="mt-5 flex items-center gap-2 border-t border-mist pt-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-mist font-serif text-sm font-bold text-ridge">
                    G
                  </span>
                  <span className="font-serif text-lg font-bold text-horizon">4.9</span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </span>
                </div>
              )}

              <p className="mt-5 font-serif text-3xl font-extrabold text-horizon">
                <span className="align-super text-lg">$</span>
                {plan.price}
                <span className="text-sm font-medium text-ink-50"> / Year</span>
              </p>

              <Link
                href="#"
                className={`mt-5 flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent text-clear hover:bg-accent-hover"
                    : "border border-ridge/30 text-ridge hover:border-ridge hover:bg-mist-soft"
                }`}
              >
                Choose {plan.name.replace(" Plan", "")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
