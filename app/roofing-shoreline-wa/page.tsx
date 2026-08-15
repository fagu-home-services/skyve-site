import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { SHORELINE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Shoreline, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Shoreline, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Shoreline neighborhood.",
};

export default function ShorelineRoofingPage() {
  return <CityPage city={SHORELINE} />;
}
