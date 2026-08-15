import { Play, Mail, ArrowRight } from "lucide-react";

export function TVSubscribe() {
  return (
    <section className="bg-horizon-deep pb-16">
      <div className="container-skyve">
        <div className="grid gap-6 rounded-2xl border border-clear/10 bg-horizon/50 p-8 lg:grid-cols-2 lg:p-10">
          {/* YouTube */}
          <div className="flex items-center gap-5 lg:border-r lg:border-clear/10 lg:pr-8">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-danger shadow-card">
              <Play className="ml-0.5 h-7 w-7 fill-clear text-clear" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold text-clear">Subscribe to Skyve on YouTube</h2>
              <p className="mt-1 text-sm text-mist-soft/70">
                New videos every week with tips, projects, and insights from the field.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-clear/10 px-5 py-2.5 text-sm font-semibold text-clear ring-1 ring-clear/20 transition-colors hover:bg-clear/20"
              >
                Subscribe Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center gap-5 lg:pl-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-clear/10 ring-1 ring-clear/15">
              <Mail className="h-7 w-7 text-sky" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-serif text-xl font-bold text-clear">Stay Updated</h2>
              <p className="mt-1 text-sm text-mist-soft/70">
                Get notified when we release new videos, tips, and special content.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-lg border border-clear/15 bg-clear/10 px-4 py-2.5 text-sm text-clear outline-none placeholder:text-mist-soft/50 focus:border-sky"
                />
                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
