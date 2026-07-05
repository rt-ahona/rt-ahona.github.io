import {
  Database,
  FlaskConical,
  Github,
  LineChart,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory = "Full-Stack" | "Research" | "Databases";

export type TechKind =
  | "language"
  | "framework"
  | "database"
  | "tool"
  | "concept";

export type TechBadge = { name: string; kind: TechKind };

export type ProjectLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  slug: string;
  icon: LucideIcon;
  name: string;
  role: string;
  category: ProjectCategory;
  tagline: string;
  stack: TechBadge[];
  outcomes: string[];
  links: ProjectLink[];
  tag: string;

  // Case study fields
  timeline: string;
  teamSize: string;
  status: "Shipped" | "Research" | "Academic";
  problem: string;
  solution: string;
  architecture: string[];
  features: { title: string; body: string }[];
  challenges: { title: string; body: string }[];
  learnings: string[];
  metrics: { label: string; value: string }[];
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Full-Stack",
  "Research",
  "Databases",
];

export const PROJECTS: Project[] = [
  {
    id: "PRJ_01",
    slug: "market-intelligence-terminal",
    icon: LineChart,
    name: "Full-Stack Market Intelligence Terminal & Async REST API",
    role: "Backend Software Engineer",
    category: "Full-Stack",
    tagline:
      "End-to-end analytics platform that ingests, persists, and streams transactional index data feeds through a fully decoupled service layer.",
    stack: [
      { name: "Python", kind: "language" },
      { name: "FastAPI", kind: "framework" },
      { name: "Streamlit", kind: "framework" },
      { name: "Uvicorn", kind: "tool" },
      { name: "SQLite", kind: "database" },
      { name: "REST API", kind: "concept" },
      { name: "Git", kind: "tool" },
    ],
    outcomes: [
      "Decoupled data processing from the presentation layer via a dedicated microservice routing tier.",
      "Hardened persistence against structural tampering using parameterized SQL execution patterns.",
      "Stabilized real-time asset trajectory plots with custom state-normalization scaling on the client UI.",
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/rt-ahona/Data_Pipeline_Project",
        icon: Github,
      },
    ],
    tag: "Full-Stack",
    timeline: "Q4 2024 – Q1 2025",
    teamSize: "Solo build",
    status: "Shipped",
    problem:
      "Financial index feeds arrive as high-frequency, weakly typed streams. A single monolithic script mixing ingestion, storage, and rendering made every change risky and every crash total. The goal was to serve live index intelligence to a UI without coupling the UI to the data engine.",
    solution:
      "Split the system into three isolated tiers — an async FastAPI ingestion/query service, a SQLite persistence layer with parameterized writes, and a Streamlit terminal client — communicating only through a versioned REST contract.",
    architecture: [
      "Ingestion worker normalizes vendor payloads and pushes to the API tier over an internal channel.",
      "FastAPI service exposes typed REST endpoints for historical queries and paginated live feeds.",
      "SQLite layer uses parameterized statements + schema constraints for tamper-resistant persistence.",
      "Streamlit client polls REST endpoints and renders normalized trajectory charts client-side.",
    ],
    features: [
      {
        title: "Async REST service tier",
        body: "FastAPI + Uvicorn workers serving typed request/response schemas, isolating I/O from UI render cycles.",
      },
      {
        title: "Parameterized persistence",
        body: "All writes go through prepared statements — no string concatenation, no injection surface.",
      },
      {
        title: "Live trajectory rendering",
        body: "Client normalizes incoming values to a stable range so plot scale doesn't jitter across polls.",
      },
      {
        title: "Fully decoupled UI",
        body: "Streamlit terminal knows only the REST contract; the data engine can be swapped without UI edits.",
      },
    ],
    challenges: [
      {
        title: "Presentation-layer coupling",
        body: "Original prototype rendered directly from the DB. Rewrote around a REST boundary so the UI became a pure consumer.",
      },
      {
        title: "Chart-scale drift",
        body: "Raw values caused axis jitter on every poll. Implemented client-side normalization to stabilize the view.",
      },
    ],
    learnings: [
      "Clean service boundaries pay compounding dividends — every later feature slotted in without touching the UI.",
      "Parameterized SQL is non-negotiable, even in single-user tools.",
      "Async I/O is worth adopting from day one for anything touching a network.",
    ],
    metrics: [
      { label: "Service tiers", value: "3" },
      { label: "REST endpoints", value: "8+" },
      { label: "SQL injection surface", value: "0" },
    ],
  },
  {
    id: "PRJ_02",
    slug: "ml-dataset-frameworks",
    icon: FlaskConical,
    name: "ML Dataset Formatting & Behavioral Processing Frameworks",
    role: "Lead Undergraduate Researcher",
    category: "Research",
    tagline:
      "CSE undergraduate thesis: a programmatic framework that parses, sanitizes, tokenizes, and validates large structured text matrices for downstream ML classification pipelines.",
    stack: [
      { name: "Python", kind: "language" },
      { name: "Regex", kind: "concept" },
      { name: "Pattern Matching", kind: "concept" },
      { name: "Matrix Analysis", kind: "concept" },
      { name: "Data Validation", kind: "concept" },
    ],
    outcomes: [
      "Built high-throughput regex routines that scrub structural noise and formatting drift from raw text feeds.",
      "Formulated state-consistency profiles to catch sequence anomalies before execution handoff.",
      "Authored complete technical documentation mapping schemas, validation baselines, and workflows.",
    ],
    links: [{ label: "Available on request", href: "#contact", icon: Mail }],
    tag: "Research",
    timeline: "2024 – 2025 (Thesis)",
    teamSize: "Lead researcher + advisor",
    status: "Research",
    problem:
      "ML classifiers downstream of this pipeline were failing on subtle formatting drift — inconsistent delimiters, hidden whitespace, malformed sequences. A generic cleaner wasn't enough; the input surface itself needed a formal contract.",
    solution:
      "Designed a layered preprocessing framework: regex-based structural scrubbing, tokenization with pattern rules, then a state-consistency validator that rejects sequences before they reach model training.",
    architecture: [
      "Layer 1 — Structural scrub: regex passes remove noise and normalize delimiters.",
      "Layer 2 — Tokenization: pattern-matched tokens with typed classification.",
      "Layer 3 — Validation: state-consistency profiles reject anomalous sequences with actionable errors.",
    ],
    features: [
      {
        title: "High-throughput regex engine",
        body: "Compiled pattern sets tuned for large text matrices, prioritizing correctness under drift.",
      },
      {
        title: "State-consistency profiles",
        body: "Formal rules describing valid sequence shapes; violations surface with row-level diagnostics.",
      },
      {
        title: "Reproducible documentation",
        body: "Schemas, validation baselines, and workflow diagrams shipped alongside the code.",
      },
    ],
    challenges: [
      {
        title: "Silent formatting drift",
        body: "Bad rows were reaching the model. Added strict validation to fail loudly and early.",
      },
      {
        title: "Generalizing regex rules",
        body: "Iterated pattern sets across sample corpora to avoid overfitting to a single dataset shape.",
      },
    ],
    learnings: [
      "Preprocessing quality is often the single biggest lever for downstream ML accuracy.",
      "Fail-fast validation with actionable error messages saves days of debugging.",
    ],
    metrics: [
      { label: "Pipeline layers", value: "3" },
      { label: "Validation rules", value: "12+" },
      { label: "Docs coverage", value: "100%" },
    ],
  },
  {
    id: "PRJ_03",
    slug: "database-systems-implementations",
    icon: Database,
    name: "Database Systems & Web Management Implementations",
    role: "Database System Developer",
    category: "Databases",
    tagline:
      "Design and transactional optimization of relational storage frameworks focused on data durability and execution reliability across continuous application cycles.",
    stack: [
      { name: "SQL", kind: "language" },
      { name: "MySQL", kind: "database" },
      { name: "Relational Schema Design", kind: "concept" },
      { name: "Query Optimization", kind: "concept" },
      { name: "Git", kind: "tool" },
    ],
    outcomes: [
      "Configured robust MySQL schemas to maintain clean, accurate operational data attributes.",
      "Refactored query bottlenecks and transaction blocks to improve dataset reliability.",
      "Managed codebase variations and deployment sprints via Git with zero repository regression.",
    ],
    links: [{ label: "Academic archive", href: "#contact", icon: Mail }],
    tag: "Databases",
    timeline: "2023 – 2024",
    teamSize: "Coursework + solo capstone",
    status: "Academic",
    problem:
      "Ad-hoc schemas were leaking inconsistent state into web applications: partial updates, unbounded joins, and slow reads under real transactional load.",
    solution:
      "Redesigned relational schemas with explicit constraints, rewrote hot queries around proper indexing, and audited transaction boundaries to eliminate partial-commit surfaces.",
    architecture: [
      "Normalized schemas with enforced constraints for referential integrity.",
      "Index-driven query plans on the read-heavy paths.",
      "Explicit transaction boundaries wrapping any multi-statement write.",
    ],
    features: [
      {
        title: "Constraint-first schemas",
        body: "Primary/foreign keys and check constraints as the first line of correctness.",
      },
      {
        title: "Query refactoring",
        body: "Rewrote joins and subqueries around usable indexes; measured before/after.",
      },
      {
        title: "Clean Git history",
        body: "Feature-branch workflow with reviewed merges — no regressions across sprints.",
      },
    ],
    challenges: [
      {
        title: "Query bottlenecks",
        body: "Full scans on hot tables. Fixed by pairing indexes with rewritten predicates.",
      },
      {
        title: "Transaction correctness",
        body: "Partial commits on failure. Wrapped write paths in explicit transactions with rollback.",
      },
    ],
    learnings: [
      "Schema design decisions outlast almost every other technical choice in a system.",
      "Indexes only help if the query is written to use them.",
    ],
    metrics: [
      { label: "Schemas designed", value: "6+" },
      { label: "Hot queries tuned", value: "10+" },
      { label: "Regressions", value: "0" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
