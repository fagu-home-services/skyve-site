import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { PaintingProcess } from "@/components/material/PaintingProcess";
import { GutterMaterialsColors } from "@/components/gutter/GutterMaterialsColors";
import { GutterWhyDifference } from "@/components/gutter/GutterWhyDifference";
import { MaterialProjectsReviews } from "@/components/material/MaterialProjectsReviews";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { GUTTER_INSTALLATION } from "@/lib/gutter-data";

const data = GUTTER_INSTALLATION;

export const metadata: Metadata = {
  title: "Gutter Installation",
  description:
    "Protect your home from water damage. Skyve installs premium seamless gutters — K-style, half-round, box, and gutter guards — to protect your foundation and add curb appeal.",
};

export default function GutterInstallationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <MaterialTypes data={data} />
        <PaintingProcess data={data} />
        <GutterMaterialsColors />
        <GutterWhyDifference />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
