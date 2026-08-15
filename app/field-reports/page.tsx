import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FieldReportsHero } from "@/components/field-reports/FieldReportsHero";
import { FieldReportsSidebar } from "@/components/field-reports/FieldReportsSidebar";
import { FieldReportsList } from "@/components/field-reports/FieldReportsList";
import { FieldReportsFilters } from "@/components/field-reports/FieldReportsFilters";
import { FieldReportsCTA } from "@/components/field-reports/FieldReportsCTA";

export const metadata: Metadata = {
  title: "Field Reports — Real Projects",
  description:
    "Browse real Skyve Roofing & Exteriors projects across Washington — with field photos, materials, crews, and customer ratings. Total transparency on every job.",
};

export default function FieldReportsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FieldReportsHero />
        <section className="bg-mist-soft/40 py-12 lg:py-16">
          <div className="container-skyve grid gap-8 lg:grid-cols-[224px_1fr] xl:grid-cols-[224px_1fr_264px]">
            <FieldReportsSidebar />
            <FieldReportsList />
            <div className="xl:sticky xl:top-24 xl:self-start">
              <FieldReportsFilters />
            </div>
          </div>
        </section>
        <FieldReportsCTA />
      </main>
      <SiteFooter />
    </>
  );
}
