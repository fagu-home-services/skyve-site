import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EmergencyHero } from "@/components/emergency/EmergencyHero";
import { EmergencyCantWait } from "@/components/emergency/EmergencyCantWait";
import { EmergencyServices } from "@/components/emergency/EmergencyServices";
import { EmergencyProcess } from "@/components/emergency/EmergencyProcess";
import { EmergencyTrust } from "@/components/emergency/EmergencyTrust";
import { EmergencyCTA } from "@/components/emergency/EmergencyCTA";
import { GoogleReviews } from "@/components/shared/GoogleReviews";
import { EMERGENCY_REVIEWS } from "@/lib/emergency-data";

export const metadata: Metadata = {
  title: "Emergency Roof Repair",
  description:
    "24/7 emergency roof repair in King & Snohomish County. Storm damage, sudden leaks, fallen trees — Skyve responds fast to protect your home and prevent further damage.",
};

export default function EmergencyRoofRepairPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <EmergencyHero />
        <EmergencyCantWait />
        <EmergencyServices />
        <EmergencyProcess />
        <EmergencyTrust />
        <GoogleReviews reviews={EMERGENCY_REVIEWS} />
        <EmergencyCTA />
      </main>
      <SiteFooter />
    </>
  );
}
