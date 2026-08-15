import Link from "next/link";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { COVERAGE, INSURANCE_FAQ } from "@/lib/insurance-data";

export function InsuranceCoverage() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-10 lg:grid-cols-2">
        {/* Coverage */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            {COVERAGE.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-70">{COVERAGE.intro}</p>
          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_0.85fr]">
            <ul className="space-y-3">
              {COVERAGE.checklist.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink-70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                  {c}
                </li>
              ))}
            </ul>
            <Photo
              src={COVERAGE.image}
              alt="Working with your insurance adjuster"
              className="aspect-[4/3] rounded-xl shadow-card"
            />
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-2">
            {INSURANCE_FAQ.map((item) => (
              <details key={item.q} className="group rounded-lg border border-mist bg-clear px-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium text-horizon marker:hidden">
                  {item.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-ridge transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-3 text-xs leading-relaxed text-ink-70">{item.a}</p>
              </details>
            ))}
          </div>
          <Link
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            View All FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
