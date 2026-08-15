import { ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/company";

/* Honest reputation section for a new company.
   No fabricated review counts or testimonials — verified reviews will
   populate here as real jobs are completed and the Google profile is verified. */
export function Reviews() {
  return (
    <section id="reviews" className="bg-horizon-deep py-16 text-clear lg:py-24">
      <div className="container-skyve grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-accent">New name. Not new to roofing.</p>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            We&apos;d rather earn your trust than fake it.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sky-soft/90">
            Skyve is a new company, so we won&apos;t pretend to have hundreds of
            reviews. What we have is two decades of roofs behind us and one
            promise: do your job so well you&apos;ll <em>want</em> to tell your
            neighbors. As we complete work across {COMPANY.serviceArea},
            verified reviews will live right here — real names, real homes,
            nothing inflated.
          </p>
          <p className="mt-4 text-sm text-sky-soft/60">
            Our Google Business profile is currently being verified.
          </p>
        </div>

        <div className="rounded-2xl border border-clear/15 bg-clear/[0.06] p-8 text-center">
          <ShieldCheck className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-3 font-serif text-4xl font-extrabold">
            {COMPANY.warrantyYears} Years
          </p>
          <p className="text-sm text-sky-soft/70">
            Workmanship warranty on every roof
          </p>
          <p className="mt-5 text-sm leading-relaxed text-sky-soft/80">
            Backed in writing. If our work fails, we come back and make it right
            — the guarantee that matters most while our reviews are still
            growing.
          </p>
        </div>
      </div>
    </section>
  );
}
