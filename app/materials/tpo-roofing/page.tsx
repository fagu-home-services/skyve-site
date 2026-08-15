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
import { TPO_ROOFING } from "@/lib/material-pages";

const data = TPO_ROOFING;

export const metadata: Metadata = {
  title: "TPO Roofing",
  description:
    "Flat roof protection built to perform. Skyve installs premium TPO roofing systems with heat-welded seams, up to 88% solar reflectivity, and warranties up to 30 years for flat and low-slope roofs.",
};

export default function TpoRoofingPage() {
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
