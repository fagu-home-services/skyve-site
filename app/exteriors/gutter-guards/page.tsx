import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { PaintingProcess } from "@/components/material/PaintingProcess";
import { GutterGuardAssurance } from "@/components/gutter/GutterGuardAssurance";
import { GutterGuardBeforeAfter } from "@/components/gutter/GutterGuardBeforeAfter";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { GUTTER_GUARDS } from "@/lib/gutter-guards-data";

const data = GUTTER_GUARDS;

export const metadata: Metadata = {
  title: "Gutter Guards",
  description:
    "Professional gutter guard installation that keeps leaves and debris out for clog-free, low-maintenance gutters. Micro-mesh, reverse curve, brush, and custom guards — backed by strong warranties.",
};

export default function GutterGuardsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <MaterialTypes data={data} />
        <PaintingProcess data={data} />
        <GutterGuardAssurance />
        <GutterGuardBeforeAfter />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
