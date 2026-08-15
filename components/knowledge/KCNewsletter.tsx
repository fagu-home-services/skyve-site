import { Mail, Check } from "lucide-react";
import { KC_NEWSLETTER } from "@/lib/knowledge-data";

type NewsletterData = { title: string; desc: string; perks: string[] };

export function KCNewsletter({ data = KC_NEWSLETTER }: { data?: NewsletterData }) {
  return (
    <section className="bg-horizon-deep py-14 text-clear">
      <div className="container-skyve">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clear/10 ring-1 ring-clear/15">
              <Mail className="h-5 w-5 text-sky" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold sm:text-2xl">{data.title}</h2>
              <p className="mt-1 max-w-lg text-sm text-mist-soft/75">{data.desc}</p>
            </div>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-lg border border-clear/15 bg-clear/10 px-4 py-3 text-sm text-clear outline-none placeholder:text-mist-soft/50 focus:border-sky"
            />
            <button type="button" className="shrink-0 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-clear/10 pt-6">
          {data.perks.map((p) => (
            <span key={p} className="flex items-center gap-1.5 text-xs text-mist-soft/80">
              <Check className="h-3.5 w-3.5 text-accent" /> {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
