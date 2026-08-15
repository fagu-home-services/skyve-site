import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RF_CUSTOM, RF_CTA } from "@/lib/release-forms-data";

export function RFCustom() {
  return (
    <section className="bg-clear pb-14">
      <div className="container-skyve space-y-6">
        {/* Custom form band */}
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-mist bg-mist-soft/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
              <FileText className="h-6 w-6 text-ridge" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{RF_CUSTOM.title}</p>
              <p className="mt-0.5 max-w-lg text-xs leading-relaxed text-ink-70">{RF_CUSTOM.desc}</p>
            </div>
          </div>
          <Link
            href={RF_CUSTOM.button.href}
            className="inline-flex items-center gap-2 rounded-lg border border-ridge bg-clear px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear"
          >
            {RF_CUSTOM.button.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Ready to start CTA */}
        <div className="grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-6 text-clear lg:grid-cols-[220px_1fr_auto] lg:p-0">
          <Photo src={RF_CTA.image} seed="release-cta" alt="" className="hidden h-full min-h-40 w-full lg:block" />
          <div className="lg:py-8">
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{RF_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{RF_CTA.desc}</p>
          </div>
          <div className="text-center lg:py-8 lg:pr-8">
            <Link
              href={RF_CTA.button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              {RF_CTA.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-xs text-mist-soft/70">or call {RF_CTA.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
