import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { InsuranceHero } from "@/components/insurance/InsuranceHero";
import { InsuranceBenefits } from "@/components/insurance/InsuranceBenefits";
import { InsuranceReasons } from "@/components/insurance/InsuranceReasons";
import { InsuranceProcess } from "@/components/insurance/InsuranceProcess";
import { InsuranceDocsSupport } from "@/components/insurance/InsuranceDocsSupport";
import { InsuranceCoverage } from "@/components/insurance/InsuranceCoverage";
import { InsuranceCTA } from "@/components/insurance/InsuranceCTA";

export const metadata: Metadata = {
  title: "Insurance Claims Assistance",
  description:
    "We handle the claim, you get the coverage. Skyve documents your roof damage, works with your insurance adjuster, and maximizes your claim. Free consultation, no obligation.",
};

export default function InsuranceClaimsAssistancePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <InsuranceHero />
        <InsuranceBenefits />
        <InsuranceReasons />
        <InsuranceProcess />
        <InsuranceDocsSupport />
        <InsuranceCoverage />
        <InsuranceCTA />
      </main>
      <SiteFooter />
    </>
  );
}
