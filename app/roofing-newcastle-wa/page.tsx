import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { NEWCASTLE } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Newcastle, WA",
  description:
    "Skyve Roofing & Exteriors — reliable roofing and exterior services for Newcastle, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Newcastle neighborhood.",
};

export default function NewcastleRoofingPage() {
  return <CityPage city={NEWCASTLE} />;
}
