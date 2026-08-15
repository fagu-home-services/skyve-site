import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FCHero } from "@/components/financing/FCHero";
import { FCForm } from "@/components/financing/FCForm";
import { FCResults } from "@/components/financing/FCResults";
import { FCBottom } from "@/components/financing/FCBottom";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Roof Financing Calculator — Monthly Payments",
  description:
    "Explore roof financing options with monthly payment estimates, total costs, and an amortization preview. Pre-qualify with trusted lenders — no impact to your credit.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Tools & Calculators", href: "/learn" },
  { label: "Financing Calculator", href: "" },
];

export default function FinancingCalculatorPage() {
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

        <FCHero />

        <section className="bg-clear py-8 lg:py-10">
          <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <FCForm />
            <FCResults />
          </div>
        </section>

        <FCBottom />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
