import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StormHero } from "@/components/storm/StormHero";
import { StormBenefits } from "@/components/storm/StormBenefits";
import { StormDamageTypes } from "@/components/storm/StormDamageTypes";
import { StormProcess } from "@/components/storm/StormProcess";
import { StormServicesInsurance } from "@/components/storm/StormServicesInsurance";
import { StormBeforeAfter } from "@/components/storm/StormBeforeAfter";
import { StormReviewsFAQ } from "@/components/storm/StormReviewsFAQ";
import { StormCTA } from "@/components/storm/StormCTA";

export const metadata: Metadata = {
  title: "Storm Damage Repair",
  description:
    "Storm damage happens — we make it right. Fast emergency response, expert roof repairs, and full insurance claim support in King & Snohomish County. Available 24/7.",
};

export default function StormDamageRepairPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <StormHero />
        <StormBenefits />
        <StormDamageTypes />
        <StormProcess />
        <StormServicesInsurance />
        <StormBeforeAfter />
        <StormReviewsFAQ />
        <StormCTA />
      </main>
      <SiteFooter />
    </>
  );
}
