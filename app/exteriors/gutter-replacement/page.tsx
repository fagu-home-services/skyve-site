import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { PaintingProcess } from "@/components/material/PaintingProcess";
import { GutterMaterialsColors } from "@/components/gutter/GutterMaterialsColors";
import { GutterReplaceWhyDifference } from "@/components/gutter/GutterReplaceWhyDifference";
import { MaterialProjectsReviews } from "@/components/material/MaterialProjectsReviews";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { GUTTER_REPLACEMENT } from "@/lib/gutter-replacement-data";

const data = GUTTER_REPLACEMENT;

export const metadata: Metadata = {
  title: "Gutter Replacement",
  description:
    "Replace old, leaking, or sagging gutters with durable, high-performance seamless systems. Aluminum, copper, gutter guards, and fascia repair — installed to protect your home for years.",
};

export default function GutterReplacementPage() {
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
        <GutterReplaceWhyDifference />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
