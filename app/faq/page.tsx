import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQContent } from "@/components/faq/FAQContent";
import { FAQ_CTA } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Skyve Roofing & Exteriors",
  description:
    "Answers to common questions about roofing, our process, materials, warranties, financing, and maintenance — from Skyve Roofing & Exteriors in Washington.",
};

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FAQHero />
        <FAQContent />

        {/* CTA band */}
        <section className="bg-clear pb-14">
          <div className="container-skyve">
            <div className="flex flex-col items-start gap-5 rounded-2xl bg-sky-soft/50 p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
              <div>
                <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">{FAQ_CTA.title}</h2>
                <p className="mt-1 text-sm text-ink-70">{FAQ_CTA.desc}</p>
              </div>
              <Link
                href={FAQ_CTA.button.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
              >
                {FAQ_CTA.button.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
