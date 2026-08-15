import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { VentilationHero } from "@/components/ventilation/VentilationHero";
import { VentilationProblems } from "@/components/ventilation/VentilationProblems";
import { VentilationSolutions } from "@/components/ventilation/VentilationSolutions";
import { VentilationProcess } from "@/components/ventilation/VentilationProcess";
import { VentilationBenefitsCheck } from "@/components/ventilation/VentilationBenefitsCheck";
import { VentilationReviewsFAQ } from "@/components/ventilation/VentilationReviewsFAQ";
import { VentilationCTA } from "@/components/ventilation/VentilationCTA";

export const metadata: Metadata = {
  title: "Roof Ventilation",
  description:
    "Better ventilation, healthier roof. Skyve's roof ventilation solutions regulate temperature and moisture, extend roof life up to 30%, and lower energy bills in King & Snohomish County.",
};

export default function RoofVentilationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <VentilationHero />
        <VentilationProblems />
        <VentilationSolutions />
        <VentilationProcess />
        <VentilationBenefitsCheck />
        <VentilationReviewsFAQ />
        <VentilationCTA />
      </main>
      <SiteFooter />
    </>
  );
}
