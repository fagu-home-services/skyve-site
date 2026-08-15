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
import { SYNTHETIC_SHAKE } from "@/lib/material-pages";

const data = SYNTHETIC_SHAKE;

export const metadata: Metadata = {
  title: "Synthetic Shake Roofing",
  description:
    "The beauty of cedar, the performance of innovation. Skyve installs premium synthetic shake roofing — authentic cedar look, Class 4 impact resistance, and 50+ year warranties with no maintenance.",
};

export default function SyntheticShakeRoofingPage() {
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
