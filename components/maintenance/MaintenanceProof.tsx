import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { PROOF_REVIEWS } from "@/lib/maintenance-data";

export function MaintenanceProof() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Dark card */}
        <div className="flex flex-col justify-center rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <p className="text-xs font-bold uppercase tracking-widest text-sky">
            Know Your Roof&apos;s Condition
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-tight sm:text-3xl">
            Trusted. Recommended. Proven Results.
          </h2>
          <p className="mt-3 text-sm text-sky-soft/80">
            Confidence you can measure — backed by real inspections and real
            savings.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            Learn About Roof Health Score <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Reviews */}
        <div className="grid gap-5 sm:grid-cols-3">
          {PROOF_REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-xl border border-mist bg-clear p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{r.name}</p>
                  <p className="text-xs text-ink-50">{r.city}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-70">
                {r.quote}
              </blockquote>
              <span className="mt-4 w-fit rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                Saved {r.saved}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
