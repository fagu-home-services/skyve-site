import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { AUBURN } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Auburn, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Auburn, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Auburn neighborhood.",
};

export default function AuburnRoofingPage() {
  return <CityPage city={AUBURN} />;
}
