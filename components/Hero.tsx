import { ChevronDown } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-8 py-12 text-center"
    >
      <ParticleCanvas />
      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="animate-fade-in-up font-display text-5xl font-bold text-ink md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-accent-gradient bg-clip-text text-transparent">
            Abhijeet Dutta
          </span>
        </h1>
        <div
          className="animate-fade-in-up mt-4 font-display text-xl font-medium text-accent-violet md:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Computer Science &amp; Data Science @ UCSB
        </div>
        <p
          className="animate-fade-in-up mx-auto mt-4 max-w-xl text-lg text-ink/70"
          style={{ animationDelay: "0.4s" }}
        >
          Building intelligent systems at the intersection of ML, data science, and
          computational research
        </p>
      </div>
      <a
        href="#about"
        className="animate-bounce-arrow absolute bottom-10 left-1/2 -translate-x-1/2 text-accent-violet transition-transform hover:translate-y-1"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
}
