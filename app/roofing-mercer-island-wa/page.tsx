import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { MERCER_ISLAND } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Mercer Island, WA",
  description:
    "Skyve Roofing & Exteriors — high-end roofing and exterior solutions for Mercer Island, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Mercer Island neighborhood.",
};

export default function MercerIslandRoofingPage() {
  return <CityPage city={MERCER_ISLAND} />;
}
