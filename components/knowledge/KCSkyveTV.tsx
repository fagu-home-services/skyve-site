import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { KC_TV } from "@/lib/knowledge-data";

export function KCSkyveTV() {
  return (
    <section className="bg-horizon-deep py-14 text-clear">
      <div className="container-skyve">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold">Skyve TV</h2>
            <p className="text-sm text-mist-soft/70">Watch, learn and stay informed.</p>
          </div>
          <Link href="/skyve-tv" className="inline-flex items-center gap-1 text-sm font-semibold text-sky hover:text-clear">
            Visit Skyve TV <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Featured */}
          <div className="relative overflow-hidden rounded-2xl shadow-elevated">
            <Photo src={KC_TV.featured.image} alt={KC_TV.featured.title} className="aspect-[16/9]" />
            <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep via-horizon-deep/20 to-transparent" />
            <button type="button" aria-label="Play" className="absolute left-6 bottom-6 flex h-11 w-11 items-center justify-center rounded-full bg-clear/20 ring-2 ring-clear/60 backdrop-blur-sm">
              <Play className="ml-0.5 h-5 w-5 fill-clear text-clear" />
            </button>
            <p className="absolute bottom-6 left-20 font-serif text-lg font-bold text-clear">
              {KC_TV.featured.title}
            </p>
          </div>

          {/* Video grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {KC_TV.videos.map((v) => (
                <article key={v.title} className="overflow-hidden rounded-xl bg-horizon/60 ring-1 ring-clear/10">
                  <div className="relative">
                    <Photo src={v.image} alt={v.title} className="aspect-video" />
                    <span className="absolute bottom-1.5 right-1.5 rounded bg-horizon-deep/85 px-1.5 py-0.5 text-[10px] font-semibold text-clear">
                      {v.duration}
                    </span>
                  </div>
                  <p className="p-2.5 text-xs font-bold text-clear">{v.title}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-wide text-mist-soft/60">Explore by Topic</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {KC_TV.topics.map((t) => (
                <Link key={t} href="/skyve-tv" className="rounded-full bg-clear/10 px-3 py-1 text-[11px] font-medium text-mist-soft/90 transition-colors hover:bg-clear/20">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
