import { Icon } from "@/components/shared/Icon";
import { SHARE_HERO } from "@/lib/share-story-data";
import { resolveImg } from "@/components/shared/Photo";

export function ShareHero() {
  const [line1, line2] = SHARE_HERO.titleLines;
  return (
    <section className="relative overflow-hidden bg-horizon-deep text-clear">
      {/* Background image (right) */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolveImg(SHARE_HERO.image, "happy homeowner")} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/70 to-horizon-deep/20" />
      </div>

      <div className="container-skyve relative py-14 lg:py-20">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            <span className="block">{line1}</span>
            <span className="block text-accent">{line2}</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-mist-soft/80">{SHARE_HERO.desc}</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {SHARE_HERO.trust.map((t) => (
              <span key={t.label} className="flex items-center gap-2 text-sm text-mist-soft/90">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clear/10">
                  <Icon name={t.icon} className="h-4 w-4 text-accent" />
                </span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
