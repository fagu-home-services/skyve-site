import { ShieldCheck } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { AP_HERO, AP_STEPS } from "@/lib/apply-partner-data";

export function APHero() {
  const h = AP_HERO;
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
          </div>

          <div className="relative">
            <Photo src={h.image} alt="Apply to become a partner" className="aspect-[16/10] rounded-2xl shadow-elevated" />
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-horizon-deep/90 p-4 text-clear shadow-elevated backdrop-blur-sm lg:absolute lg:bottom-4 lg:right-4 lg:mt-0 lg:max-w-md">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-clear/10 ring-1 ring-clear/20">
                <ShieldCheck className="h-4 w-4 text-accent" />
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
      <section className="border-y border-mist bg-mist-soft/40 py-5">
        <div className="container-skyve grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AP_STEPS.map((s) => (
            <div key={s.n} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${s.n === 1 ? "bg-ridge text-clear" : "border border-mist bg-clear text-ink-50"}`}>
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
