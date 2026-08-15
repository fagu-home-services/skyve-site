import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { ARTICLES } from "@/lib/site-data";

export function LearnArticles() {
  return (
    <section className="bg-mist-soft py-16 lg:py-24">
      <div className="container-skyve">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-bold text-horizon sm:text-4xl">
            Learn Before You Buy
          </h2>
          <Link
            href="/learn"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            Visit Knowledge Center <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated"
            >
              <Photo src={a.image} alt={a.title} className="aspect-[16/9]">
                <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-clear">
                  {a.category}
                </span>
              </Photo>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-bold leading-snug text-horizon">
                  {a.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ridge">
                  Read Article{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
