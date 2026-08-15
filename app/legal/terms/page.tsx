import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalContent } from "@/components/legal/LegalContent";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import {
  TERMS_HERO,
  TERMS_SECTIONS,
  TERMS_QUESTIONS,
  TERMS_COMMITMENT,
  TERMS_NEWSLETTER,
} from "@/lib/legal-terms-data";

export const metadata: Metadata = {
  title: "Terms of Service | Skyve Roofing & Exteriors",
  description:
    "Read the Skyve Roofing & Exteriors Terms of Service — the terms that govern your access to and use of our website and roofing and exterior services.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Terms of Service", href: "" },
];

export default function TermsOfServicePage() {
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

        <LegalHero data={TERMS_HERO} />
        <LegalContent
          sections={TERMS_SECTIONS}
          questions={TERMS_QUESTIONS}
          commitment={TERMS_COMMITMENT}
        />
        <KCNewsletter data={TERMS_NEWSLETTER} />
      </main>
      <SiteFooter />
    </>
  );
}
