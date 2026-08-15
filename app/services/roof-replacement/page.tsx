import type { Metadata } from "next";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServicePageHero } from "@/components/service/ServicePageHero";
import { WhyReplace } from "@/components/service/WhyReplace";
import { ServiceMaterials } from "@/components/service/ServiceMaterials";
import { ServiceProcess } from "@/components/service/ServiceProcess";
import { ServiceDifference } from "@/components/service/ServiceDifference";
import { GoogleReviews } from "@/components/shared/GoogleReviews";
import { CtaBand } from "@/components/shared/CtaBand";
import { ROOF_REPLACEMENT, SERVICE_REVIEWS } from "@/lib/service-pages";
import { liveHref } from "@/lib/launch-phase";

const data = ROOF_REPLACEMENT;

export const metadata: Metadata = {
  title: "Roof Replacement",
  description:
    "A new roof built to protect and built to last. Skyve delivers superior craftsmanship, premium materials, and a stress-free roof replacement in King & Snohomish County.",
};

export default function RoofReplacementPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServicePageHero data={data} />
        <WhyReplace data={data} />
        <ServiceMaterials data={data} />
        <ServiceProcess data={data} />
        <ServiceDifference data={data} />
        <GoogleReviews reviews={SERVICE_REVIEWS} />
        <CtaBand
          title={data.ctaTitle}
          subtitle={data.ctaSubtitle}
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
