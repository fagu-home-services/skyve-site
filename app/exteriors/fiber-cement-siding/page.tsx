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
import { FIBER_CEMENT } from "@/lib/material-pages";

const data = FIBER_CEMENT;

export const metadata: Metadata = {
  title: "Fiber Cement Siding",
  description:
    "Beauty, strength, built to last for decades. Skyve installs premium fiber cement siding — durable, fire-resistant, and low maintenance with the timeless look of wood.",
};

export default function FiberCementSidingPage() {
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
