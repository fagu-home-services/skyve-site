import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WCHero } from "@/components/warranty/WCHero";
import { WCTypes } from "@/components/warranty/WCTypes";
import { WCRegister } from "@/components/warranty/WCRegister";
import { WCPartners } from "@/components/warranty/WCPartners";
import { WCCTA } from "@/components/warranty/WCCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { WC_NEWSLETTER } from "@/lib/warranty-data";

export const metadata: Metadata = {
  title: "Warranty Center — Workmanship & Manufacturer Warranties | Skyve Roofing & Exteriors",
  description:
    "Explore Skyve warranty coverage: lifetime workmanship warranty, manufacturer warranties up to 50 years, wind & storm protection, and extended plans. Register or check your warranty anytime.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Trust & Authority", href: "/why-skyve" },
  { label: "Warranty Center", href: "" },
];

export default function WarrantyPage() {
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

        <WCHero />
        <WCTypes />
        <WCRegister />
        <WCPartners />
        <WCCTA />
        <KCNewsletter data={WC_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
