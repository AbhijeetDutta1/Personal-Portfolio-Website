import { experience } from "@/lib/experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative max-w-2xl">
      {experience.map((entry, index) => (
        <div key={entry.id} className="relative pb-16 pl-10 last:pb-0">
          {index !== experience.length - 1 && (
            <span className="absolute left-[5px] top-3 h-full w-px bg-ink/15" />
          )}
          <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent-violet" />

          <p className="text-sm font-medium uppercase tracking-wide text-accent-violet">
            {entry.dates}
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink">{entry.position}</h2>
          <p className="mt-1 text-lg text-ink/60">{entry.company}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {entry.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink/50">
            Responsibilities
          </h3>
          <ul className="mt-3 space-y-2">
            {entry.responsibilities.map((item) => (
              <li key={item} className="relative pl-5 leading-relaxed text-ink/80">
                <span className="absolute left-0 text-accent-violet">—</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink/50">
            Achievements
          </h3>
          <ul className="mt-3 space-y-2">
            {entry.achievements.map((item) => (
              <li key={item} className="relative pl-5 leading-relaxed text-ink/80">
                <span className="absolute left-0 text-accent-violet">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
