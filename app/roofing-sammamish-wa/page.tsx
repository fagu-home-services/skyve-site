import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { SAMMAMISH } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Sammamish, WA",
  description:
    "Skyve Roofing & Exteriors — trusted roofing and exterior specialists in Sammamish, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Sammamish neighborhood.",
};

export default function SammamishRoofingPage() {
  return <CityPage city={SAMMAMISH} />;
}
