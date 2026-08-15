import Link from "next/link";
import { resolveImg } from "@/components/shared/Photo";

type Action = { label: string; href: string; icon?: React.ReactNode };

export function CtaBand({
  title,
  subtitle,
  primary,
  secondary,
  image,
  variant = "dark",
}: {
  title: string;
  subtitle: string;
  primary: Action;
  secondary?: Action;
  image?: string;
  variant?: "dark" | "light";
}) {
  const light = variant === "light";

  return (
    <section
      className={`relative overflow-hidden ${light ? "bg-mist-soft" : "bg-horizon-deep"}`}
    >
      {!light && image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolveImg(image, title)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      )}
      {!light && (
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep to-horizon-deep/60" />
      )}
      <div className="container-skyve relative flex flex-col items-start justify-between gap-6 py-12 lg:flex-row lg:items-center">
        <div className={light ? "text-horizon" : "text-clear"}>
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">{title}</h2>
          <p
            className={`mt-2 max-w-lg text-sm ${light ? "text-ink-70" : "text-sky-soft/80"}`}
          >
            {subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
          >
            {primary.label}
            {primary.icon}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-semibold transition-colors ${
                light
                  ? "border-ridge/30 text-ridge hover:border-ridge hover:bg-clear"
                  : "border-clear/40 bg-clear/5 text-clear backdrop-blur-sm hover:bg-clear/10"
              }`}
            >
              {secondary.label}
              {secondary.icon}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
