import { cn } from "@/lib/utils";
import type { TechKind } from "@/data/projects";

const KIND_CLASS: Record<TechKind, string> = {
  language: "badge-lang",
  framework: "badge-framework",
  database: "badge-database",
  tool: "badge-tool",
  concept: "badge-concept",
};

export function TechBadge({
  name,
  kind,
  className,
}: {
  name: string;
  kind: TechKind | "cloud";
  className?: string;
}) {
  const cls =
    kind === "cloud" ? "badge-cloud" : KIND_CLASS[kind as TechKind] ?? "";
  return (
    <span className={cn("badge-tech", cls, className)}>
      <span className="badge-dot" />
      {name}
    </span>
  );
}
