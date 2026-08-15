import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { LYNNWOOD } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Lynnwood, WA",
  description:
    "Skyve Roofing & Exteriors — quality roofing and exterior solutions for Lynnwood, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Lynnwood neighborhood.",
};

export default function LynnwoodRoofingPage() {
  return <CityPage city={LYNNWOOD} />;
}
