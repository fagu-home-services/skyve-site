import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { MOUNTLAKE_TERRACE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Mountlake Terrace, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Mountlake Terrace, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every neighborhood.",
};

export default function MountlakeTerraceRoofingPage() {
  return <CityPage city={MOUNTLAKE_TERRACE} />;
}
