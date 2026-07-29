import { ChevronDown, Download, User } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center bg-[#f7f8fc] px-8 py-20"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="font-display text-4xl font-bold text-accent-violet md:text-5xl">
            About Me
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            I&apos;m a Computer Science and Data Science student at UC Santa Barbara with a
            passion for machine learning, deep learning, and large-scale data systems.
            Currently working as an Undergraduate Research Assistant at the OPUS Lab, where
            I&apos;m implementing optimization algorithms and benchmarking workflows in Python
            and PyTorch.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            My experience spans from building neural network chess engines to developing
            scalable ML pipelines on Databricks. I&apos;m particularly interested in
            topological deep learning, distributed systems, and applying AI to solve complex
            computational problems.
          </p>
          <a
            href="/abhiresume1115.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-8 py-4 font-bold text-white shadow-lg shadow-accent-violet/20 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-violet/30"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-[20px] border-2 border-accent-violet/20 bg-gradient-to-br from-accent-violet/10 to-accent-purple/10 text-accent-violet/60 shadow-lg transition-transform hover:scale-105 md:h-80 md:w-80">
            <User size={80} strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent-violet transition-transform hover:translate-y-1"
        aria-label="Scroll to Projects section"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
}
