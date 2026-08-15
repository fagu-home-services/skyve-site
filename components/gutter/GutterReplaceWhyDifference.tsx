import { Check, X, Minus } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import {
  GUTTER_REPLACE_WHY,
  GUTTER_REPLACE_DIFFERENCE,
} from "@/lib/gutter-replacement-data";

const img = (id: string) => `/images/${id}.jpg`;

export function GutterReplaceWhyDifference() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Why replace instead of repair */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            Why Replace Instead of Repair?
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_140px]">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {GUTTER_REPLACE_WHY.map((w) => (
                <li key={w.label} className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-soft">
                    <Icon name={w.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <span className="text-sm text-ink-70">{w.label}</span>
                </li>
              ))}
            </ul>
            <Photo
              src={img("1605146769289-440113cc3d00")}
              alt="Worn gutter needing replacement"
              className="hidden h-full min-h-40 rounded-xl shadow-card sm:block"
            />
          </div>
        </div>

        {/* Skyve difference */}
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
              {GUTTER_REPLACE_DIFFERENCE.map((r) => (
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
