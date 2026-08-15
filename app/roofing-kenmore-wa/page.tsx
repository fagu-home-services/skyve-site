import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { KENMORE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Kenmore, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Kenmore, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Kenmore neighborhood.",
};

export default function KenmoreRoofingPage() {
  return <CityPage city={KENMORE} />;
}
