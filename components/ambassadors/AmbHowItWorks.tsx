import { Play } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AMB_STEPS } from "@/lib/ambassadors-data";

export function AmbHowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist-soft/40 py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          How It <span className="text-ridge">Works</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          {/* Steps */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {AMB_STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="relative mx-auto w-fit">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ridge/20 bg-clear">
                    <Icon name={s.icon} className="h-6 w-6 text-ridge" />
                  </span>
                  <span className="absolute -top-1 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-3 text-[11px] font-bold uppercase tracking-wide text-horizon">{s.title}</h3>
                <p className="mt-1 text-[10px] leading-snug text-ink-50">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Video card */}
          <div className="relative overflow-hidden rounded-2xl shadow-elevated">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/roof-replacement-3.webp" alt="" className="h-full min-h-52 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep via-horizon-deep/30 to-transparent" />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear/20 ring-2 ring-clear/60 backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Play className="ml-0.5 h-6 w-6 fill-clear text-clear" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5">
              <p className="font-serif text-sm font-bold leading-tight text-clear">
                See how Skyve delivers excellence every day.
              </p>
              <span className="shrink-0 text-xs font-semibold italic text-accent">Watch Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
