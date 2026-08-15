import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaterialHero } from "@/components/material/MaterialHero";
import { MaterialBrands } from "@/components/material/MaterialBrands";
import { MaterialFeatures } from "@/components/material/MaterialFeatures";
import { MaterialTypes } from "@/components/material/MaterialTypes";
import { DeckMaterials } from "@/components/deck/DeckMaterials";
import { PaintingProcess } from "@/components/material/PaintingProcess";
import { DeckCompareCards } from "@/components/deck/DeckCompareCards";
import { MaterialProjectsReviews } from "@/components/material/MaterialProjectsReviews";
import { MaterialCTA } from "@/components/material/MaterialCTA";
import { DECK_CONSTRUCTION } from "@/lib/deck-data";

const data = DECK_CONSTRUCTION;

export const metadata: Metadata = {
  title: "Deck Construction",
  description:
    "Build your perfect outdoor space. Skyve designs and builds custom decks — composite, wood, and multi-level — with premium materials, expert craftsmanship, and lasting value.",
};

export default function DeckConstructionPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <MaterialTypes data={data} />
        <DeckMaterials />
        <PaintingProcess data={data} />
        <DeckCompareCards />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
