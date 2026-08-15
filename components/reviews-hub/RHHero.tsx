import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RH_HERO } from "@/lib/reviews-hub-data";

export function RHHero() {
  return (
    <section className="bg-clear py-10 lg:py-14">
      <div className="container-skyve grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
        {/* Copy */}
        <div>
          <p className="eyebrow text-ridge">
            {RH_HERO.level} <span className="text-ink-50">•</span> {RH_HERO.section}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-horizon sm:text-5xl">
            {RH_HERO.title}
          </h1>
          <p className="mt-4 text-base font-semibold text-ink-90">{RH_HERO.lead}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-70">{RH_HERO.desc}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={RH_HERO.primary.href}
              className="inline-flex items-center gap-2 rounded-lg bg-horizon px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-horizon-deep"
            >
              <Star className="h-4 w-4 fill-clear" /> {RH_HERO.primary.label}
            </Link>
            <Link
              href={RH_HERO.secondary.href}
              className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-6 py-3 text-sm font-semibold text-horizon transition-colors hover:border-ridge hover:text-ridge"
            >
              {RH_HERO.secondary.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Image + overlay stat card */}
        <div className="relative">
          <Photo
            src={RH_HERO.image}
            seed="reviews-hero"
            alt="Skyve roofing project in Washington"
            priority
            className="h-72 w-full rounded-2xl sm:h-96 lg:h-[26rem]"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-horizon-deep/92 p-5 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-6">
            <p className="text-sm font-semibold text-clear">{RH_HERO.overlayTitle}</p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {RH_HERO.overlayStats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-clear">{s.value}</p>
                  {s.stars && (
                    <div className="mt-0.5 flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  )}
                  <p className="mt-1 text-[11px] leading-snug text-mist-soft/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
