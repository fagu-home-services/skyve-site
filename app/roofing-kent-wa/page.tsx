import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { KENT } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Roofing Company in Kent, WA",
  description:
    "Skyve Roofing & Exteriors — trusted roofing and exterior services for Kent, WA. Roof replacement, repair, metal roofing, gutters, skylights, and siding across every Kent neighborhood.",
};

export default function KentRoofingPage() {
  return <CityPage city={KENT} />;
}
