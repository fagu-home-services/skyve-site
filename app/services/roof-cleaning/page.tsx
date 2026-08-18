import type { Metadata } from "next";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CleaningHero } from "@/components/cleaning/CleaningHero";
import { WhyCleaning } from "@/components/cleaning/WhyCleaning";
import { CleaningIncluded } from "@/components/cleaning/CleaningIncluded";
import { CleaningProcess } from "@/components/cleaning/CleaningProcess";
import { CleaningGallery } from "@/components/cleaning/CleaningGallery";
import { CleaningPlans } from "@/components/cleaning/CleaningPlans";
import { CleaningReviewsFAQ } from "@/components/cleaning/CleaningReviewsFAQ";
import { CtaBand } from "@/components/shared/CtaBand";
import { CLEANING_CTA_IMAGE } from "@/lib/cleaning-data";

export const metadata: Metadata = {
  title: "Roof Cleaning",
  description:
    "A cleaner roof, a better home. Skyve removes moss, algae, lichen, and debris with a safe, eco-friendly soft-wash system to protect your roof and boost curb appeal.",
};

export default function RoofCleaningPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CleaningHero />
        <WhyCleaning />
        <CleaningIncluded />
        <CleaningProcess />
        <CleaningGallery />
        <CleaningPlans />
        <CleaningReviewsFAQ />
        <CtaBand
          title="A Clean Roof Protects Your Home"
          subtitle="Don't wait for moss and algae to cause damage. Schedule your roof cleaning today!"
          image={CLEANING_CTA_IMAGE}
          primary={{
            label: "Get Your Free Estimate",
            href: "/instant-estimate/",
            icon: <ArrowRight className="h-4 w-4" />,
          }}
          secondary={{
            label: "Schedule Roof Cleaning",
            href: "#",
            icon: <CalendarDays className="h-4 w-4" />,
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
