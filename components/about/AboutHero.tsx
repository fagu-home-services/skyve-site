import { Play } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ABOUT_HERO_IMAGE } from "@/lib/about-data";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ABOUT_HERO_IMAGE}
        alt="Skyve Roofing home and crew in Washington"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative pt-24 pb-16 lg:pt-28">
        <div className="pb-6">
          <Breadcrumb
            variant="light"
            items={[{ label: "Home", href: "/" }, { label: "About Skyve" }]}
          />
        </div>

        <div className="max-w-2xl text-clear">
          <p className="eyebrow text-sky">About Skyve</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
            Built on Trust.
            <br />
            Driven by Purpose.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-sky-soft/90">
            Skyve Roofing &amp; Exteriors was founded to raise the standard of
            roofing in Washington — combining technology, transparency, and elite
            craftsmanship to deliver results that last.
          </p>

          <button className="group mt-8 flex items-center gap-3 text-sm font-semibold text-clear">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-clear/40 bg-clear/10 transition-colors group-hover:bg-accent">
              <Play className="h-4 w-4 translate-x-0.5 fill-clear text-clear" />
            </span>
            Our Story in 90 Seconds
          </button>
        </div>
      </div>
    </section>
  );
}
