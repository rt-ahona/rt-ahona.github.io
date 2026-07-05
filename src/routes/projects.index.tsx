import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, FolderGit2, ArrowLeft } from "lucide-react";

import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";
import { TechBadge } from "@/components/tech-badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ramisa Tabassum" },
      {
        name: "description",
        content:
          "Selected engineering projects and case studies by Ramisa Tabassum — full-stack, research, and database systems work.",
      },
      { property: "og:title", content: "Projects — Ramisa Tabassum" },
      {
        property: "og:description",
        content:
          "Case studies across full-stack, research, and database systems engineering.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Filter = "All" | ProjectCategory;

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...PROJECT_CATEGORIES];

  const filtered = useMemo(
    () =>
      filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to overview
            </Link>
            <div className="mt-4 font-mono text-xs uppercase tracking-widest text-primary">
              // Projects · Case Studies
            </div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering projects & write-ups
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              A filterable index of projects with problem framing, architecture
              decisions, and measurable outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {filters.map((f) => {
                const active = f === filter;
                const count =
                  f === "All"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === f).length;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={
                      "filter-chip" + (active ? " filter-chip-active" : "")
                    }
                    aria-pressed={active}
                  >
                    {f}
                    <span className="text-[0.65rem] opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.id}
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="card-surface card-surface-hover group flex flex-col overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="h-3.5 w-3.5 text-primary" />
                        <span>{p.id}</span>
                      </div>
                      <span className="rounded-sm border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">
                        {p.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold leading-snug text-foreground">
                        {p.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-primary">{p.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.tagline}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.slice(0, 5).map((t) => (
                          <TechBadge key={t.name} name={t.name} kind={t.kind} />
                        ))}
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                        <span className="font-mono">{p.timeline}</span>
                        <span className="inline-flex items-center gap-1 text-primary transition-transform group-hover:translate-x-0.5">
                          Read case study
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="card-surface mt-8 p-10 text-center text-sm text-muted-foreground">
                No projects match this filter yet.
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
