import Link from "next/link";
import { Settings, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RC_MANAGE, RC_CTA } from "@/lib/revoke-consent-data";

export function RCBottom() {
  return (
    <section className="bg-clear pb-14">
      <div className="container-skyve space-y-6">
        {/* Manage preferences band */}
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-mist bg-mist-soft/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
              <Settings className="h-6 w-6 text-ridge" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{RC_MANAGE.title}</p>
              <p className="mt-0.5 max-w-xl text-xs leading-relaxed text-ink-70">{RC_MANAGE.desc}</p>
            </div>
          </div>
          <Link
            href={RC_MANAGE.button.href}
            className="inline-flex items-center gap-2 rounded-lg border border-ridge bg-clear px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear"
          >
            {RC_MANAGE.button.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Questions CTA */}
        <div className="grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-6 text-clear lg:grid-cols-[220px_1fr_auto] lg:p-0">
          <Photo src={RC_CTA.image} seed="revoke-cta" alt="" className="hidden h-full min-h-40 w-full lg:block" />
          <div className="lg:py-8">
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{RC_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{RC_CTA.desc}</p>
          </div>
          <div className="text-center lg:py-8 lg:pr-8">
            <Link
              href={RC_CTA.button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              {RC_CTA.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-xs text-mist-soft/70">or call {RC_CTA.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
