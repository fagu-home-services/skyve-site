import { User } from "lucide-react";

/* Branded avatar placeholder (initials). Swap for real team/founder photos. */
export function AvatarPlaceholder({
  initials,
  className = "",
  size = "md",
}: {
  initials: string;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-1 overflow-hidden bg-gradient-to-br from-ridge to-horizon-deep ${className}`}
    >
      <span
        className={`font-serif font-bold text-clear/95 ${
          size === "lg" ? "text-5xl" : "text-3xl"
        }`}
      >
        {initials}
      </span>
      <User className={`text-clear/40 ${size === "lg" ? "h-6 w-6" : "h-4 w-4"}`} />
    </div>
  );
}
