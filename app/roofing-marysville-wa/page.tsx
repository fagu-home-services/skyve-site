import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { MARYSVILLE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Marysville, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Marysville, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Marysville neighborhood.",
};

export default function MarysvilleRoofingPage() {
  return <CityPage city={MARYSVILLE} />;
}
