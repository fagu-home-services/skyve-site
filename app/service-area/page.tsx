import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SAMHero } from "@/components/service-area/SAMHero";
import { SAMMap } from "@/components/service-area/SAMMap";
import { SAMOffer } from "@/components/service-area/SAMOffer";
import { SAMCTA } from "@/components/service-area/SAMCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { SAM_NEWSLETTER } from "@/lib/service-area-map-data";

export const metadata: Metadata = {
  title: "Service Area Map — King & Snohomish County | Skyve Roofing & Exteriors",
  description:
    "Skyve Roofing & Exteriors serves 50+ cities across King & Snohomish County, WA. Explore our interactive service area map, find your city, and request a free local estimate.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Trust & Authority", href: "/why-skyve" },
  { label: "Service Area Map", href: "" },
];

export default function ServiceAreaPage() {
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

        <SAMHero />
        <SAMMap />
        <SAMOffer />
        <SAMCTA />
        <KCNewsletter data={SAM_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
