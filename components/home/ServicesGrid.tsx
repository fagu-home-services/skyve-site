import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { SERVICES } from "@/lib/site-data";
import { liveHref } from "@/lib/launch-phase";

export function ServicesGrid() {
  return (
    <section className="bg-mist-soft py-16 lg:py-24">
      <div className="container-skyve">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-bold text-horizon sm:text-4xl">
            Our Roofing &amp; Exterior Services
          </h2>
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent sm:flex"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.label}
              href={liveHref(s.href)}
              className="group relative block overflow-hidden rounded-xl shadow-card"
            >
              <Photo src={s.image} alt={s.label} className="aspect-[16/8]">
                <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep/85 via-horizon-deep/20 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clear/15 backdrop-blur-sm">
                      <Icon name={s.icon} className="h-5 w-5 text-clear" />
                    </span>
                    <span className="font-serif text-lg font-bold text-clear">
                      {s.label}
                    </span>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clear text-horizon transition-colors group-hover:bg-accent group-hover:text-clear">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Photo>
            </Link>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-8 flex items-center justify-center gap-1 text-sm font-semibold text-ridge sm:hidden"
        >
          View All Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
