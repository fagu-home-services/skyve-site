import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { MaterialColors } from "@/components/material/MaterialColors";
import { PaintingProcess } from "@/components/material/PaintingProcess";
import { PaintingComparison } from "@/components/material/PaintingComparison";
import { MaterialProjectsReviews } from "@/components/material/MaterialProjectsReviews";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { EXTERIOR_PAINTING } from "@/lib/material-pages";

const data = EXTERIOR_PAINTING;

export const metadata: Metadata = {
  title: "Exterior Painting",
  description:
    "Transform your home and protect what matters. Skyve's professional exterior painting enhances curb appeal, protects against the elements, and increases property value with a lasting finish.",
};

export default function ExteriorPaintingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <MaterialTypes data={data} />
        <MaterialColors data={data} />
        <PaintingProcess data={data} />
        <PaintingComparison data={data} />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
