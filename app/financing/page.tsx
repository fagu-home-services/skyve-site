import type { Metadata } from "next";
import { CalendarDays, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinancingHero } from "@/components/financing/FinancingHero";
import { FinancingBenefits } from "@/components/financing/FinancingBenefits";
import { FinancingCalculator } from "@/components/financing/FinancingCalculator";
import { FinancingPartners } from "@/components/financing/FinancingPartners";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CtaBand } from "@/components/shared/CtaBand";
import { FINANCING_FAQ, FINANCING_HERO_IMAGE } from "@/lib/financing-data";
import { liveHref } from "@/lib/launch-phase";

export const metadata: Metadata = {
  title: "Roofing Financing",
  description:
    "Quality roofing, flexible payments. Low monthly payments, competitive rates, and fast approval with a soft credit check. Finance your roof with trusted partners.",
};

export default function FinancingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FinancingHero />
        <FinancingBenefits />
        <FinancingCalculator />
        <FinancingPartners />
        <FaqAccordion items={FINANCING_FAQ} />
        <CtaBand
          title="Ready to protect your home?"
          subtitle="Get a free estimate and see how affordable quality roofing can be."
          primary={{
            label: "Get Your Free Estimate",
            href: "/estimate/instant",
            icon: <ArrowRight className="h-4 w-4" />,
          }}
          secondary={{
            label: "Schedule Inspection",
            href: liveHref("/services/roof-inspection", "/contact"),
            icon: <CalendarDays className="h-4 w-4" />,
          }}
          image={FINANCING_HERO_IMAGE}
        />
      </main>
      <SiteFooter />
    </>
  );
}
