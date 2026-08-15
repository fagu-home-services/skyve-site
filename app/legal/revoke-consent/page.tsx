import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LegalHero } from "@/components/legal/LegalHero";
import { RCBody } from "@/components/revoke-consent/RCBody";
import { RCBottom } from "@/components/revoke-consent/RCBottom";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { RC_HERO, RC_NEWSLETTER } from "@/lib/revoke-consent-data";

export const metadata: Metadata = {
  title: "Revoke Consent | Skyve Roofing & Exteriors",
  description:
    "Change your mind at any time. Learn how to revoke consent for Skyve Roofing & Exteriors to use your personal information for marketing, advertising, cookies, and third-party sharing.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Revoke Consent", href: "" },
];

export default function RevokeConsentPage() {
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

        <LegalHero data={RC_HERO} />
        <RCBody />
        <RCBottom />
        <KCNewsletter data={RC_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
