import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackHome() {
  return (
    <Link
      href="/"
      className="fixed left-6 top-6 z-40 flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-60"
    >
      <ArrowLeft size={18} />
      Home
    </Link>
  );
}
