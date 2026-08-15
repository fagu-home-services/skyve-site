import type { Metadata } from "next";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceHubGrid } from "@/components/services/ServiceHubGrid";
import { ServicesWhyStrip } from "@/components/services/ServicesWhyStrip";
import { CtaBand } from "@/components/shared/CtaBand";
import { liveHref } from "@/lib/launch-phase";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Complete roofing and exterior solutions in Washington — roof replacement, repair, inspection, metal roofing, skylights, gutters, siding, and exterior painting. Expert craftsmanship and premium materials.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServicesHero />
        <ServiceHubGrid />
        <ServicesWhyStrip />
        <CtaBand
          title="Ready to Start Your Project?"
          subtitle="Get a free estimate and expert recommendations from our team."
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
        />
      </main>
      <SiteFooter />
    </>
  );
}
