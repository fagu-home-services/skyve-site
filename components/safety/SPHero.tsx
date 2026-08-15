import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { SP_HERO } from "@/lib/safety-data";

export function SPHero() {
  return (
    <section className="bg-clear py-8 lg:py-10">
      <div className="container-skyve grid items-stretch gap-8 lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-ridge">
            {SP_HERO.level} <span className="text-ink-50">•</span> {SP_HERO.section}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-horizon sm:text-5xl">
            {SP_HERO.title}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-70">{SP_HERO.desc}</p>

          <div className="mt-8 grid grid-cols-3 gap-5">
            {SP_HERO.features.map((f) => (
              <div key={f.title}>
                <Icon name={f.icon} className="h-6 w-6 text-ridge" />
                <p className="mt-2.5 text-xs font-bold text-horizon">{f.title}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink-50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image + overlay card */}
        <div className="relative overflow-hidden rounded-2xl">
          <Photo
            src={SP_HERO.image}
            seed="safety-hero"
            alt="Skyve crew working safely on a Washington home"
            priority
            className="h-80 w-full lg:h-full"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-horizon-deep/92 p-6 backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <p className="text-base font-bold text-clear">{SP_HERO.overlayTitle}</p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-mist-soft/80">{SP_HERO.overlayDesc}</p>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {SP_HERO.overlayStats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-clear">{s.value}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-mist-soft/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
