import Link from "next/link";
import { Search, ArrowRight, Mic } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { KC_HERO } from "@/lib/knowledge-data";

export function KCHero() {
  return (
    <section className="bg-gradient-to-b from-mist-soft to-clear pt-24 pb-12 lg:pt-28">
      <div className="container-skyve grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="eyebrow text-ridge">{KC_HERO.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl font-extrabold leading-[1.08] text-horizon sm:text-5xl">
            {KC_HERO.titleLines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-70">{KC_HERO.desc}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#start-here" className="inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-ridge-bright">
              Browse Articles <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/instant-estimate/" className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft">
              Get Instant Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Search */}
          <div className="relative mt-6 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              type="text"
              placeholder="Search roofing articles, warranties, inspections, materials..."
              className="w-full rounded-lg border border-mist bg-clear py-3 pl-11 pr-11 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
            />
            <Mic className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
          </div>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-50">
            <span className="font-semibold text-ink-70">Popular searches:</span>
            {KC_HERO.popular.map((p) => (
              <a key={p} href="#" className="text-ridge hover:text-accent">{p}</a>
            ))}
          </p>
        </div>

        <Photo src={KC_HERO.image} alt="Skyve roofing knowledge resources" className="aspect-[16/11] rounded-2xl shadow-elevated" />
      </div>
    </section>
  );
}
