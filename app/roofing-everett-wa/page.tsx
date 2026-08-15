import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { EVERETT } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Everett, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Everett, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Everett neighborhood.",
};

export default function EverettRoofingPage() {
  return <CityPage city={EVERETT} />;
}
