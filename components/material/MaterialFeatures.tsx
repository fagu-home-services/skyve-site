import { Check } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import type { MaterialPage } from "@/lib/material-pages";

export function MaterialFeatures({ data }: { data: MaterialPage }) {
  return (
    <section className="bg-clear pb-16 lg:pb-20">
      <div
        className={`container-skyve grid gap-6 ${
          data.features.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {data.features.map((f) => (
          <div key={f.title} className="overflow-hidden rounded-2xl border border-mist bg-mist-soft/40 shadow-card">
            <div className="grid grid-cols-[1fr_0.7fr]">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  {f.icon && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-soft">
                      <Icon name={f.icon} className="h-4 w-4 text-ridge" />
                    </span>
                  )}
                  <h3 className="font-serif text-base font-bold text-horizon">{f.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-snug text-ink-50">{f.desc}</p>
                <ul className="mt-4 space-y-2">
                  {f.checklist.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-ink-70">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ridge" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <Photo src={f.image} alt={f.title} className="h-full min-h-48" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
