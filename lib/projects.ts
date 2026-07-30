import { Database, Network, Swords, Bot, LineChart, LucideIcon } from "lucide-react";

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface Project {
  id: number;
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  timeline: string;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "neural-network-chess-engine",
    icon: Swords,
    title: "Neural Network Chess Engine",
    tagline: "Competitive AI chess with a hybrid classical + neural architecture",
    description:
      "A competitive chess engine achieving 2000+ rated play by integrating classical search algorithms with neural network-based evaluation. This hybrid system combines the strategic depth of traditional minimax algorithms with the pattern recognition capabilities of deep learning. Built a hybrid system interfacing optimized C++ move generation and alpha-beta pruning search with a PyTorch neural network for position evaluation, trained on thousands of expert and self-play games, with board representation optimized using bitboards and Zobrist hashing.",
    features: [
      "Achieved 2000+ rating in competitive play",
      "Efficient move generation using bitboards",
      "Neural network trained on expert game data",
      "Optimized search with alpha-beta pruning",
    ],
    techStack: [
      "Python",
      "C++",
      "PyTorch",
      "Minimax Search",
      "Alpha-Beta Pruning",
      "Bitboards",
      "Zobrist Hashing",
    ],
    githubUrl: "https://github.com/AbhijeetDutta1",
    status: "In Progress",
    timeline: "2024 – Present",
  },
  {
    id: 2,
    slug: "clinical-trial-outcome-prediction",
    icon: Database,
    title: "Clinical Trial Outcome Prediction",
    tagline: "Large-scale ML pipeline on Databricks",
    description:
      "A scalable data lake and machine learning training pipeline built on Databricks to analyze and model clinical trial outcomes across 400,000+ studies. Built a comprehensive data lake using Delta Lake for reliable data storage, applied feature engineering and exploratory analysis using PySpark and Spark SQL to extract patterns, and trained and tracked multiple predictive models with MLflow for experiment management and model versioning.",
    features: [
      "Analyzed 400,000+ clinical trial studies",
      "Scalable distributed processing with PySpark",
      "MLflow experiment tracking and model management",
      "Disease-specific trial success insights",
    ],
    techStack: ["Databricks", "PySpark", "Delta Lake", "MLflow", "Spark SQL", "Python"],
    githubUrl: "https://github.com/AbhijeetDutta1",
    status: "Completed",
    timeline: "2024",
  },
  {
    id: 3,
    slug: "topological-deep-learning-infrastructure",
    icon: Network,
    title: "Topological Deep Learning Infrastructure",
    tagline: "Contributing to TopoBench research",
    description:
      "Implemented infrastructure for temporal hypergraph datasets in PyTorch Geometric, enabling topological deep learning research. Developed a DawnDataset loader for PyTorch Geometric that converts raw timestamped simplices into structured graph representations, with configuration-driven preprocessing pipelines and comprehensive pytest validation for data integrity, integrated with the TopoBench framework for reproducible experiments.",
    features: [
      "Contributed to TopoBench open-source project",
      "Work acknowledged in PMLR white paper (2025)",
      "Comprehensive test suite with pytest",
      "Robust hyperedge incidence construction",
    ],
    techStack: ["Python", "PyTorch Geometric", "Pytest", "Temporal Graphs", "Hypergraphs"],
    githubUrl: "https://github.com/AbhijeetDutta1",
    status: "Completed",
    timeline: "2025",
  },
  // TODO: placeholder — replace with real description, tech stack, links, status, and timeline.
  {
    id: 4,
    slug: "ai-resume-analyzer",
    icon: Bot,
    title: "AI Resume Analyzer",
    tagline: "Placeholder — details coming soon",
    description:
      "Placeholder project entry. Replace this description with a real overview of the AI Resume Analyzer once details are available.",
    features: ["Placeholder feature one", "Placeholder feature two"],
    techStack: ["TBD"],
    githubUrl: "#",
    status: "Planned",
    timeline: "TBD",
    placeholder: true,
  },
  // TODO: placeholder — replace with real description, tech stack, links, status, and timeline.
  {
    id: 5,
    slug: "trading-dashboard",
    icon: LineChart,
    title: "Trading Dashboard",
    tagline: "Placeholder — details coming soon",
    description:
      "Placeholder project entry. Replace this description with a real overview of the Trading Dashboard once details are available.",
    features: ["Placeholder feature one", "Placeholder feature two"],
    techStack: ["TBD"],
    githubUrl: "#",
    status: "Planned",
    timeline: "TBD",
    placeholder: true,
  },
];
