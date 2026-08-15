import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronsLeftRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import type { ServicePage } from "@/lib/service-pages";

export function ServiceDifference({ data }: { data: ServicePage }) {
  if (!data.difference || !data.beforeAfter || !data.warranty) return null;
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
        {/* Difference */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card">
          <h3 className="font-serif text-lg font-bold text-horizon">
            The Skyve Difference
          </h3>
          <ul className="mt-5 space-y-3">
            {data.difference.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                {d}
              </li>
            ))}
          </ul>
          <Link
            href="/why-skyve"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ridge/30 bg-clear px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge"
          >
            Why Homeowners Choose Skyve <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Before / After */}
        <div className="relative overflow-hidden rounded-2xl shadow-card">
          <div className="grid h-full grid-cols-2">
            <div className="relative">
              <Photo src={data.beforeAfter.before} alt="Before" className="h-full min-h-56" />
              <span className="absolute left-3 top-3 rounded-md bg-horizon-deep/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-clear backdrop-blur-sm">
                Before
              </span>
            </div>
            <div className="relative">
              <Photo src={data.beforeAfter.after} alt="After" className="h-full min-h-56" />
              <span className="absolute right-3 top-3 rounded-md bg-ridge px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-clear">
                After
              </span>
            </div>
          </div>
          <span className="absolute left-1/2 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear text-ridge shadow-elevated">
            <ChevronsLeftRight className="h-4 w-4" />
          </span>
          <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-clear/80" />
        </div>

        {/* Warranty */}
        <div className="rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <h3 className="font-serif text-lg font-bold">Industry-Leading Warranty</h3>
          <p className="mt-2 text-sm text-sky-soft/80">
            We stand behind our work with some of the strongest warranties in the
            industry.
          </p>
          <div className="mt-5 space-y-4">
            {data.warranty.map((w) => (
              <div key={w.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ridge font-mono text-xs font-bold">
                  {w.badge}
                </span>
                <p className="text-sm font-semibold">{w.title}</p>
              </div>
            ))}
          </div>
          <Link
            href="/warranty"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sky transition-colors hover:text-clear"
          >
            See Warranty Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
