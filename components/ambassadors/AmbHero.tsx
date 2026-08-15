import { Crown, Play, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AMB_HERO } from "@/lib/ambassadors-data";
import { resolveImg } from "@/components/shared/Photo";

export function AmbHero() {
  const [line1, line2] = AMB_HERO.titleLines;
  return (
    <section className="relative overflow-hidden bg-horizon-deep text-clear">
      {/* Background image (right) */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolveImg(AMB_HERO.image, "happy homeowner")} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/75 to-horizon-deep/25" />
        <div className="absolute bottom-6 right-6 rounded-lg bg-horizon-deep/80 px-4 py-2.5 text-right ring-1 ring-clear/15 backdrop-blur-sm">
          <p className="font-serif text-sm font-bold leading-tight text-clear">
            REAL STORIES
            <br />
            REAL RESULTS
          </p>
          <span className="mt-1 block h-0.5 w-10 rounded bg-accent" />
        </div>
      </div>

      <div className="container-skyve relative py-14 lg:py-16">
        <div className="max-w-xl">
          <Crown className="h-8 w-8 text-accent" />
          <h1 className="mt-3 font-serif text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
            <span className="block">{line1}</span>
            <span className="block text-accent">{line2}</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-sky">{AMB_HERO.tagline}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-mist-soft/80">{AMB_HERO.desc}</p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
            {AMB_HERO.trust.map((t) => (
              <div key={t.label} className="flex max-w-[120px] flex-col items-start gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clear/10">
                  <Icon name={t.icon} className="h-4 w-4 text-accent" />
                </span>
                <span className="text-xs font-medium text-mist-soft/85">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#join" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover">
              Join the Program <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-lg border border-clear/25 px-6 py-3.5 text-sm font-semibold text-clear transition-colors hover:bg-clear/10">
              <Play className="h-4 w-4" /> How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
