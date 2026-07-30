"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, Project } from "@/lib/projects";

export default function ProjectsExplorer() {
  const [selected, setSelected] = useState<Project>(projects[0]);

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <nav className="flex flex-col gap-1">
        {projects.map((project) => {
          const isActive = project.id === selected.id;
          return (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className={`border-l-2 px-4 py-3 text-left text-lg font-medium transition-colors ${
                isActive
                  ? "border-accent-violet text-ink"
                  : "border-transparent text-ink/40 hover:text-ink/70"
              }`}
            >
              {project.title}
            </button>
          );
        })}
      </nav>

      <div key={selected.id} className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-wide text-accent-violet">
          {selected.status} · {selected.timeline}
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-ink">{selected.title}</h2>
        <p className="mt-1 text-ink/60">{selected.tagline}</p>

        <p className="mt-6 leading-relaxed text-ink/80">{selected.description}</p>

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink/50">
          Features
        </h3>
        <ul className="mt-3 space-y-2">
          {selected.features.map((feature) => (
            <li key={feature} className="relative pl-5 text-ink/80">
              <span className="absolute left-0 text-accent-violet">—</span>
              {feature}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink/50">
          Tech Stack
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {selected.githubUrl && (
            <a
              href={selected.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {selected.demoUrl && (
            <a
              href={selected.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>

        {selected.placeholder && (
          <p className="mt-6 text-sm text-ink/40">
            Placeholder entry — real details coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
