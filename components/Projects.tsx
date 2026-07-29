"use client";

import { useState } from "react";
import { projects, Project } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-white px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl font-bold text-ink md:text-5xl">
          Featured Projects
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white text-left shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-violet/20"
              >
                <div className="flex h-44 items-center justify-center bg-accent-gradient text-white">
                  <Icon size={48} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-accent-violet">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
