import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { COMPANY } from "@/lib/company";

/* Honest placeholder. The company does not have a financing partner yet, so
   this page must NOT advertise specific lenders, APRs, or "0% financing".
   When a real partner is signed, rebuild the calculator/partners sections and
   re-add "/financing" to LAUNCH_PATHS in lib/launch-phase.ts. */
export const metadata: Metadata = {
  title: "Financing",
  description:
    "Ask Skyve Roofing about payment options for your roofing project. Serving King & Snohomish County, WA.",
  robots: { index: false, follow: false },
};

export default function FinancingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-horizon-deep pt-28 pb-20 text-clear lg:pt-32 lg:pb-28">
          <div className="container-skyve max-w-2xl">
            <p className="eyebrow text-accent">Payment options</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl">
              Let&apos;s find a way that works for your budget.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-mist-soft/90">
              A new roof is a big investment, and we get it. We&apos;re setting up financing options
              to make it easier — and in the meantime, we&apos;re happy to talk through the payment
              options available for your project. No pressure, and always an honest, itemized price
              first.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/instant-estimate/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
              >
                Get My Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-clear/25 px-7 py-3.5 text-sm font-semibold text-clear transition-colors hover:bg-clear/10"
              >
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-mist-soft/70">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Licensed &amp; insured · {COMPANY.warrantyYears}-year workmanship warranty
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
