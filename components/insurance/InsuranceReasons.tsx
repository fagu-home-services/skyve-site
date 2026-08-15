import Link from "next/link";
import { Phone, ArrowRight, CloudRain, Clock, Zap } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
import { CLAIM_REASONS } from "@/lib/insurance-data";

export function InsuranceReasons() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Reasons */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-7">
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            Common Reasons for Roof Insurance Claims
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {CLAIM_REASONS.map((r) => (
              <div key={r.label}>
                <Photo src={r.image} alt={r.label} className="aspect-[4/3] rounded-lg" />
                <p className="mt-2 text-center text-xs font-medium text-horizon">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Storm card */}
        <div className="relative flex flex-col justify-center rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <CloudRain className="absolute right-6 top-6 h-9 w-9 text-sky/50" />
          <h3 className="font-serif text-2xl font-bold leading-tight">
            Storm Damage?
            <br />
            We&apos;re Here to Help.
          </h3>
          <p className="mt-3 text-sm text-sky-soft/80">
            Our team is ready to respond quickly, inspect your roof, and help you
            start your claim today.
          </p>
          <a
            href={COMPANY.phoneHref}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            <Phone className="h-4 w-4" /> Call Now: {COMPANY.phone}
          </a>
          <Link
            href="#"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-clear/40 px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-clear/10"
          >
            Request Claim Assistance <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-clear/10 pt-5 text-xs font-medium text-sky-soft/80">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky" /> 24/7 Emergency Service
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-sky" /> Fast Response Times
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
