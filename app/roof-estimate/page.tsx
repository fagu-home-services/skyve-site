import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { COMPANY } from "@/lib/company";
import { RoofEstimator } from "@/components/estimate/RoofEstimator";

/* Instant roof estimator (address → satellite measurement → approximate price).
   Kept on /roof-estimate while the Google key is being set up; will be promoted
   to /instant-estimate after it's live and reviewed. noindex. */
export const metadata: Metadata = {
  title: { absolute: "Instant Roof Estimate | Skyve Roofing & Exteriors" },
  description:
    "Get an instant, approximate roof estimate from your address — measured from satellite imagery. Licensed & insured. Serving King & Snohomish County, WA.",
  robots: { index: false, follow: false },
};

export default function RoofEstimatePage() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-mist bg-clear/95 backdrop-blur">
        <div className="container-skyve flex h-[64px] items-center justify-between gap-4">
          <Logo variant="color" height={30} />
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 text-sm font-bold text-ridge transition-colors hover:text-accent">
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{COMPANY.phone}</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <RoofEstimator />
      </main>

      <footer className="bg-horizon py-7 text-clear">
        <div className="container-skyve flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <Logo variant="mono" height={24} />
          <p className="text-xs text-mist-soft/70">
            {COMPANY.name} · Lic. #{COMPANY.license} · {COMPANY.serviceAreaLong} · {COMPANY.phone}
          </p>
        </div>
      </footer>
    </>
  );
}
