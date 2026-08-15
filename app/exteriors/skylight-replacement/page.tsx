import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { PaintingProcess } from "@/components/material/PaintingProcess";
import { SkylightCompareEnergy } from "@/components/skylight/SkylightCompareEnergy";
import { MaterialProjectsReviews } from "@/components/material/MaterialProjectsReviews";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { SKYLIGHT_REPLACEMENT } from "@/lib/skylight-replacement-data";

const data = SKYLIGHT_REPLACEMENT;

export const metadata: Metadata = {
  title: "Skylight Replacement",
  description:
    "Replace old or leaking skylights with modern, energy-efficient options built to last. Stop leaks, cut energy bills, and brighten your home with a leak-free guarantee.",
};

export default function SkylightReplacementPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <MaterialTypes data={data} />
        <PaintingProcess data={data} />
        <SkylightCompareEnergy />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
