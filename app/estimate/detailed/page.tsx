import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { DetailedHero } from "@/components/estimate/DetailedHero";
import { DetailedIncluded } from "@/components/estimate/DetailedIncluded";
import { InvestmentLevels } from "@/components/estimate/InvestmentLevels";
import { ProjectTimelineReport } from "@/components/estimate/ProjectTimelineReport";
import { DetailedCTA } from "@/components/estimate/DetailedCTA";

export const metadata: Metadata = {
  title: "Detailed Roof Estimate",
  description:
    "The most accurate estimate possible — drone inspection, precise measurements, material analysis, and a complete project plan. Starting at $150 with a 30-day price guarantee.",
};

export default function DetailedEstimatePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <DetailedHero />
        <DetailedIncluded />
        <InvestmentLevels />
        <ProjectTimelineReport />
        <DetailedCTA />
      </main>
      <SiteFooter />
    </>
  );
}
