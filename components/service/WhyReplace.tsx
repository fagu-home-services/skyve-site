import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import type { ServicePage } from "@/lib/service-pages";
import { liveHref } from "@/lib/launch-phase";

export function WhyReplace({ data }: { data: ServicePage }) {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-8 lg:grid-cols-[1.5fr_1.05fr_0.85fr]">
        {/* Intro + benefits */}
        <div>
          <p className="eyebrow text-ridge">{data.whyEyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">
            {data.whyTitle}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-70">
            {data.whyIntro}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {data.benefits.map((b) => (
              <div key={b.title}>
                <Icon name={b.icon} className="h-7 w-7 text-ridge" />
                <h3 className="mt-3 text-sm font-bold text-horizon">{b.title}</h3>
                <p className="mt-1 text-xs leading-snug text-ink-50">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signs card */}
        <div className="rounded-2xl border border-mist bg-mist-soft/60 p-6">
          <h3 className="font-serif text-lg font-bold text-horizon">
            {data.signsTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            {data.signs.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                {s}
              </li>
            ))}
          </ul>
          <Link
            href={liveHref("/services/roof-inspection", "/contact")}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ridge/30 bg-clear px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge"
          >
            Schedule an Inspection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Side note */}
        <div className="overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
          <Photo src={data.sideNote.image} alt="Drone roof inspection" className="aspect-[4/3]" />
          <p className="p-5 text-sm leading-relaxed text-ink-70">{data.sideNote.text}</p>
        </div>
      </div>
    </section>
  );
}
