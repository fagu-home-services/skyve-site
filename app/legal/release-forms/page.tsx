import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LegalHero } from "@/components/legal/LegalHero";
import { RFForms } from "@/components/release-forms/RFForms";
import { RFCustom } from "@/components/release-forms/RFCustom";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { RF_HERO, RF_NEWSLETTER } from "@/lib/release-forms-data";

export const metadata: Metadata = {
  title: "Release Forms | Skyve Roofing & Exteriors",
  description:
    "Download and complete Skyve Roofing & Exteriors release forms — photo & video release, property access authorization, liability waiver, ladder & equipment release, and drone usage consent.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Release Forms", href: "" },
];

export default function ReleaseFormsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-clear pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-ink-50">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-ridge">{c.label}</Link>
                ) : (
                  <span className="font-semibold text-horizon">{c.label}</span>
                )}
                {i < CRUMBS.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        </div>

        <LegalHero data={RF_HERO} />
        <RFForms />
        <RFCustom />
        <KCNewsletter data={RF_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
