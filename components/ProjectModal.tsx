"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-8 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[20px] bg-white shadow-2xl">
        <div className="relative rounded-t-[20px] bg-accent-gradient px-8 pb-8 pt-12 text-white">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
          >
            <X size={20} />
          </button>
          <Icon size={48} className="mb-4" />
          <h2 className="font-display text-3xl font-bold">{project.title}</h2>
          <p className="mt-2 text-white/90">{project.subtitle}</p>
        </div>

        <div className="space-y-8 px-8 py-8">
          <section>
            <h3 className="font-display text-xl font-semibold text-accent-violet">Overview</h3>
            <p className="mt-3 leading-relaxed text-ink/80">{project.description}</p>
          </section>

          <section>
            <h3 className="font-display text-xl font-semibold text-accent-violet">
              The Challenge
            </h3>
            <p className="mt-3 leading-relaxed text-ink/80">{project.challenge}</p>
          </section>

          <section>
            <h3 className="font-display text-xl font-semibold text-accent-violet">Solution</h3>
            <p className="mt-3 leading-relaxed text-ink/80">{project.solution}</p>
          </section>

          <section>
            <h3 className="font-display text-xl font-semibold text-accent-violet">
              Key Results
            </h3>
            <ul className="mt-3 space-y-2">
              {project.results.map((result) => (
                <li key={result} className="relative pl-6 text-ink/80">
                  <span className="absolute left-0 font-bold text-accent-violet">▹</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-display text-xl font-semibold text-accent-violet">
              Technologies Used
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-violet/10 px-4 py-1.5 text-sm text-accent-violet"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-display text-xl font-semibold text-accent-violet">
              Project Links
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <LinkIcon size={18} />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
