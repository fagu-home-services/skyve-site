import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { FAQ_HERO } from "@/lib/faq-data";

export function FAQHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep pt-20 text-clear lg:pt-24">
      <Photo src={FAQ_HERO.image} seed="faq-hero" alt="" className="absolute inset-0 h-full w-full opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/40" />
      <div className="container-skyve relative py-10 lg:py-14">
        <nav className="flex items-center gap-1.5 text-xs text-mist-soft/70">
          <Link href="/" className="hover:text-clear">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-clear">FAQ</span>
        </nav>

        <h1 className="mt-4 font-serif text-5xl font-bold sm:text-6xl">{FAQ_HERO.title}</h1>
        <span className="mt-2 block h-1 w-16 rounded bg-sky" />
        <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-soft/85">{FAQ_HERO.desc}</p>

        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          {FAQ_HERO.badges.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clear/10 ring-1 ring-clear/15">
                <Icon name={b.icon} className="h-4 w-4 text-sky" />
              </span>
              <div>
                <p className="text-xs font-bold text-clear">{b.title}</p>
                <p className="text-[10px] leading-snug text-mist-soft/70">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
