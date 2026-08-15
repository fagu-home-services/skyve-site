import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumb({
  items,
  variant = "dark",
}: {
  items: Crumb[];
  variant?: "dark" | "light";
}) {
  const base = variant === "light" ? "text-sky-soft/70" : "text-ink-50";
  const link = variant === "light" ? "hover:text-clear" : "hover:text-accent";
  const current = variant === "light" ? "text-clear" : "text-ink-90";

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-sm ${base}`}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.href && !last ? (
              <Link href={item.href} className={`transition-colors ${link}`}>
                {item.label}
              </Link>
            ) : (
              <span className={last ? `font-medium ${current}` : ""}>{item.label}</span>
            )}
            {!last && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
          </span>
        );
      })}
    </nav>
  );
}
