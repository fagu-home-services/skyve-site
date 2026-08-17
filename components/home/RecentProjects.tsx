import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { liveHref } from "@/lib/launch-phase";

/* Honest capability showcase — the kind of work we do. No fabricated prices or
   "completed job in City X" claims (the company is new). Real category photos
   linking to the relevant service. */
const WORK = [
  { label: "Roof Replacement", image: "/images/roof-replacement-1.webp", href: "/services/roof-replacement" },
  { label: "Metal Roofing", image: "/images/material-metal-1.webp", href: "/materials/metal-roofing" },
  { label: "Cedar Shake", image: "/images/material-cedar.webp", href: "/materials/cedar-shake-roofing" },
  { label: "Gutters & Fascia", image: "/images/gutters-1.webp", href: "/exteriors/gutter-installation" },
  { label: "Siding", image: "/images/siding-1.webp", href: "/exteriors/siding-replacement" },
];

export function RecentProjects() {
  return (
    <section className="bg-clear py-16 lg:py-24">
      <div className="container-skyve">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-ridge">What we do</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-horizon sm:text-4xl">
              The work we do
            </h2>
          </div>
          <Link
            href="/services"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {WORK.map((w) => (
            <Link
              key={w.label}
              href={liveHref(w.href)}
              className="group w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated"
            >
              <Photo src={w.image} alt={w.label} className="aspect-[4/3]" />
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-horizon">{w.label}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
