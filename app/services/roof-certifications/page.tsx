import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CertsHero } from "@/components/certifications/CertsHero";
import { IndustryCerts } from "@/components/certifications/IndustryCerts";
import { ManufacturerCerts } from "@/components/certifications/ManufacturerCerts";
import { WhyCertsMatter } from "@/components/certifications/WhyCertsMatter";
import { CertsInAction } from "@/components/certifications/CertsInAction";
import { CertsProofReviews } from "@/components/certifications/CertsProofReviews";
import { CertsCTA } from "@/components/certifications/CertsCTA";

export const metadata: Metadata = {
  title: "Roof Certifications",
  description:
    "Certified, trained, and trusted. Skyve holds top industry and manufacturer certifications — GAF Master Elite, CertainTeed, and more — so you get quality you can verify.",
};

export default function RoofCertificationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CertsHero />
        <IndustryCerts />
        <ManufacturerCerts />
        <WhyCertsMatter />
        <CertsInAction />
        <CertsProofReviews />
        <CertsCTA />
      </main>
      <SiteFooter />
    </>
  );
}
