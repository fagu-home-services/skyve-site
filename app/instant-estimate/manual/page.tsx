import type { Metadata } from "next";
import { Phone, ShieldCheck, Award, ClipboardCheck, Clock } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
import { InstantEstimateForm } from "@/components/instant-estimate/InstantEstimateForm";

/* Manual fallback for the instant estimator: used when Google Solar can't
   measure a roof, or when a visitor prefers to just ask. Same lead pipeline
   (→ /api/lead → Google Sheet). noindex. */
export const metadata: Metadata = {
  title: { absolute: "Request a Roof Estimate | Skyve Roofing & Exteriors" },
  description:
    "Request a free, itemized roofing estimate from Skyve Roofing & Exteriors. Licensed & insured, 25-year workmanship warranty. Serving King & Snohomish County, WA.",
  robots: { index: false, follow: false },
};

const TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured", sub: `WA #${COMPANY.license}` },
  { icon: Award, label: `${COMPANY.warrantyYears}-Year Warranty`, sub: "Workmanship" },
  { icon: ClipboardCheck, label: "Documented Work", sub: "Photos on every job" },
  { icon: Clock, label: "Fast Response", sub: "Within 1 business day" },
];

export default function InstantEstimateManualPage() {
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
        <section className="relative overflow-hidden bg-horizon-deep text-clear">
          <Photo seed="ie-hero" alt="Craftsman home with a new roof at dusk" priority className="absolute inset-0 h-full w-full opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-horizon-deep/80 via-horizon-deep/85 to-horizon-deep" />

          <div className="container-skyve relative grid items-start gap-8 py-10 lg:grid-cols-[1fr_minmax(380px,440px)] lg:gap-12 lg:py-16">
            <div className="lg:pt-6">
              <p className="eyebrow text-accent">Veteran-owned · 20+ years on the roof</p>
              <h1 className="mt-3 font-serif text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                Your free roof estimate.
                <br />
                <span className="text-accent">Honest, itemized, no pressure.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-mist-soft/90">
                Fill out the form and a Skyve owner will reach out within one business day. No sales
                games — just a clear, line-by-line price for your project.
              </p>

              <div className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5">
                {TRUST.map((t) => (
                  <div key={t.label} className="flex items-start gap-2.5">
                    <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-clear">{t.label}</p>
                      <p className="text-xs text-mist-soft/70">{t.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-mist-soft/70">
                Prefer to talk? Call{" "}
                <a href={COMPANY.phoneHref} className="font-semibold text-clear hover:text-accent">{COMPANY.phone}</a>
              </p>
            </div>

            <div id="form">
              <InstantEstimateForm />
            </div>
          </div>
        </section>
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
