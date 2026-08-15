import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { BOTHELL } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Bothell, WA",
  description:
    "Skyve Roofing & Exteriors — local roofing experts serving Bothell, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Bothell neighborhood.",
};

export default function BothellRoofingPage() {
  return <CityPage city={BOTHELL} />;
}
