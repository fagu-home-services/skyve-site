import type { Metadata } from "next";
import { ArrowRight, Upload } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhyWork } from "@/components/careers/WhyWork";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { LifeAtSkyve } from "@/components/careers/LifeAtSkyve";
import { CtaBand } from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your future with Skyve Roofing & Exteriors. Join a team that values skill, integrity, and a commitment to excellence. See open positions in King & Snohomish County.",
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CareersHero />
        <WhyWork />
        <OpenPositions />
        <LifeAtSkyve />
        <CtaBand
          title="Ready to Build Your Future?"
          subtitle="Join a team that values skill, integrity, and a commitment to excellence."
          primary={{
            label: "View Open Positions",
            href: "#",
            icon: <ArrowRight className="h-4 w-4" />,
          }}
          secondary={{
            label: "Send Us Your Resume",
            href: "#",
            icon: <Upload className="h-4 w-4" />,
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
