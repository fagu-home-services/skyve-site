import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { MUKILTEO } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Mukilteo, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Mukilteo, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Mukilteo neighborhood.",
};

export default function MukilteoRoofingPage() {
  return <CityPage city={MUKILTEO} />;
}
