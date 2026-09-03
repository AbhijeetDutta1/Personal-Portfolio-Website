export interface Experience {
  id: number;
  company: string;
  position: string;
  dates: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "GoGaucho",
    position: "Software Engineer",
    dates: "May 2026 – Present",
    technologies: ["React", "Node.js", "REST APIs"],
    responsibilities: [
      "Develop and maintain a mobile app with 10,000+ daily active users across React/Node.js and REST APIs.",
      "Building an ML-powered routing tool that classifies help requests and predicts the correct office to direct users.",
    ],
    achievements: [
      "Incorporated fuzzy search to enable typo-tolerant querying, reducing failed searches by 30%.",
    ],
  },
  {
    id: 2,
    company: "Tekliv IT Solutions",
    position: "Software Engineer Intern",
    dates: "June 2026 – Aug 2026",
    technologies: ["GCP", "BigQuery", "Azure DevOps", "Kubernetes", "GoFlow2"],
    responsibilities: [
      "Automated customer ticket removal via a GCP BigQuery ETL pipeline.",
      "Designed a CI/CD pipeline linking Azure Data Factory and Jira Cloud via Azure DevOps and Schemachange.",
      "Built an end-to-end network telemetry pipeline with GoFlow2, Kubernetes, and GCP Pub/Sub to ingest, format, and dedupe logs into GCS, powering Looker analytics.",
    ],
    achievements: [
      "Improved ETL processing speed by 20%.",
      "Cut pipeline failures by 60% through the telemetry pipeline overhaul.",
    ],
  },
  {
    id: 3,
    company: "UC Santa Barbara",
    position: "Undergraduate Teaching Assistant",
    dates: "March 2026 – June 2026",
    technologies: ["Docker", "C++"],
    responsibilities: [
      "Built Docker-based autograding infrastructure that automated lab evaluation.",
      "Mentored 100+ undergraduates in C++ threading, data structures, and algorithmic problem solving.",
    ],
    achievements: ["Cut grading time by 50% with the autograding infrastructure."],
  },
  {
    id: 4,
    company: "OPUS Lab, UC Santa Barbara",
    position: "Machine Learning Research Assistant",
    dates: "Sept. 2025 – May 2026",
    technologies: ["Python", "PyTorch", "Optimization Algorithms"],
    responsibilities: [
      "Built Python/PyTorch prototypes simulating PAOA components for experiments on stochastic binary networks.",
      "Developed visualization tools to analyze energy distributions and variational parameterization effects.",
    ],
    achievements: [
      "Benchmarked PAOA on spin-glass optimization tasks against Simulated Annealing and QAOA baselines.",
    ],
  },
];
