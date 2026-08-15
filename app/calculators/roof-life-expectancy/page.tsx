import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RLHero } from "@/components/roof-life/RLHero";
import { RLForm } from "@/components/roof-life/RLForm";
import { RLResults } from "@/components/roof-life/RLResults";
import { RLExtras } from "@/components/roof-life/RLExtras";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Roof Life Expectancy Calculator — Years Remaining",
  description:
    "Estimate how many years of life your roof has left based on material, installation quality, maintenance, and local Washington weather. Free, data-driven, and personalized.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Tools & Calculators", href: "/learn" },
  { label: "Roof Life Expectancy Calculator", href: "" },
];

export default function RoofLifeExpectancyPage() {
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

        <RLHero />

        <section className="bg-clear py-8 lg:py-10">
          <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_1.05fr]">
            <RLForm />
            <RLResults />
          </div>
        </section>

        <RLExtras />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
