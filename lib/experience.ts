export interface Experience {
  id: number;
  company: string;
  position: string;
  dates: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
}

// TODO: confirm exact start date and bullet wording with real details from the resume.
export const experience: Experience[] = [
  {
    id: 1,
    company: "OPUS Lab, UC Santa Barbara",
    position: "Undergraduate Research Assistant",
    dates: "2025 – Present",
    technologies: ["Python", "PyTorch", "Optimization Algorithms"],
    responsibilities: [
      "Implement optimization algorithms for research experiments led by the lab.",
      "Build and maintain benchmarking workflows to evaluate algorithm performance.",
      "Collaborate with researchers to translate experimental designs into working code.",
    ],
    achievements: [
      "Delivered reusable benchmarking infrastructure adopted across multiple lab projects.",
      "Contributed optimization implementations used in ongoing research experiments.",
    ],
  },
];
