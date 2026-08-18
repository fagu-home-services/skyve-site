import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { COMPANY } from "@/lib/company";
import { InstantEstimateShell } from "@/components/estimate/InstantEstimateShell";
import { WhatsIncluded } from "@/components/estimate/WhatsIncluded";
import { EstimateFAQ } from "@/components/estimate/EstimateFAQ";

/* The QR-code / print landing (www.skyvewa.com/instant-estimate). Instant roof
   estimator: address → satellite measurement (Google Solar, calibrated to real
   reports) → approximate price. Gate captures the lead (+ measured roof) to the
   Google Sheet. Manual fallback at /instant-estimate/manual. noindex. */
export const metadata: Metadata = {
  title: { absolute: "Instant Roof Estimate | Skyve Roofing & Exteriors" },
  description:
    "Get an instant, approximate roof estimate from your address — measured from satellite imagery. Licensed & insured, 25-year workmanship warranty. Serving King & Snohomish County, WA.",
  robots: { index: false, follow: false },
};

export default function InstantEstimatePage() {
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
        <InstantEstimateShell>
          <WhatsIncluded />
          <EstimateFAQ />
        </InstantEstimateShell>
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
