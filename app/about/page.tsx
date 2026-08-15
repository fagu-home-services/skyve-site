import type { Metadata } from "next";
import { CalendarDays, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { OurTeam } from "@/components/about/OurTeam";
import { MissionValues } from "@/components/about/MissionValues";
import { ImpactStats } from "@/components/about/ImpactStats";
import { CtaBand } from "@/components/shared/CtaBand";
import { liveHref } from "@/lib/launch-phase";

export const metadata: Metadata = {
  title: "About Skyve",
  description:
    "Built on trust, driven by purpose. Skyve Roofing & Exteriors raises the standard of roofing in Washington with technology, transparency, and elite craftsmanship.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <OurStory />
        <OurTeam />
        <MissionValues />
        <ImpactStats />
        <CtaBand
          variant="light"
          title="Ready to experience the Skyve difference?"
          subtitle="Get a free estimate or schedule an inspection today."
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
