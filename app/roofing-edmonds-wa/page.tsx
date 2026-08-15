import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { EDMONDS } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Edmonds, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Edmonds, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Edmonds neighborhood.",
};

export default function EdmondsRoofingPage() {
  return <CityPage city={EDMONDS} />;
}
