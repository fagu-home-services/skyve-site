import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FieldReportsSidebar } from "@/components/field-reports/FieldReportsSidebar";
import { FRDetailHero } from "@/components/field-reports/detail/FRDetailHero";
import { FRDetailTabs } from "@/components/field-reports/detail/FRDetailTabs";
import { FRDetailOverview } from "@/components/field-reports/detail/FRDetailOverview";
import { FRDetailRail } from "@/components/field-reports/detail/FRDetailRail";
import { FIELD_REPORTS, slugify } from "@/lib/field-reports-data";
import { FR_DETAIL } from "@/lib/field-report-detail-data";

export const metadata: Metadata = {
  title: `Field Report — ${FR_DETAIL.address}`,
  description:
    "Full field report for a completed Skyve project — drone photos, timeline, cost breakdown, materials, crew, and documents. Total transparency on every job.",
};

export function generateStaticParams() {
  return FIELD_REPORTS.map((p) => ({ slug: slugify(p.address) }));
}

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Skyve Stories Ecosystem", href: "/field-reports" },
  { label: "Field Reports Feed", href: "/field-reports" },
  { label: "Field Report Detail", href: "" },
];

export default function FieldReportDetailPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-mist-soft/40">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-mist-soft/70">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-clear">{c.label}</Link>
                ) : (
                  <span className="text-clear">{c.label}</span>
                )}
                {i < CRUMBS.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        </div>

        <div className="container-skyve py-8 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <FieldReportsSidebar />
            <div className="min-w-0 space-y-6">
              <FRDetailHero />
              <FRDetailTabs />
              <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
                <FRDetailOverview />
                <FRDetailRail />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
