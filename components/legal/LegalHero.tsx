import { CalendarDays } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";

type Badge = { icon: string; title: string; desc: string };
type HeroData = {
  level: string;
  section: string;
  title: string;
  desc: string;
  updated: string;
  image: string;
  overlayTitle: string;
  overlayDesc: string;
  overlayBadges: Badge[];
};

export function LegalHero({ data }: { data: HeroData }) {
  return (
    <section className="bg-clear py-8 lg:py-10">
      <div className="container-skyve grid items-stretch gap-8 lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-ridge">
            {data.level} <span className="text-ink-50">•</span> {data.section}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-horizon sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-70">{data.desc}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-ink-50">
            <CalendarDays className="h-4 w-4 text-ridge" /> {data.updated}
          </p>
        </div>

        {/* Image + overlay card */}
        <div className="relative overflow-hidden rounded-2xl">
          <Photo
            src={data.image}
            seed="legal-hero"
            alt="Skyve-served Washington home at dusk"
            priority
            className="h-80 w-full lg:h-full"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-horizon-deep/92 p-6 backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <p className="text-base font-bold text-clear">{data.overlayTitle}</p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-mist-soft/80">{data.overlayDesc}</p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
              {data.overlayBadges.map((b) => (
                <div key={b.title}>
                  <Icon name={b.icon} className="h-6 w-6 text-sky" />
                  <p className="mt-2 text-xs font-bold text-clear">{b.title}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-mist-soft/70">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
