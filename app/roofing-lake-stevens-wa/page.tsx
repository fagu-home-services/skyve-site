import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { LAKE_STEVENS } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Lake Stevens, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Lake Stevens, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Lake Stevens neighborhood.",
};

export default function LakeStevensRoofingPage() {
  return <CityPage city={LAKE_STEVENS} />;
}
