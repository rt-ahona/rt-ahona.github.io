import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const NAV_SECTIONS = [
  { href: "#summary", label: "Profile" },
  { href: "#matrix", label: "Competencies" },
  { href: "#skills", label: "Tech Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#problem-solving", label: "Problem Solving" },
  { href: "#experience", label: "Experience" },
  { href: "#academic", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const NAV_ROUTES = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "All Projects" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-surface font-mono text-sm font-bold text-primary">
            RT
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            Ramisa Tabassum
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {onHome
            ? NAV_SECTIONS.slice(0, 6).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </a>
              ))
            : NAV_ROUTES.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  activeProps={{ className: "text-foreground bg-surface" }}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {r.label}
                </Link>
              ))}
          {onHome && (
            <Link
              to="/projects"
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              activeProps={{ className: "text-foreground bg-surface" }}
            >
              All Projects
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={onHome ? "#contact" : "/#contact"}
            className="hidden rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20 md:inline-flex"
          >
            Get in Touch
          </a>

          {/* Mobile sidebar trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-foreground md:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-l border-border bg-background p-0"
            >
              <SheetHeader className="border-b border-border p-4 text-left">
                <SheetTitle className="font-mono text-sm text-muted-foreground">
                  // navigation
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 p-3">
                <div className="px-2 pb-1 pt-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  Pages
                </div>
                {NAV_ROUTES.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    onClick={() => setOpen(false)}
                    activeProps={{
                      className:
                        "bg-surface text-foreground border-primary/40",
                    }}
                    className="rounded-md border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {r.label}
                  </Link>
                ))}

                {onHome && (
                  <>
                    <div className="px-2 pb-1 pt-4 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      On this page
                    </div>
                    {NAV_SECTIONS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    ))}
                  </>
                )}

                <a
                  href={onHome ? "#contact" : "/#contact"}
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  Get in Touch
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
