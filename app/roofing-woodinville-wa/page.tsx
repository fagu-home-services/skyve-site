import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { WOODINVILLE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Woodinville, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Woodinville, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Woodinville neighborhood.",
};

export default function WoodinvilleRoofingPage() {
  return <CityPage city={WOODINVILLE} />;
}
