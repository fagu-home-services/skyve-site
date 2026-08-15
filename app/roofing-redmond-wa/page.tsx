import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { REDMOND } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Redmond, WA",
  description:
    "Skyve Roofing & Exteriors — professional roofing and exterior services in Redmond, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Redmond neighborhood.",
};

export default function RedmondRoofingPage() {
  return <CityPage city={REDMOND} />;
}
