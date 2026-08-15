import { Check, X, Minus } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { GUTTER_WHY, GUTTER_DIFFERENCE } from "@/lib/gutter-data";

export function GutterWhyDifference() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Why choose */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            Why Homeowners Choose Skyve
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {GUTTER_WHY.map((w) => (
              <div key={w.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={w.icon} className="h-4 w-4 text-ridge" />
                </span>
                <h3 className="mt-2.5 text-sm font-bold text-horizon">{w.title}</h3>
                <p className="mt-0.5 text-xs leading-snug text-ink-50">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Difference table */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            The Skyve Difference
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] text-xs">
              <div className="bg-mist-soft px-4 py-2.5 font-bold uppercase tracking-wide text-ink-50">
                Feature
              </div>
              <div className="bg-ridge px-3 py-2.5 text-center font-bold uppercase tracking-wide text-clear">
                Skyve Roofing
              </div>
              <div className="bg-mist-soft px-3 py-2.5 text-center font-bold uppercase tracking-wide text-ink-50">
                Other Companies
              </div>
              {GUTTER_DIFFERENCE.map((r) => (
                <div key={r.feature} className="contents">
                  <div className="border-t border-mist px-4 py-2.5 font-medium text-ink-70">
                    {r.feature}
                  </div>
                  <div className="flex items-center justify-center border-t border-mist bg-ridge/5 py-2.5">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <div className="flex items-center justify-center border-t border-mist py-2.5">
                    {r.others === "cross" ? (
                      <X className="h-4 w-4 text-danger" />
                    ) : (
                      <Minus className="h-4 w-4 text-ink-50" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
