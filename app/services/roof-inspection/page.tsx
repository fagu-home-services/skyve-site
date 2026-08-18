import type { Metadata } from "next";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { InspectionHero } from "@/components/inspection/InspectionHero";
import { InspectionBenefits } from "@/components/inspection/InspectionBenefits";
import { WhatWeInspect } from "@/components/inspection/WhatWeInspect";
import { InspectionProcess } from "@/components/inspection/InspectionProcess";
import { WhyInspectionsMatter } from "@/components/inspection/WhyInspectionsMatter";
import { GoogleReviews } from "@/components/shared/GoogleReviews";
import { CtaBand } from "@/components/shared/CtaBand";
import { INSPECTION_REVIEWS } from "@/lib/inspection-data";

export const metadata: Metadata = {
  title: "Roof Inspection",
  description:
    "Know the condition of your roof and protect your home. Professional roof inspection with a photo-documented report. Free standard inspections in King & Snohomish County.",
};

export default function RoofInspectionPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <InspectionHero />
        <InspectionBenefits />
        <WhatWeInspect />
        <InspectionProcess />
        <WhyInspectionsMatter />
        <GoogleReviews reviews={INSPECTION_REVIEWS} />
        <CtaBand
          title="Get Peace of Mind with a Professional Roof Inspection"
          subtitle="Schedule your inspection today and protect your home tomorrow."
          primary={{
            label: "Schedule Your Inspection",
            href: "#",
            icon: <ArrowRight className="h-4 w-4" />,
          }}
          secondary={{
            label: "Get a Free Estimate",
            href: "/instant-estimate/",
            icon: <CalendarDays className="h-4 w-4" />,
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
