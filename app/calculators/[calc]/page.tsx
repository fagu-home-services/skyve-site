import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CalcHero } from "@/components/calculator/CalcHero";
import { CalcForm } from "@/components/calculator/CalcForm";
import { CalcResults } from "@/components/calculator/CalcResults";
import { CalcExtras } from "@/components/calculator/CalcExtras";
import { CalcBottom } from "@/components/calculator/CalcBottom";
import { KCNewsletter } from "@/components/knowledge/KCNewsletter";
import { CALC_PAGES, getCalc } from "@/lib/calculator-data";

export function generateStaticParams() {
  return Object.keys(CALC_PAGES).map((calc) => ({ calc }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ calc: string }>;
}): Promise<Metadata> {
  const { calc } = await params;
  const data = getCalc(calc);
  return data ? { title: data.metaTitle, description: data.metaDesc } : { title: "Calculator" };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ calc: string }>;
}) {
  const { calc } = await params;
  const data = getCalc(calc);
  if (!data) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-clear pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-ink-50">
            <Link href="/" className="hover:text-ridge">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/learn" className="hover:text-ridge">Knowledge Center</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/learn" className="hover:text-ridge">Tools & Calculators</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-horizon">{data.titleLines.join(" ")}</span>
          </div>
        </div>

        <CalcHero data={data} />

        <section className="bg-clear py-8 lg:py-10">
          <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <CalcForm data={data} />
            <CalcResults data={data} />
          </div>
        </section>

        <CalcExtras data={data} />
        <CalcBottom data={data} />
        <KCNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
