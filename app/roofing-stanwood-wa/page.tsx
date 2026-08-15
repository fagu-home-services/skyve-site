import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { STANWOOD } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Stanwood, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Stanwood, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Stanwood neighborhood.",
};

export default function StanwoodRoofingPage() {
  return <CityPage city={STANWOOD} />;
}
