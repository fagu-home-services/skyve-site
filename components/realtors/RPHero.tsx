import { Play } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { RP_HERO, RP_BENEFITS } from "@/lib/realtors-data";

export function RPHero() {
  const h = RP_HERO;
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

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {h.features.map((f) => (
                <div key={f.title}>
                  <Icon name={f.icon} className="h-5 w-5 text-ridge" />
                  <p className="mt-2 text-xs font-bold text-horizon">{f.title}</p>
                  <p className="text-[10px] leading-snug text-ink-50">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#join" className="inline-flex items-center gap-2 rounded-lg bg-horizon-deep px-6 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-horizon">
                Join the Realtors Program
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft">
                <Play className="h-4 w-4" /> See How It Works
              </a>
            </div>
          </div>

          <div className="relative">
            <Photo src={h.image} alt="Realtors program" className="aspect-[16/10] rounded-2xl shadow-elevated" />
            <div className="mt-4 rounded-2xl bg-horizon-deep p-6 text-clear shadow-elevated lg:absolute lg:bottom-4 lg:right-4 lg:mt-0 lg:w-[88%]">
              <p className="font-serif text-base font-bold">{h.card.title}</p>
              <p className="mt-1.5 text-[11px] leading-snug text-mist-soft/75">{h.card.desc}</p>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {h.card.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-xl font-extrabold text-clear">{s.value}</p>
                    <p className="text-[10px] leading-snug text-mist-soft/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program benefits */}
      <section className="bg-mist-soft/40 py-8">
        <div className="container-skyve">
          <h2 className="text-center text-xs font-bold uppercase tracking-wider text-ink-50">Program Benefits</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {RP_BENEFITS.map((b) => (
              <div key={b.title} className="rounded-xl border border-mist bg-clear p-4 text-center shadow-card">
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={b.icon} className="h-4 w-4 text-ridge" />
                </span>
                <p className="mt-2.5 text-xs font-bold text-horizon">{b.title}</p>
                <p className="mt-0.5 text-[10px] leading-snug text-ink-50">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
