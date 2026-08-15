import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalContent } from "@/components/legal/LegalContent";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import {
  PRIVACY_HERO,
  PRIVACY_SECTIONS,
  PRIVACY_QUESTIONS,
  PRIVACY_COMMITMENT,
  PRIVACY_NEWSLETTER,
} from "@/lib/legal-privacy-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Skyve Roofing & Exteriors",
  description:
    "Read the Skyve Roofing & Exteriors Privacy Policy — how we collect, use, share, and protect your personal information when you use our website or services.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Privacy Policy", href: "" },
];

export default function PrivacyPolicyPage() {
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

        <LegalHero data={PRIVACY_HERO} />
        <LegalContent
          sections={PRIVACY_SECTIONS}
          questions={PRIVACY_QUESTIONS}
          commitment={PRIVACY_COMMITMENT}
        />
        <KCNewsletter data={PRIVACY_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
