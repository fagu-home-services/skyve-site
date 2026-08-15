import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { TUKWILA } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Tukwila, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Tukwila, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Tukwila neighborhood.",
};

export default function TukwilaRoofingPage() {
  return <CityPage city={TUKWILA} />;
}
