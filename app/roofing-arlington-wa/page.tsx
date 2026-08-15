import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { ARLINGTON } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Arlington, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Arlington, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Arlington neighborhood.",
};

export default function ArlingtonRoofingPage() {
  return <CityPage city={ARLINGTON} />;
}
