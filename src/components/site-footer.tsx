export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ramisa Tabassum · Dhaka, Bangladesh
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
          open to opportunities
        </div>
      </div>
    </footer>
  );
}
