import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { FEDERAL_WAY } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Federal Way, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Federal Way, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Federal Way neighborhood.",
};

export default function FederalWayRoofingPage() {
  return <CityPage city={FEDERAL_WAY} />;
}
