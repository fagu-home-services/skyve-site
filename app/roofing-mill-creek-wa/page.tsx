import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { MILL_CREEK } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Mill Creek, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Mill Creek, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Mill Creek neighborhood.",
};

export default function MillCreekRoofingPage() {
  return <CityPage city={MILL_CREEK} />;
}
