import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { HUB_SERVICES } from "@/lib/services-data";
import { liveHref } from "@/lib/launch-phase";

export function ServiceHubGrid() {
  return (
    <section className="bg-clear py-16 lg:py-24">
      <div className="container-skyve">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-ridge">
          What We Do
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          All Services. One Trusted Team.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink-50">
          Explore our full range of roofing and exterior services designed to
          protect, enhance, and add value to your home.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_SERVICES.map((s) => (
            <div
              key={s.label}
              className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="relative">
                <Photo src={s.image} alt={s.label} className="aspect-[16/10]" />
                <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-ridge shadow-card">
                  <Icon name={s.icon} className="h-5 w-5 text-clear" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 pt-8">
                <h3 className="font-serif text-lg font-bold text-horizon">
                  {s.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-50">
                  {s.desc}
                </p>
                <Link
                  href={liveHref(s.href, "/contact")}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
