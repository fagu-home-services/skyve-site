import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { PaintingProcess } from "@/components/material/PaintingProcess";
import { SkylightAssurance } from "@/components/skylight/SkylightAssurance";
import { MaterialProjectsReviews } from "@/components/material/MaterialProjectsReviews";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { SKYLIGHT_INSTALLATION } from "@/lib/skylight-data";

const data = SKYLIGHT_INSTALLATION;

export const metadata: Metadata = {
  title: "Skylight Installation",
  description:
    "Professional skylight installation that brightens your home and improves energy efficiency. Fixed, ventilating, sun tunnels, and custom skylights — installed leak-free, guaranteed.",
};

export default function SkylightInstallationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <MaterialTypes data={data} />
        <PaintingProcess data={data} />
        <SkylightAssurance />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
