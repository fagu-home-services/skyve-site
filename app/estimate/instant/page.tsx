import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EstimateHero } from "@/components/estimate/EstimateHero";
import { StepIndicator } from "@/components/estimate/StepIndicator";
import { Step1Address } from "@/components/estimate/Step1Address";
import { EstimateStats } from "@/components/estimate/EstimateStats";
import { WhatsIncluded } from "@/components/estimate/WhatsIncluded";
import { EstimateFAQ } from "@/components/estimate/EstimateFAQ";
import { EstimateCTA } from "@/components/estimate/EstimateCTA";

export const metadata: Metadata = {
  title: "Instant Roof Estimate",
  description:
    "Get your roof estimate in less than 60 seconds. Aerial measurements, local pricing data, and real project history — no obligation, 100% free.",
};

export default function InstantEstimatePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <EstimateHero />
        <StepIndicator active={1} />
        <Step1Address />
        <EstimateStats />
        <WhatsIncluded />
        <EstimateFAQ />
        <EstimateCTA />
      </main>
      <SiteFooter />
    </>
  );
}
