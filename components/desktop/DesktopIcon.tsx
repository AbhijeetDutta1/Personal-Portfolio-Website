import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export default function DesktopIcon({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-2 justify-self-center"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1 group-hover:bg-white/25 group-hover:shadow-lg group-hover:shadow-black/20">
        <Icon size={28} />
      </span>
      <span className="rounded-md px-2 py-0.5 text-sm font-medium text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
        {label}
      </span>
    </Link>
  );
}
