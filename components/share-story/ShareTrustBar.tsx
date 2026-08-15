import { Icon } from "@/components/shared/Icon";
import { SHARE_TRUST } from "@/lib/share-story-data";

export function ShareTrustBar() {
  return (
    <section className="bg-clear pb-16">
      <div className="container-skyve grid gap-8 border-t border-mist pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {SHARE_TRUST.map((t) => (
          <div key={t.title} className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
              <Icon name={t.icon} className="h-5 w-5 text-ridge" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{t.title}</p>
              <p className="mt-0.5 text-xs leading-snug text-ink-50">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
