import { Icon } from "@/components/shared/Icon";
import { CAREERS_HERO_IMAGE, CAREERS_HERO_FEATURES } from "@/lib/careers-data";

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={CAREERS_HERO_IMAGE}
        alt="The Skyve Roofing team"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative pt-28 pb-14 lg:pt-32">
        <div className="max-w-xl text-clear">
          <p className="eyebrow text-sky">Careers at Skyve</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            Build Your Future. Build What Matters.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-sky-soft/90">
            We&apos;re more than a roofing company—we&apos;re a team of skilled
            professionals who take pride in our work, support each other, and make
            a difference in the communities we serve.
          </p>

          <div className="mt-9 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {CAREERS_HERO_FEATURES.map((f) => (
              <div key={f.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clear/10">
                  <Icon name={f.icon} className="h-5 w-5 text-sky" />
                </span>
                <p className="mt-3 text-sm font-semibold text-clear">{f.title}</p>
                <p className="mt-1 text-xs leading-snug text-sky-soft/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
