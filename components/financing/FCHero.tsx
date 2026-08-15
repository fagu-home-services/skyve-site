import { Star, Wallet } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { FC_HERO, FC_STEPS } from "@/lib/financing-calc-data";

export function FCHero() {
  const h = FC_HERO;
  return (
    <>
      <section className="bg-clear pb-8 pt-2">
        <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ridge">
              <span className="text-accent">{h.level}</span>
              <span className="text-ink-50">◇</span>
              {h.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-extrabold leading-[1.05] text-horizon sm:text-5xl">
              {h.titleLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-70">{h.desc}</p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {h.stats.map((s) => (
                <div key={s.title} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={s.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-horizon">{s.title}</p>
                    <p className="text-[11px] text-ink-50">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </span>
              <span className="font-semibold text-ink-70">4.9</span>
              <span className="text-ink-50">{h.rating}</span>
            </div>
          </div>

          <div className="relative">
            <Photo src={h.image} alt="Financing calculator" className="aspect-[16/10] rounded-2xl shadow-elevated" />
            <div className="absolute bottom-4 left-4 flex max-w-sm items-start gap-3 rounded-xl bg-horizon-deep/90 p-4 text-clear shadow-elevated backdrop-blur-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/20 ring-1 ring-accent/50">
                <Wallet className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="text-sm font-bold">{h.badge.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-mist-soft/80">{h.badge.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-y border-mist bg-clear py-5">
        <div className="container-skyve grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FC_STEPS.map((s) => (
            <div key={s.n} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${s.n === 1 ? "bg-ridge text-clear" : "bg-mist text-ink-50"}`}>
                {s.n}
              </span>
              <div>
                <p className={`text-sm font-bold ${s.n === 1 ? "text-horizon" : "text-ink-50"}`}>{s.title}</p>
                <p className="text-[11px] text-ink-50">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
