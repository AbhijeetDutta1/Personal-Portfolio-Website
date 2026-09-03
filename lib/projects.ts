import { Database, Network, Swords, Bot, LineChart, Cpu, LucideIcon } from "lucide-react";

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
      "A competitive chess engine integrating classical search algorithms with neural network-based evaluation. Built a C++ engine with minimax search and alpha-beta pruning for efficient legal move generation, then integrated a PyTorch neural network for board evaluation, combining classical search with learned heuristics. Trained via supervised learning on expert games and self-play RL, using bitboards and Zobrist hashing for speed.",
    features: [
      "Minimax search with alpha-beta pruning for efficient move generation",
      "PyTorch neural network for board evaluation",
      "Trained via supervised learning and self-play RL",
      "Bitboards and Zobrist hashing for fast board representation",
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
    title: "Temporal Hypergraph Data Pipeline for Topological Deep Learning",
    tagline: "Contributing to TopoBench research",
    description:
      "Built a PyTorch Geometric dataset loader for temporal hypergraphs, achieving 33% faster data loading over baseline. Developed config-driven preprocessing pipelines and a pytest validation suite for hyperedge and data integrity, integrated into the open-source TopoBench library. Work published in a co-authored white paper at PMLR TAG-DS 2025.",
    features: [
      "33% faster data loading over baseline",
      "Integrated into open-source TopoBench library",
      "Co-authored white paper at PMLR TAG-DS 2025",
      "Config-driven preprocessing with pytest validation suite",
    ],
    techStack: ["Python", "PyTorch Geometric", "Pytest", "Temporal Graphs", "Hypergraphs"],
    githubUrl: "https://github.com/AbhijeetDutta1",
    status: "Completed",
    timeline: "2025",
  },
  {
    id: 4,
    slug: "unix-like-operating-system-kernel",
    icon: Cpu,
    title: "Unix-Like Operating System Kernel",
    tagline: "Preemptive multitasking kernel for a simulated MIPS architecture",
    description:
      "Built a preemptive multitasking kernel in C for a simulated MIPS architecture with PCBs, context switching, timer interrupts, and memory partitioning. Designed IPC via pipes with file descriptor tables, reference counting, and synchronized FIFO buffering for concurrent data exchange. Developed kernel subsystems for process management and system calls using semaphores, atomic I/O, and multi-process shell execution.",
    features: [
      "Preemptive multitasking with PCBs and context switching",
      "Timer interrupts and memory partitioning",
      "IPC via pipes with file descriptor tables and reference counting",
      "Multi-process shell execution with semaphores and atomic I/O",
    ],
    techStack: ["C", "MIPS", "Semaphores", "IPC"],
    githubUrl: "https://github.com/AbhijeetDutta1",
    status: "Completed",
    timeline: "2025",
  },
  // TODO: placeholder — replace with real description, tech stack, links, status, and timeline.
  {
    id: 5,
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
    id: 6,
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
