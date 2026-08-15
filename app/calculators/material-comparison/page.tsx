import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MCHero } from "@/components/material-compare/MCHero";
import { MCSelect } from "@/components/material-compare/MCSelect";
import { MCTable } from "@/components/material-compare/MCTable";
import { MCInsights } from "@/components/material-compare/MCInsights";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Roofing Material Comparison Tool — Side-by-Side",
  description:
    "Compare roofing materials side-by-side by cost, lifespan, durability, warranty, and appearance. Find the best option for your Washington home, budget, and goals.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Tools & Calculators", href: "/learn" },
  { label: "Roofing Material Comparison Tool", href: "" },
];

export default function MaterialComparisonPage() {
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

        <MCHero />

        <section className="bg-clear py-8 lg:py-10">
          <div className="container-skyve grid gap-6 lg:grid-cols-[300px_1fr]">
            <MCSelect />
            <MCTable />
          </div>
        </section>

        <MCInsights />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
