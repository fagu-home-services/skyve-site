import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { SEATAC } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in SeaTac, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for SeaTac, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every SeaTac neighborhood.",
};

export default function SeaTacRoofingPage() {
  return <CityPage city={SEATAC} />;
}
