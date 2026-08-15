import { Search, Play, ArrowRight } from "lucide-react";
import { TV_HERO } from "@/lib/skyve-tv-data";
import { resolveImg } from "@/components/shared/Photo";

export function TVHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep text-clear">
      {/* Background image (right) */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolveImg(TV_HERO.image, "roof replacement video")} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/70 to-horizon-deep/20" />
        {/* Play button */}
        <button
          type="button"
          aria-label="Play featured video"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear/15 ring-2 ring-clear/60 backdrop-blur-sm transition-transform hover:scale-105"
        >
          <Play className="ml-1 h-8 w-8 fill-clear text-clear" />
        </button>
      </div>

      <div className="container-skyve relative py-12 lg:py-16">
        <div className="max-w-xl">
          <h1 className="font-serif text-5xl font-extrabold tracking-tight sm:text-6xl">
            {TV_HERO.title}
          </h1>
          <p className="mt-3 text-lg font-semibold text-sky">{TV_HERO.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-mist-soft/80">{TV_HERO.desc}</p>

          {/* Search */}
          <div className="relative mt-7 max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full rounded-lg border border-clear/15 bg-clear/10 py-3 pl-11 pr-4 text-sm text-clear outline-none placeholder:text-mist-soft/50 focus:border-sky"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
            >
              Subscribe on YouTube <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/25 px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-clear/10"
            >
              Follow on Social Media <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
