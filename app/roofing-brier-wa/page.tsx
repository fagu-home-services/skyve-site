import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { BRIER } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Brier, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Brier, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Brier neighborhood.",
};

export default function BrierRoofingPage() {
  return <CityPage city={BRIER} />;
}
