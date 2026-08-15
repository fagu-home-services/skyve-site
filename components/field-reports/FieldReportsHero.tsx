import { Check, Camera, FileText, Package, MapPin, Star } from "lucide-react";
import { FIELD_REPORTS_HERO } from "@/lib/field-reports-data";
import { resolveImg } from "@/components/shared/Photo";

const CARD_ICON = [Camera, FileText, Package, MapPin, Star];

export function FieldReportsHero() {
  const h = FIELD_REPORTS_HERO;
  return (
    <section className="relative overflow-hidden bg-horizon-deep pt-24 pb-14 text-clear lg:pt-28">
      {/* Background image (right) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolveImg(h.image, "roof replacement project")} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/85 to-horizon-deep/40" />
      </div>

      <div className="container-skyve relative">
        <p className="eyebrow text-accent">{h.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          {h.title}
        </h1>
        <p className="mt-3 text-lg font-medium text-sky-soft">{h.subtitle}</p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-soft/80">{h.desc}</p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {h.stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-2xl font-bold text-clear">{s.value}</p>
              <p className="text-xs text-mist-soft/70">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Transparency card */}
        <div className="mt-10 max-w-sm rounded-2xl border border-clear/15 bg-horizon/70 p-6 shadow-elevated backdrop-blur-sm lg:absolute lg:right-0 lg:top-2 lg:mt-0">
          <h2 className="font-serif text-lg font-bold leading-snug text-clear">{h.card.title}</h2>
          <ul className="mt-4 space-y-2.5">
            {h.card.items.map((item, i) => {
              const I = CARD_ICON[i] ?? Check;
              return (
                <li key={item} className="flex items-center gap-2.5 text-sm text-mist-soft/90">
                  <I className="h-4 w-4 shrink-0 text-sky" /> {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
