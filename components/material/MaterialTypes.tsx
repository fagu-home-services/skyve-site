import { Check } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import type { MaterialPage } from "@/lib/material-pages";

export function MaterialTypes({ data }: { data: MaterialPage }) {
  return (
    <section id="types" className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          {data.typesHeading}
        </h2>

        <div
          className={`mt-10 grid gap-4 sm:grid-cols-2 ${
            data.types.length >= 6
              ? "lg:grid-cols-6"
              : data.types.length === 5
                ? "lg:grid-cols-5"
                : "lg:grid-cols-4"
          }`}
        >
          {data.types.map((t) => (
            <div key={t.title} className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
              <Photo src={t.image} alt={t.title} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-bold text-horizon">{t.title}</h3>
                {t.brand && (
                  <p className="text-[11px] font-semibold text-ridge">{t.brand}</p>
                )}
                <p className="mt-1 text-xs leading-snug text-ink-50">{t.desc}</p>
                <ul className="mt-3 space-y-1.5 border-t border-mist pt-3">
                  {t.checklist.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-ink-70">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ridge" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
