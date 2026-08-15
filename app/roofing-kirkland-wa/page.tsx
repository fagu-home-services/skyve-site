import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { KIRKLAND } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Kirkland, WA",
  description:
    "Skyve Roofing & Exteriors — local roofing experts serving Kirkland, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Kirkland neighborhood.",
};

export default function KirklandRoofingPage() {
  return <CityPage city={KIRKLAND} />;
}
