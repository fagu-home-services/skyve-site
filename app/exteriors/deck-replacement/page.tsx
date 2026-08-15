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
import {
  DECK_REPLACEMENT,
  DECK_REPLACEMENT_MATERIALS,
  DECK_REPLACEMENT_WARRANTY_CARD,
  DECK_REPLACEMENT_FINANCING,
} from "@/lib/deck-replacement-data";

const data = DECK_REPLACEMENT;

export const metadata: Metadata = {
  title: "Deck Replacement",
  description:
    "Replace your old, worn-out deck with a safe, modern, long-lasting one. Skyve handles full replacements, surfaces, railings, and stairs with premium materials and expert craftsmanship.",
};

export default function DeckReplacementPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaterialHero data={data} />
        <MaterialBrands data={data} />
        <MaterialFeatures data={data} />
        <PaintingProcess data={data} />
        <MaterialTypes data={data} />
        <DeckMaterials materials={DECK_REPLACEMENT_MATERIALS} />
        <DeckCompareCards
          comparison={data.comparison}
          warranty={DECK_REPLACEMENT_WARRANTY_CARD}
          financing={DECK_REPLACEMENT_FINANCING}
          highlightColumn={1}
        />
        <MaterialProjectsReviews data={data} />
        <MaterialCTA data={data} />
      </main>
      <SiteFooter />
    </>
  );
}
