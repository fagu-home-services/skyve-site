import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { TEAM } from "@/lib/about-data";
import { liveHref } from "@/lib/launch-phase";

export function OurTeam() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-10 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="eyebrow text-ridge">Our Team</p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-horizon sm:text-4xl">
            The People Behind Every Great Roof
          </h2>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card"
              >
                <AvatarPlaceholder
                  initials={m.initials}
                  className="aspect-square w-full"
                />
                <div className="p-4">
                  <p className="text-sm font-bold text-horizon">{m.name}</p>
                  <p className="text-xs font-medium text-ridge">{m.role}</p>
                  <p className="mt-2 text-xs leading-snug text-ink-50">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={liveHref("/careers", "/contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 bg-clear px-6 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge"
            >
              Join Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
