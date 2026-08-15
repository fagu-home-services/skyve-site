import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { ISSAQUAH } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Issaquah, WA",
  description:
    "Skyve Roofing & Exteriors — expert roofing and exterior services for Issaquah, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Issaquah neighborhood.",
};

export default function IssaquahRoofingPage() {
  return <CityPage city={ISSAQUAH} />;
}
