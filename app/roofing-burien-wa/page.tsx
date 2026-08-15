import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { BURIEN } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Burien, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Burien, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Burien neighborhood.",
};

export default function BurienRoofingPage() {
  return <CityPage city={BURIEN} />;
}
