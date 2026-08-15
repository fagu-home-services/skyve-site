import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { PromiseBand } from "@/components/home/PromiseBand";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Founders } from "@/components/home/Founders";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { RecentProjects } from "@/components/home/RecentProjects";
import { ServiceAreaMap } from "@/components/home/ServiceAreaMap";
import { Reviews } from "@/components/home/Reviews";
// Phase 2: LearnArticles (→ /learn) and StoriesBand (→ /field-reports,
// /share-your-story) are deferred for the v1 launch. Re-add in Phase 2.
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProcessStrip />
        <PromiseBand />
        <WhyChoose />
        <Founders />
        <ServicesGrid />
        <RecentProjects />
        <ServiceAreaMap />
        <Reviews />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
