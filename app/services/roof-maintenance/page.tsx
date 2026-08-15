import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MaintenanceHero } from "@/components/maintenance/MaintenanceHero";
import { WhyAndProcess } from "@/components/maintenance/WhyAndProcess";
import { IssuesWeCatch } from "@/components/maintenance/IssuesWeCatch";
import { MaintenanceInAction } from "@/components/maintenance/MaintenanceInAction";
import { MaintenancePlans } from "@/components/maintenance/MaintenancePlans";
import { MaintenanceProof } from "@/components/maintenance/MaintenanceProof";
import { MaintenanceFAQ } from "@/components/maintenance/MaintenanceFAQ";

export const metadata: Metadata = {
  title: "Roof Maintenance",
  description:
    "Protect your roof before problems start. Skyve's roof maintenance program extends roof life, prevents expensive repairs, and tracks your Roof Health Score. Plans from $199/year.",
};

export default function RoofMaintenancePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MaintenanceHero />
        <WhyAndProcess />
        <IssuesWeCatch />
        <MaintenanceInAction />
        <MaintenancePlans />
        <MaintenanceProof />
        <MaintenanceFAQ />
      </main>
      <SiteFooter />
    </>
  );
}
