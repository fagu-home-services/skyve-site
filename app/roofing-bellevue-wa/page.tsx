import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { BELLEVUE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Bellevue, WA",
  description:
    "Skyve Roofing & Exteriors — premium roofing and exterior solutions for Bellevue, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Bellevue neighborhood.",
};

export default function BellevueRoofingPage() {
  return <CityPage city={BELLEVUE} />;
}
