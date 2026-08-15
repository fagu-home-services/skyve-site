import { Check } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { CH_COMMITMENT, CH_STANDARDS } from "@/lib/cert-hub-data";

export function CHStandards() {
  return (
    <section className="bg-clear py-10 lg:py-12">
      <div className="container-skyve grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_1.35fr]">
        {/* Commitment image card */}
        <div className="relative overflow-hidden rounded-2xl">
          <Photo src={CH_COMMITMENT.image} seed="cert-commitment" alt="Skyve crew on the roof" className="h-full min-h-56 w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep/95 via-horizon-deep/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="font-serif text-lg font-bold text-clear">{CH_COMMITMENT.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-mist-soft/85">{CH_COMMITMENT.desc}</p>
          </div>
        </div>

        {/* Standards checklist */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card lg:p-8">
          <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
            {CH_STANDARDS.title}
          </h2>
          <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {CH_STANDARDS.points.map((p) => (
              <div key={p} className="flex items-start gap-2.5 text-sm text-ink-70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
