import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { FTC_HERO } from "@/lib/ftc-data";

export function FTCHero() {
  return (
    <section className="bg-clear py-8 lg:py-10">
      <div className="container-skyve grid items-stretch gap-8 lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-ridge">
            {FTC_HERO.level} <span className="text-ink-50">•</span> {FTC_HERO.section}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-horizon sm:text-5xl">
            {FTC_HERO.title}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-70">{FTC_HERO.desc}</p>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {FTC_HERO.features.map((f) => (
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
            src={FTC_HERO.image}
            seed="ftc-hero"
            alt="Skyve-served Washington home at dusk"
            priority
            className="h-80 w-full lg:h-full"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-horizon-deep/92 p-6 backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <p className="text-base font-bold text-clear">{FTC_HERO.overlayTitle}</p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-mist-soft/80">{FTC_HERO.overlayDesc}</p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
              {FTC_HERO.overlayBadges.map((b) => (
                <div key={b.title}>
                  <Icon name={b.icon} className="h-6 w-6 text-sky" />
                  <p className="mt-2 text-[11px] font-bold leading-snug text-clear">{b.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
