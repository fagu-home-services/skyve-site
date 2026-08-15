import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { MONROE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Monroe, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Monroe, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Monroe neighborhood.",
};

export default function MonroeRoofingPage() {
  return <CityPage city={MONROE} />;
}
