import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CPHero } from "@/components/contractors/CPHero";
import { CPHowWorks } from "@/components/contractors/CPHowWorks";
import { CP3Col } from "@/components/contractors/CP3Col";
import { CPTiers } from "@/components/contractors/CPTiers";
import { CPCTA } from "@/components/contractors/CPCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Contractors Program — Partner With Skyve",
  description:
    "Join the Skyve Contractors Program. Grow your roofing business with exclusive high-intent leads, powerful tools, training & certifications, and dedicated partner support.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Pro Partner Ecosystem", href: "/pro-partner" },
  { label: "Contractors Program", href: "" },
];

export default function ContractorsProgramPage() {
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

        <CPHero />
        <CPHowWorks />
        <CP3Col />
        <CPTiers />
        <CPCTA />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
