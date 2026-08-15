import { Check, Search } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { FTC_ABOUT, FTC_EARN } from "@/lib/ftc-data";

export function FTCAbout() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-12">
      <div className="container-skyve grid gap-6 lg:grid-cols-2">
        {/* What is FTC Disclosure */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-8">
          <h2 className="font-serif text-xl font-bold text-horizon">{FTC_ABOUT.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-70">{FTC_ABOUT.text}</p>

          {/* Stylized FTC illustration */}
          <div className="mt-6 flex items-center justify-center rounded-xl bg-sky-soft/60 p-8">
            <div className="relative">
              <div className="rounded-xl border-2 border-ridge/30 bg-clear px-8 py-6 shadow-card">
                <p className="text-center font-serif text-3xl font-extrabold tracking-tight text-ridge">FTC</p>
                <div className="mt-3 space-y-2">
                  {[0, 1].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="flex h-4 w-4 items-center justify-center rounded bg-success/20">
                        <Check className="h-3 w-3 text-success" />
                      </span>
                      <span className="h-2 w-24 rounded-full bg-mist" />
                    </div>
                  ))}
                </div>
              </div>
              <span className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-ridge shadow-elevated">
                <Search className="h-6 w-6 text-clear" />
              </span>
            </div>
          </div>
        </div>

        {/* How We May Earn Compensation */}
        <div className="relative overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
          <Photo src={FTC_EARN.image} seed="ftc-earn" alt="Skyve installer at work" className="absolute inset-y-0 right-0 hidden w-40 lg:block" />
          <div className="relative p-6 lg:p-8 lg:pr-44">
            <h2 className="font-serif text-xl font-bold text-horizon">{FTC_EARN.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-70">{FTC_EARN.intro}</p>

            <div className="mt-5 space-y-4">
              {FTC_EARN.items.map((it) => (
                <div key={it.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={it.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-horizon">{it.title}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-ink-70">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
