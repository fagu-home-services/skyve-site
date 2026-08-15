import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import {
  VENT_SYSTEMS,
  VENT_STATS,
  VENT_ATTIC_BEFORE,
  VENT_ATTIC_AFTER,
  TEMP_COMPARISON,
} from "@/lib/ventilation-data";

export function VentilationSolutions() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-10 lg:grid-cols-2">
        {/* Systems */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ridge">
            Ventilation Systems We Install
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Solutions That Fit Your Roof
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VENT_SYSTEMS.map((v) => (
              <div key={v.title} className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
                <Photo src={v.image} alt={v.title} className="aspect-[16/10]" />
                <div className="flex items-start justify-between gap-2 p-3">
                  <div>
                    <h3 className="text-xs font-bold text-horizon">{v.title}</h3>
                    <p className="mt-0.5 text-[10px] leading-snug text-ink-50">{v.desc}</p>
                  </div>
                  <Link
                    href="#"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ridge text-clear transition-colors hover:bg-accent"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See the difference */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ridge">
            See the Difference
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Proper Ventilation = Better Results
          </h2>

          <div className="relative mt-6 overflow-hidden rounded-2xl shadow-card">
            <div className="grid grid-cols-2">
              <div className="relative">
                <Photo src={VENT_ATTIC_BEFORE} alt="Poor ventilation attic" className="aspect-[4/3]" />
                <span className="absolute left-3 top-3 rounded-full bg-danger px-2.5 py-1 text-[10px] font-bold uppercase text-clear">
                  Poor Ventilation
                </span>
                <div className="absolute bottom-3 left-3 flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 border-danger bg-horizon-deep/80 text-clear">
                  <span className="text-xs font-bold">{TEMP_COMPARISON.poor}</span>
                  <span className="text-[7px] text-sky-soft/70">Attic Temp</span>
                </div>
              </div>
              <div className="relative">
                <Photo src={VENT_ATTIC_AFTER} alt="Proper ventilation attic" className="aspect-[4/3]" />
                <span className="absolute right-3 top-3 rounded-full bg-success px-2.5 py-1 text-[10px] font-bold uppercase text-clear">
                  Proper Ventilation
                </span>
                <div className="absolute bottom-3 right-3 flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 border-success bg-horizon-deep/80 text-clear">
                  <span className="text-xs font-bold">{TEMP_COMPARISON.proper}</span>
                  <span className="text-[7px] text-sky-soft/70">Attic Temp</span>
                </div>
              </div>
            </div>
            <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-clear/80" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {VENT_STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-mist bg-clear p-3 text-center shadow-card">
                <Icon name={s.icon} className="mx-auto h-5 w-5 text-ridge" />
                <p className="mt-2 font-serif text-lg font-extrabold text-horizon">{s.value}</p>
                <p className="text-[10px] leading-tight text-ink-50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
