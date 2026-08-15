import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SDHero } from "@/components/stories/detail/SDHero";
import { SDTabs } from "@/components/stories/detail/SDTabs";
import { SDOverview } from "@/components/stories/detail/SDOverview";
import { SDRail } from "@/components/stories/detail/SDRail";
import { STORIES, storySlug } from "@/lib/customer-stories-data";
import { STORY_DETAIL } from "@/lib/story-detail-data";

export const metadata: Metadata = {
  title: `${STORY_DETAIL.title} — Customer Story`,
  description:
    "A full Skyve customer story — the challenge, our solution, and the result, with drone photos, timeline, cost breakdown, materials, crew, and documents.",
};

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: storySlug(s.title) }));
}

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Customer Stories", href: "/reviews" },
  { label: "Story Detail", href: "" },
];

export default function StoryDetailPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-mist-soft/40">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-mist-soft/70">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-clear">{c.label}</Link>
                ) : (
                  <span className="text-clear">{c.label}</span>
                )}
                {i < CRUMBS.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        </div>

        <SDHero />
        <SDTabs />

        <div className="container-skyve py-10">
          <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
            <SDOverview />
            <SDRail />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
