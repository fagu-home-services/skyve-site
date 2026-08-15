import { Play, Film, Eye, Star } from "lucide-react";
import { TV_CAT_HERO_IMAGE } from "@/lib/skyve-tv-category-data";

export function TVCatHero({
  label,
  desc,
  videos,
}: {
  label: string;
  desc: string;
  videos: string;
}) {
  const stats = [
    { icon: Film, value: videos, label: "Videos" },
    { icon: Eye, value: "2.1M+", label: "Views" },
    { icon: Star, value: "4.8", label: "Average Rating" },
  ];
  return (
    <section className="relative overflow-hidden bg-horizon-deep text-clear">
      {/* Background image (right) */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TV_CAT_HERO_IMAGE} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/70 to-horizon-deep/20" />
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
          <p className="eyebrow text-accent">Skyve TV</p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold sm:text-5xl">{label}</h1>
          <p className="mt-4 text-sm leading-relaxed text-mist-soft/80">{desc}</p>

          <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <s.icon className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-serif text-xl font-bold text-clear">{s.value}</p>
                  <p className="text-xs text-mist-soft/60">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
