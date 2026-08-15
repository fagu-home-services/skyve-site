import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { PRJ_HERO } from "@/lib/projects-data";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep pt-20 text-clear lg:pt-24">
      <Photo src={PRJ_HERO.image} seed="projects-hero" alt="" className="absolute inset-0 h-full w-full opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/40" />
      <div className="container-skyve relative py-10 lg:py-12">
        <nav className="flex items-center gap-1.5 text-xs text-mist-soft/70">
          <Link href="/" className="hover:text-clear">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-clear">Projects</span>
        </nav>

        <h1 className="mt-4 font-serif text-5xl font-bold sm:text-6xl">{PRJ_HERO.title}</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-mist-soft/85">{PRJ_HERO.desc}</p>

        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {PRJ_HERO.stats.map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <Icon name={s.icon} className="mt-0.5 h-5 w-5 text-sky" />
              <div>
                <p className="flex items-center gap-1 font-serif text-2xl font-bold text-clear">
                  {s.value}{s.star && <Star className="h-4 w-4 fill-accent text-accent" />}
                </p>
                <p className="text-[11px] leading-snug text-mist-soft/70">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
