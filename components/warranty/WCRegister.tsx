import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { WC_REGISTER, WC_CHECK } from "@/lib/warranty-data";

export function WCRegister() {
  return (
    <section className="bg-clear py-10 lg:py-14">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Register */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon">{WC_REGISTER.title}</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-70">{WC_REGISTER.desc}</p>

          <div className="mt-6 grid items-end gap-6 sm:grid-cols-[1fr_auto]">
            <ul className="space-y-3">
              {WC_REGISTER.points.map((p) => (
                <li key={p.label} className="flex items-center gap-3 text-sm text-ink-70">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={p.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  {p.label}
                </li>
              ))}
            </ul>
            <Photo src={WC_REGISTER.image} seed="warranty-register" alt="Washington home protected by Skyve" className="h-32 w-full rounded-xl sm:w-44" />
          </div>

          <Link
            href={WC_REGISTER.button.href}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-horizon px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-horizon-deep"
          >
            {WC_REGISTER.button.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Check */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon">{WC_CHECK.title}</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-70">{WC_CHECK.desc}</p>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="text-xs font-semibold text-horizon">{WC_CHECK.emailLabel}</span>
              <input
                type="email"
                placeholder={WC_CHECK.emailPlaceholder}
                className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-horizon">{WC_CHECK.idLabel}</span>
              <input
                type="text"
                placeholder={WC_CHECK.idPlaceholder}
                className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
              />
            </label>
            <a href="#" className="inline-block text-xs font-semibold text-ridge hover:text-accent">
              {WC_CHECK.helpLink}
            </a>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-horizon px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-horizon-deep"
            >
              {WC_CHECK.button} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
