import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { SNOHOMISH } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Snohomish, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Snohomish, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Snohomish neighborhood.",
};

export default function SnohomishRoofingPage() {
  return <CityPage city={SNOHOMISH} />;
}
