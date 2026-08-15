import { Star } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";

const FEATURES = [
  { icon: "chart", title: "Track Your Projects", desc: "Stay up to date with real-time project progress." },
  { icon: "document", title: "Access Important Documents", desc: "View contracts, warranties, invoices, and more." },
  { icon: "shield", title: "Secure & Reliable", desc: "Your information is safe with enterprise-grade security." },
];

export function LoginPanel() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-horizon-deep px-8 py-12 text-clear lg:px-12">
      <Photo src="" seed="login-hero" alt="" className="absolute inset-0 h-full w-full opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-br from-horizon-deep via-horizon-deep/85 to-horizon-deep/50" />

      <div className="relative max-w-md">
        <p className="text-sm font-semibold text-sky">Welcome Back!</p>
        <h2 className="mt-2 font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Sign in to your Skyve Portal
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-mist-soft/85">
          Access your projects, documents, warranties, and everything you need in one place.
        </p>

        <ul className="mt-8 space-y-5">
          {FEATURES.map((f) => (
            <li key={f.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clear/10 ring-1 ring-clear/15">
                <Icon name={f.icon} className="h-5 w-5 text-sky" />
              </span>
              <div>
                <p className="text-sm font-bold text-clear">{f.title}</p>
                <p className="text-[11px] leading-snug text-mist-soft/75">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Testimonial */}
        <figure className="mt-10 rounded-2xl bg-horizon-deep/70 p-5 ring-1 ring-clear/10 backdrop-blur-sm">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="mt-3 text-sm leading-relaxed text-clear">
            &ldquo;Skyve made our roof replacement so easy from start to finish. Highly recommend!&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-xs font-semibold text-mist-soft/80">— Sarah M., Kirkland, WA</figcaption>
        </figure>
      </div>
    </div>
  );
}
