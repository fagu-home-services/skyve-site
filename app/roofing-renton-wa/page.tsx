import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { RENTON } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Renton, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Renton, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Renton neighborhood.",
};

export default function RentonRoofingPage() {
  return <CityPage city={RENTON} />;
}
