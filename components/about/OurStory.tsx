import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { STORY_PARAGRAPHS, FOUNDER } from "@/lib/about-data";

export function OurStory() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-12 lg:grid-cols-2">
        {/* Story */}
        <div>
          <p className="eyebrow text-ridge">Our Story</p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-horizon sm:text-4xl">
            A Better Roofing Experience Starts Here
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-70">
            {STORY_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-lg border border-ridge/30 bg-clear px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            View Our Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Founder card */}
        <div className="grid overflow-hidden rounded-2xl border border-mist bg-clear shadow-card sm:grid-cols-[1fr_1.1fr]">
          <AvatarPlaceholder
            initials={FOUNDER.initials}
            size="lg"
            className="aspect-[4/5] w-full sm:aspect-auto sm:h-full"
          />
          <div className="p-7">
            <p className="eyebrow text-ridge">{FOUNDER.role}</p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-horizon">
              {FOUNDER.name}
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-70">
              {FOUNDER.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-5 font-serif text-xl italic text-horizon/80">
              {FOUNDER.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
