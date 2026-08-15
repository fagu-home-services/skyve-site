import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { SP_CTA, SP_OUTCOMES } from "@/lib/safety-data";

export function SPCommitment() {
  return (
    <section className="bg-clear py-10 lg:py-12">
      <div className="container-skyve">
        {/* Commitment banner */}
        <div className="grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-6 text-clear lg:grid-cols-[200px_1.4fr_1fr_auto] lg:p-0">
          <Photo src={SP_CTA.image} seed="safety-commit" alt="" className="hidden h-full min-h-48 w-full lg:block" />
          <div className="lg:py-8">
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{SP_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{SP_CTA.desc}</p>
          </div>
          <ul className="space-y-2.5 lg:py-8">
            {SP_CTA.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>
          <div className="text-center lg:py-8 lg:pr-8">
            <Link
              href={SP_CTA.button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              {SP_CTA.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-xs text-mist-soft/70">or call {SP_CTA.phone}</p>
          </div>
        </div>

        {/* Outcomes row */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SP_OUTCOMES.map((o) => (
            <div key={o.title} className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                <Icon name={o.icon} className="h-5 w-5 text-ridge" />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{o.title}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink-50">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
