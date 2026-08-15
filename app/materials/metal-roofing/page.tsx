import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { MaterialColors } from "@/components/material/MaterialColors";
import { MaterialCompareProcess } from "@/components/material/MaterialCompareProcess";
import { MaterialWarranty } from "@/components/material/MaterialWarranty";
import { MaterialProjectsReviews } from "@/components/material/MaterialProjectsReviews";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { METAL_ROOFING } from "@/lib/material-pages";

const data = METAL_ROOFING;

export const metadata: Metadata = {
  title: "Metal Roofing",
  description:
    "Stronger, smarter, built to last. Skyve installs premium metal roofing — standing seam, metal shingles, tiles, and shake — with 50+ year lifespan, 140+ MPH wind resistance, and energy savings.",
};

export default function MetalRoofingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <MaterialTypes data={data} />
        <MaterialColors data={data} />
        <MaterialCompareProcess data={data} />
        <MaterialWarranty data={data} />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
