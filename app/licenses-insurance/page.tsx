import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LIHero } from "@/components/licenses/LIHero";
import { LILicenses } from "@/components/licenses/LILicenses";
import { LIInsurance } from "@/components/licenses/LIInsurance";
import { LISafety } from "@/components/licenses/LISafety";
import { LICTA } from "@/components/licenses/LICTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Licenses & Insurance — Fully Licensed, Bonded & Insured | Skyve Roofing & Exteriors",
  description:
    "Skyve Roofing & Exteriors is fully licensed, bonded, and insured in Washington. View our state contractor license, L&I registration, municipal permits, and $2M+ in insurance coverage.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Trust & Authority", href: "/why-skyve" },
  { label: "Licenses & Insurance", href: "" },
];

export default function LicensesInsurancePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-clear pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-ink-50">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-ridge">{c.label}</Link>
                ) : (
                  <span className="font-semibold text-horizon">{c.label}</span>
                )}
                {i < CRUMBS.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        </div>

        <LIHero />
        <LILicenses />
        <LIInsurance />
        <LISafety />
        <LICTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
