import { Briefcase, FileText, FolderKanban, Newspaper } from "lucide-react";
import Wallpaper from "@/components/desktop/Wallpaper";
import WelcomeCard from "@/components/desktop/WelcomeCard";
import DesktopIcon from "@/components/desktop/DesktopIcon";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
      <Wallpaper />

      {/* Desktop layout: 3x3 grid, card centered, icons in the four corners.
          Collapses to a stacked card + 2x2 icon grid below the md breakpoint. */}
      <div className="grid w-full max-w-4xl grid-cols-2 grid-rows-[auto_auto_auto] items-center gap-8 md:grid-cols-3 md:grid-rows-3 md:gap-6">
        <div className="order-2 md:order-none md:col-start-1 md:row-start-1">
          <DesktopIcon href="/projects" label="Projects" icon={FolderKanban} />
        </div>
        <div className="order-3 md:order-none md:col-start-3 md:row-start-1">
          <DesktopIcon href="/experience" label="Experience" icon={Briefcase} />
        </div>

        <div className="order-1 col-span-2 md:order-none md:col-span-1 md:col-start-2 md:row-start-2">
          <WelcomeCard />
        </div>

        <div className="order-4 md:order-none md:col-start-1 md:row-start-3">
          <DesktopIcon href="/resume" label="Resume" icon={FileText} />
        </div>
        <div className="order-5 md:order-none md:col-start-3 md:row-start-3">
          <DesktopIcon href="/blog" label="Blog" icon={Newspaper} />
        </div>
      </div>
    </main>
  );
}
