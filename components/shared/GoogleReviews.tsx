import Link from "next/link";
import { ShieldCheck, Award, ClipboardCheck, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/company";

type Review = { name: string; city: string; initials: string; quote: string };

/* Honest reputation block, shared across service/material pages.
   The company is new — no fabricated rating or review counts. The `reviews`
   prop is intentionally ignored until real, verified reviews exist. */
export function GoogleReviews({
  title = "We'd rather earn your trust than fake it",
  viewAllHref = "/reviews",
}: {
  title?: string;
  reviews?: Review[];
  viewAllHref?: string;
}) {
  const POINTS = [
    { icon: ShieldCheck, t: "Licensed & insured", d: `WA license #${COMPANY.license}` },
    { icon: Award, t: `${COMPANY.warrantyYears}-year workmanship warranty`, d: "Backed in writing" },
    { icon: ClipboardCheck, t: "Owner-led & documented", d: "Photos on every job" },
  ];
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">{title}</h2>
          <Link
            href={viewAllHref}
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            Our reputation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-ink-70">
          Skyve is a new company built on {COMPANY.yearsCombined} years of roofing experience. We
          won&apos;t show inflated review counts — verified reviews will appear here as we complete
          work, and our Google profile is being verified. Here&apos;s what backs your roof today:
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.t} className="rounded-xl border border-mist bg-mist-soft/50 p-6">
              <p.icon className="h-7 w-7 text-ridge" />
              <p className="mt-4 font-serif text-lg font-bold text-horizon">{p.t}</p>
              <p className="mt-1 text-sm text-ink-50">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
