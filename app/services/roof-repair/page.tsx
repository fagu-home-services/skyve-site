import type { Metadata } from "next";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServicePageHero } from "@/components/service/ServicePageHero";
import { WhyReplace } from "@/components/service/WhyReplace";
import { RepairTypes } from "@/components/service/RepairTypes";
import { RepairProcessCosts } from "@/components/service/RepairProcessCosts";
import { GoogleReviews } from "@/components/shared/GoogleReviews";
import { CtaBand } from "@/components/shared/CtaBand";
import { ROOF_REPAIR, REPAIR_REVIEWS } from "@/lib/service-pages";
import { liveHref } from "@/lib/launch-phase";

const data = ROOF_REPAIR;

export const metadata: Metadata = {
  title: "Roof Repair",
  description:
    "Fast, reliable roof repair you can count on. From minor leaks to storm damage, Skyve finds the source and delivers lasting repairs. Same-day emergency service available.",
};

export default function RoofRepairPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServicePageHero data={data} />
        <WhyReplace data={data} />
        <RepairTypes data={data} />
        <RepairProcessCosts data={data} />
        <GoogleReviews reviews={REPAIR_REVIEWS} />
        <CtaBand
          title={data.ctaTitle}
          subtitle={data.ctaSubtitle}
          primary={{
            label: "Get Your Free Estimate",
            href: "/instant-estimate/",
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
