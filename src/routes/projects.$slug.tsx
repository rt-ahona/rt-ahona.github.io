import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Users,
  Activity,
  Layers as LayersIcon,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

import { getProjectBySlug, PROJECTS, type Project } from "@/data/projects";
import { TechBadge } from "@/components/tech-badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Ramisa Tabassum" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — Case Study` },
        { name: "description", content: project.tagline },
        { property: "og:title", content: `${project.name} — Case Study` },
        { property: "og:description", content: project.tagline },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">
          // 404 · Project
        </div>
        <h1 className="mt-3 text-3xl font-bold">Project not found</h1>
        <p className="mt-3 text-muted-foreground">
          That case study doesn't exist. Browse all available projects instead.
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Browse all projects
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const Icon = project.icon;
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All projects
            </Link>

            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="rounded-sm border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">
                {project.id}
              </span>
              <span className="rounded-sm border border-border bg-surface px-2 py-0.5">
                {project.category}
              </span>
              <span className="rounded-sm border border-emerald/40 bg-emerald/10 px-2 py-0.5 text-emerald">
                {project.status}
              </span>
            </div>

            <div className="mt-6 flex items-start gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-2 font-mono text-sm text-primary">{project.role}</p>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>

            {/* Meta grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MetaCard icon={Calendar} label="Timeline" value={project.timeline} />
              <MetaCard icon={Users} label="Team" value={project.teamSize} />
              <MetaCard icon={Activity} label="Status" value={project.status} />
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.links.map((l) => {
                const LIcon = l.icon;
                const external = l.href.startsWith("http");
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <LIcon className="h-3.5 w-3.5" />
                    {l.label}
                    {external && <ExternalLink className="h-3 w-3 opacity-70" />}
                  </a>
                );
              })}
            </div>

            {/* Stack */}
            <div className="mt-8">
              <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <TechBadge key={t.name} name={t.name} kind={t.kind} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="card-surface p-6">
                  <div className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                  <div className="mt-2 text-3xl font-bold text-primary">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Block
              eyebrow="01 // Problem"
              title="What needed solving"
              icon={AlertTriangle}
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </Block>
            <Block
              eyebrow="02 // Solution"
              title="Approach & rationale"
              icon={Sparkles}
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </Block>
          </div>
        </section>

        {/* Architecture */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <Block eyebrow="03 // Architecture" title="System design" icon={LayersIcon}>
              <ul className="space-y-3">
                {project.architecture.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 rounded-md border border-border bg-background/40 p-4 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <Block eyebrow="04 // Features" title="What it does" icon={Sparkles}>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((f) => (
                  <div key={f.title} className="card-surface p-5">
                    <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                  </div>
                ))}
              </div>
            </Block>
          </div>
        </section>

        {/* Challenges */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <Block
              eyebrow="05 // Challenges"
              title="Hard problems & fixes"
              icon={AlertTriangle}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {project.challenges.map((c) => (
                  <div key={c.title} className="card-surface p-5">
                    <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                  </div>
                ))}
              </div>
            </Block>
          </div>
        </section>

        {/* Outcomes + Learnings */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Block eyebrow="06 // Outcomes" title="Impact" icon={CheckCircle2}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block eyebrow="07 // Learnings" title="What I took away" icon={Lightbulb}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.learnings.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </section>

        {/* Next projects */}
        {otherProjects.length > 0 && (
          <section>
            <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
              <div className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">
                // Continue exploring
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="card-surface card-surface-hover group flex items-center justify-between gap-4 p-5"
                  >
                    <div>
                      <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                        {p.category}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground">
                        {p.name}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function MetaCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="card-surface flex items-center gap-3 p-4">
      <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Block({
  eyebrow,
  title,
  icon: Icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon: typeof Sparkles;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <div>
          <div className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
            {eyebrow}
          </div>
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  );
}
