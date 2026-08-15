import { Check } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { STORIES_HERO } from "@/lib/customer-stories-data";
import { resolveImg } from "@/components/shared/Photo";

export function StoriesHero() {
  const h = STORIES_HERO;
  return (
    <section className="relative overflow-hidden bg-horizon-deep pt-6 pb-14 text-clear">
      {/* Background image (right) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolveImg(h.image, "finished roof home")} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/85 to-horizon-deep/40" />
      </div>

      <div className="container-skyve relative">
        <p className="eyebrow text-accent">{h.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          {h.titleLines.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-soft/85">{h.desc}</p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {h.stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5">
              <Icon name={s.icon} className="h-5 w-5 text-accent" />
              <div>
                <p className="font-serif text-xl font-bold text-clear">{s.value}</p>
                <p className="text-xs text-mist-soft/70">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why card */}
        <div className="mt-10 max-w-sm rounded-2xl border border-clear/15 bg-horizon/70 p-6 shadow-elevated backdrop-blur-sm lg:absolute lg:right-0 lg:top-2 lg:mt-0">
          <h2 className="font-serif text-lg font-bold text-clear">{h.card.title}</h2>
          <ul className="mt-4 space-y-2.5">
            {h.card.items.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-mist-soft/90">
                <Check className="h-4 w-4 shrink-0 text-sky" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
