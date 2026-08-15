import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LeakHero } from "@/components/leak/LeakHero";
import { LeakBenefits } from "@/components/leak/LeakBenefits";
import { LeakSigns } from "@/components/leak/LeakSigns";
import { LeakProcess } from "@/components/leak/LeakProcess";
import { LeakMethodsServices } from "@/components/leak/LeakMethodsServices";
import { LeakBeforeAfter } from "@/components/leak/LeakBeforeAfter";
import { LeakCTA } from "@/components/leak/LeakCTA";
import { GoogleReviews } from "@/components/shared/GoogleReviews";
import { LEAK_REVIEWS } from "@/lib/leak-data";

export const metadata: Metadata = {
  title: "Roof Leak Repair",
  description:
    "Find it, fix it, protect your home. Fast, accurate roof leak detection and lasting repairs to stop water damage at the source. Same-day inspections in King & Snohomish County.",
};

export default function RoofLeakRepairPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LeakHero />
        <LeakBenefits />
        <LeakSigns />
        <LeakProcess />
        <LeakMethodsServices />
        <LeakBeforeAfter />
        <GoogleReviews reviews={LEAK_REVIEWS} />
        <LeakCTA />
      </main>
      <SiteFooter />
    </>
  );
}
