import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS, WARRANTY_ITEMS } from "@/lib/why-data";

export function CertsWarranty() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Certifications */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card lg:p-8">
          <h2 className="font-serif text-xl font-bold text-horizon">
            Certifications &amp; Partnerships
          </h2>
          <p className="mt-1 text-sm text-ink-50">
            We meet the highest standards in the industry.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-mist pt-7 sm:grid-cols-3 lg:grid-cols-5">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="text-center">
                <p className="font-serif text-base font-bold leading-none text-horizon">
                  {c.name}
                </p>
                <p className="mt-1.5 text-[10px] leading-tight text-ink-50">{c.sub}</p>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            View All Certifications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Warranty */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card lg:p-8">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-soft">
              <ShieldCheck className="h-5 w-5 text-ridge" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold text-horizon">
                Industry-Leading Warranty
              </h2>
              <p className="mt-1 text-sm text-ink-50">
                We provide some of the strongest warranty protection in the roofing
                industry.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {WARRANTY_ITEMS.map((w) => (
              <div key={w.title} className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-horizon-deep text-clear">
                  <span className="font-mono text-lg font-bold leading-none">
                    {w.years}
                  </span>
                  <span className="text-[8px] tracking-wider">{w.unit}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-horizon">{w.title}</h3>
                  <p className="text-xs text-ink-50">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/warranty"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            Warranty Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
