import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { KCHero } from "@/components/knowledge/KCHero";
import { KCStartCategories } from "@/components/knowledge/KCStartCategories";
import { KCTrendingReports } from "@/components/knowledge/KCTrendingReports";
import { KCSkyveTV } from "@/components/knowledge/KCSkyveTV";
import { KCToolsDownloads } from "@/components/knowledge/KCToolsDownloads";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";

export const metadata: Metadata = {
  title: "Knowledge Center — Roofing Guides & Resources",
  description:
    "Everything you should know before hiring a roofing company. Expert guides, real project data, calculators, videos, and downloadable resources from Skyve Roofing & Exteriors.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <KCHero />
        <KCStartCategories />
        <KCTrendingReports />
        <KCSkyveTV />
        <KCToolsDownloads />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
