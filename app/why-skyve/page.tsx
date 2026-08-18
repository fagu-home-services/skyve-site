import type { Metadata } from "next";
import { CalendarDays, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhyHero } from "@/components/why/WhyHero";
import { FiveReasons } from "@/components/why/FiveReasons";
import { DeliverProcess } from "@/components/why/DeliverProcess";
import { CertsWarranty } from "@/components/why/CertsWarranty";
import { WhyReviews } from "@/components/why/WhyReviews";
import { CtaBand } from "@/components/shared/CtaBand";
import { liveHref } from "@/lib/launch-phase";

export const metadata: Metadata = {
  title: "Why Skyve",
  description:
    "Honest, transparent, and built around you. See the five reasons Washington homeowners choose Skyve — transparent pricing, certified experts, a proven process, and industry-leading warranties.",
};

export default function WhySkyvePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <WhyHero />
        <FiveReasons />
        <DeliverProcess />
        <CertsWarranty />
        <WhyReviews />
        <CtaBand
          title="Experience the Skyve Difference"
          subtitle="Get a free estimate or schedule an inspection today."
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
