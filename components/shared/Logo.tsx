import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

const RATIO = 1840 / 472; // horizontal logo aspect ratio

export function Logo({
  variant = "color",
  height = 40,
  className = "",
}: {
  variant?: "color" | "mono";
  height?: number;
  className?: string;
}) {
  const src =
    variant === "mono"
      ? "/logo/skyve-logo-horizontal-mono-400.png"
      : "/logo/skyve-logo-horizontal-color-400.png";

  const width = Math.round(height * RATIO);

  return (
    <Link
      href="/"
      aria-label={`${COMPANY.name} — home`}
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={src}
        alt={COMPANY.name}
        height={height}
        width={width}
        priority
        unoptimized
        className="max-w-none"
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </Link>
  );
}
