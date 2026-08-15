import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { SEATTLE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Seattle, WA",
  description:
    "Skyve Roofing & Exteriors — trusted roofing experts serving Seattle, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Seattle neighborhood.",
};

export default function SeattleRoofingPage() {
  return <CityPage city={SEATTLE} />;
}
