import type { Metadata } from "next";
import { Logo } from "@/components/shared/Logo";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteMapHub } from "@/components/dev/SiteMapHub";

export const metadata: Metadata = {
  title: "Site Map & Review Hub — Internal",
  description: "Clickable map of every page on the Skyve site, split into Launch v1 vs Phase 2, with a per-page review checklist.",
  robots: { index: false, follow: false },
};

export default function AllPagesIndex() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-mist bg-clear/95 backdrop-blur">
        <div className="container-skyve flex h-[72px] items-center justify-between">
          <Logo variant="color" height={34} />
          <span className="text-sm font-semibold text-ink-50">Site Map &amp; Review Hub</span>
        </div>
      </header>

      <main className="bg-mist-soft/50 py-12 lg:py-16">
        <div className="container-skyve">
          <p className="eyebrow text-accent">Internal · Content Review</p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-horizon sm:text-4xl">Site Map &amp; Review Hub</h1>
          <p className="mt-3 max-w-2xl text-ink-70">
            Every route on the site, split into the <span className="font-semibold text-ridge">Launch v1</span> surface
            (review these now) and <span className="font-semibold text-ink-50">Phase 2</span> (deferred, hidden from
            nav &amp; search). Click any card to open the page in a new tab, then tick the checkbox to mark its content
            reviewed — progress is saved in your browser. The <span className="font-semibold text-accent">📷 badge</span> shows
            image slots per page.
          </p>
          <div className="mt-8">
            <SiteMapHub />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
