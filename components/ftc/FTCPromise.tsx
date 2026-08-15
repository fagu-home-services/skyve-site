import { CircleCheck } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { FTC_PROMISE, FTC_CHOICES } from "@/lib/ftc-data";

export function FTCPromise() {
  return (
    <section className="bg-clear py-10 lg:py-12">
      <div className="container-skyve grid gap-6 lg:grid-cols-2">
        {/* Our Promise to You */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-8">
          <h2 className="font-serif text-xl font-bold text-horizon">{FTC_PROMISE.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-70">{FTC_PROMISE.text}</p>

          <ul className="mt-5 space-y-2.5">
            {FTC_PROMISE.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink-70">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {p}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-mist pt-4">
            <p className="font-serif text-2xl italic text-horizon">{FTC_PROMISE.signature}</p>
            <p className="mt-1 text-xs text-ink-50">{FTC_PROMISE.signatureRole}</p>
          </div>
        </div>

        {/* Your Choices */}
        <div className="relative overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
          <Photo src={FTC_CHOICES.image} seed="ftc-choices" alt="Skyve service truck" className="absolute inset-y-0 right-0 hidden w-48 lg:block" />
          <div className="relative p-6 lg:p-8 lg:pr-52">
            <h2 className="font-serif text-xl font-bold text-horizon">{FTC_CHOICES.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-70">{FTC_CHOICES.text}</p>

            <ul className="mt-5 space-y-3">
              {FTC_CHOICES.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink-70">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
