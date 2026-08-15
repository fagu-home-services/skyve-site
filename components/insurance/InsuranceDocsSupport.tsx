import Link from "next/link";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RATING } from "@/lib/why-data";
import {
  DOCUMENT_EVERYTHING,
  CLAIM_SUPPORT_INCLUDES,
  INSURANCE_REVIEW,
  REPORT_IMAGE,
} from "@/lib/insurance-data";

export function InsuranceDocsSupport() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
        {/* Document everything */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="font-serif text-lg font-bold text-horizon">
            We Document Everything
          </h2>
          <p className="mt-1 text-sm text-ink-50">
            Thorough documentation is key to a successful claim.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.9fr]">
            <div>
              <ul className="space-y-2.5">
                {DOCUMENT_EVERYTHING.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-ink-70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
              >
                See Sample Report <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl bg-horizon-deep p-2 shadow-elevated">
              <div className="rounded-lg bg-clear p-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-ink-50">
                  Roof Inspection Report
                </p>
                <Photo src={REPORT_IMAGE} alt="Report" className="mt-2 aspect-[16/9] rounded" />
                <div className="mt-2 space-y-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-ridge" />
                      <span className="h-1.5 flex-1 rounded-full bg-mist" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim support includes */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="font-serif text-lg font-bold text-horizon">
            Our Claim Support Includes
          </h2>
          <ul className="mt-5 space-y-2.5">
            {CLAIM_SUPPORT_INCLUDES.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-ridge" />
                {c}
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            Learn More About The Process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Reviews */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="font-serif text-lg font-bold text-horizon">
            What Homeowners Say
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-mist font-serif text-base font-bold text-ridge">
              G
            </span>
            <span className="font-serif text-3xl font-extrabold text-horizon">
              {RATING.score}
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
          <p className="mt-2 text-xs text-ink-50">{RATING.reviews}</p>
          <Link href="#" className="text-xs font-semibold text-ridge hover:text-accent">
            View All Reviews on Google →
          </Link>

          <figure className="mt-5 rounded-xl bg-mist-soft/70 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                {INSURANCE_REVIEW.initials}
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{INSURANCE_REVIEW.name}</p>
                <p className="text-xs text-ink-50">{INSURANCE_REVIEW.city}</p>
              </div>
            </div>
            <div className="mt-2 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="mt-2 text-xs leading-relaxed text-ink-70">
              {INSURANCE_REVIEW.quote}
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
