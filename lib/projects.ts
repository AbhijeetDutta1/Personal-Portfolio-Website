import { Database, Network, Swords, Github, ExternalLink, LucideIcon } from "lucide-react";

export interface ProjectLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 1,
    icon: Swords,
    title: "Neural Network Chess Engine",
    subtitle: "Competitive AI Chess with Hybrid Architecture",
    summary:
      "Built a competitive chess engine achieving 2000+ rated play using hybrid classical search algorithms and neural network evaluation.",
    tags: ["Python", "C++", "PyTorch", "Minimax"],
    description:
      "A competitive chess engine achieving 2000+ rated play by integrating classical search algorithms with neural network-based evaluation. This hybrid system combines the strategic depth of traditional minimax algorithms with the pattern recognition capabilities of deep learning.",
    challenge:
      "Creating a strong chess engine requires balancing computational efficiency with strategic depth. Classical engines excel at tactical calculation but struggle with positional understanding, while pure neural approaches can be computationally expensive and less precise in tactical positions.",
    solution:
      "Built a hybrid system interfacing optimized C++ move generation and alpha-beta pruning search with a PyTorch neural network for position evaluation. Trained the network on thousands of expert and self-play games. Optimized board representation using bitboards and Zobrist hashing for fast move generation.",
    results: [
      "Achieved 2000+ rating in competitive play",
      "Efficient move generation using bitboards",
      "Neural network trained on expert game data",
      "Optimized search with alpha-beta pruning",
    ],
    technologies: [
      "Python",
      "C++",
      "PyTorch",
      "Minimax Search",
      "Alpha-Beta Pruning",
      "Bitboards",
      "Zobrist Hashing",
    ],
    links: [{ name: "GitHub", url: "https://github.com/AbhijeetDutta1", icon: Github }],
  },
  {
    id: 2,
    icon: Database,
    title: "Clinical Trial Outcome Prediction",
    subtitle: "Large-Scale ML Pipeline on Databricks",
    summary:
      "Built a scalable data lake and ML pipeline on Databricks to analyze 400K+ clinical trials with PySpark and MLflow.",
    tags: ["Databricks", "PySpark", "MLflow", "Delta Lake"],
    description:
      "A scalable data lake and machine learning training pipeline built on Databricks to analyze and model clinical trial outcomes across 400,000+ studies. This system enables researchers to identify patterns in trial success rates and make data-driven predictions.",
    challenge:
      "Clinical trial data is complex, heterogeneous, and massive in scale. Traditional analysis methods struggle with the volume of data and the need to extract meaningful patterns across diverse disease areas and trial phases while maintaining data integrity and reproducibility.",
    solution:
      "Built a comprehensive data lake using Delta Lake for reliable data storage. Applied feature engineering and exploratory analysis using PySpark and Spark SQL to extract patterns. Trained and tracked multiple predictive models with MLflow for experiment management and model versioning.",
    results: [
      "Analyzed 400,000+ clinical trial studies",
      "Scalable distributed processing with PySpark",
      "MLflow experiment tracking and model management",
      "Disease-specific trial success insights",
    ],
    technologies: ["Databricks", "PySpark", "Delta Lake", "MLflow", "Spark SQL", "Python"],
    links: [{ name: "GitHub", url: "https://github.com/AbhijeetDutta1", icon: Github }],
  },
  {
    id: 3,
    icon: Network,
    title: "Topological Deep Learning Infrastructure",
    subtitle: "Contributing to TopoBench Research",
    summary:
      "Implemented PyTorch Geometric dataset loader for DAWN temporal hypergraph dataset. Contributed to TopoBench project with PMLR acknowledgment.",
    tags: ["Python", "PyTorch Geometric", "Pytest"],
    description:
      "Implemented infrastructure for temporal hypergraph datasets in PyTorch Geometric, enabling topological deep learning research. This work supports the analysis of complex relationships in temporal data using advanced graph neural network architectures.",
    challenge:
      "Temporal hypergraph datasets require specialized handling to preserve complex multi-way relationships over time. Standard graph processing tools don't adequately support hyperedge structures and temporal dynamics, making reproducible research difficult.",
    solution:
      "Developed DawnDataset loader for PyTorch Geometric that converts raw timestamped simplices into structured graph representations. Built configuration-driven preprocessing pipelines with comprehensive pytest validation for data integrity. Integrated with TopoBench framework for reproducible experiments.",
    results: [
      "Contributed to TopoBench open-source project",
      "Work acknowledged in PMLR white paper (2025)",
      "Comprehensive test suite with pytest",
      "Robust hyperedge incidence construction",
    ],
    technologies: ["Python", "PyTorch Geometric", "Pytest", "Temporal Graphs", "Hypergraphs"],
    links: [
      { name: "GitHub", url: "https://github.com/AbhijeetDutta1", icon: Github },
      { name: "TopoBench", url: "#", icon: ExternalLink },
    ],
  },
];
