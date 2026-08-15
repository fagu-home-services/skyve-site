import Link from "next/link";
import { Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { CLEANING_INCLUDED, CLEANING_SAFE } from "@/lib/cleaning-data";

export function CleaningIncluded() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
          What&apos;s Included in Our Roof Cleaning Service
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CLEANING_INCLUDED.map((c) => (
              <div
                key={c.title}
                className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card"
              >
                <Photo src={c.image} alt={c.title} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-bold text-horizon">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-snug text-ink-50">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Safe aside */}
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/10">
                <Leaf className="h-5 w-5 text-success" />
              </span>
              <h3 className="font-serif text-base font-bold leading-tight text-horizon">
                Safe for Your Home &amp; the Environment
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {CLEANING_SAFE.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#process"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
            >
              Learn More About Our Cleaning Process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
