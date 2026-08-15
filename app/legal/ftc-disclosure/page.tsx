import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FTCHero } from "@/components/ftc/FTCHero";
import { FTCAbout } from "@/components/ftc/FTCAbout";
import { FTCPromise } from "@/components/ftc/FTCPromise";
import { FTCPartners } from "@/components/ftc/FTCPartners";
import { FTCCTA } from "@/components/ftc/FTCCTA";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { FTC_NEWSLETTER } from "@/lib/ftc-data";

export const metadata: Metadata = {
  title: "FTC Disclosure | Skyve Roofing & Exteriors",
  description:
    "In compliance with FTC guidelines, Skyve Roofing & Exteriors discloses how we may earn compensation through manufacturer partnerships, referrals, affiliate links, and promotions.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "FTC Disclosure", href: "" },
];

export default function FTCDisclosurePage() {
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

        <FTCHero />
        <FTCAbout />
        <FTCPromise />
        <FTCPartners />
        <FTCCTA />
        <KCNewsletter data={FTC_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
