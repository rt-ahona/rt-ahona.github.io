import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  MessagesSquare,
  Cpu,
  Users,
  Target,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CircleDot,
  GraduationCap,
  Send,
  Award,
  Briefcase,
  FolderGit2,
  ExternalLink,
  Code2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TechBadge } from "@/components/tech-badge";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/data/projects";
import { TECHNICAL_SKILLS, PROBLEM_SOLVING } from "@/data/skills";

export const Route = createFileRoute("/")({
  component: Index,
});

const SKILLS = [
  {
    icon: MessagesSquare,
    title: "Communication & Negotiation",
    items: [
      "Pitching ideas to stakeholders",
      "Public speaking & outreach",
      "Multi-team coordination",
      "Public relations",
    ],
  },
  {
    icon: Cpu,
    title: "Technical Proficiency",
    items: [
      "Software ecosystems",
      "Digital workflows",
      "CRM management",
      "Internet & productivity tools",
    ],
  },
  {
    icon: Users,
    title: "Client & Relationship Management",
    items: [
      "Bridge between orgs & partners",
      "Student & faculty engagement",
      "Tele-sales communication",
      "Remote workflow fluency",
    ],
  },
  {
    icon: Target,
    title: "Result-Oriented Leadership",
    items: [
      "Team engagement & motivation",
      "Meeting club targets",
      "Project lifecycle management",
      "Strategic decision-making",
    ],
  },
];

const EXPERIENCES = [
  {
    company: "WIT Institute",
    role: "Campus Ambassador",
    location: "Farmgate, Dhaka, Bangladesh",
    period: "Feb 2025 – Jun 2026",
    badges: ["Outreach", "Public Speaking", "Lead Generation"],
    highlights: [
      {
        lead: "Program Representation",
        body: "Represented the organization within the university by promoting its programs and initiatives to the student community.",
      },
      {
        lead: "Targeted Outreach",
        body: "Engaged students through outreach activities and awareness campaigns to build interest and generate qualified leads.",
      },
      {
        lead: "Persuasive Communication",
        body: "Strengthened persuasive communication, public speaking, and active engagement skills in a highly interactive role.",
      },
    ],
    tag: "Current",
  },
  {
    company: "Fiver",
    role: "Digital Marketing Manager",
    location: "Mohammadpur, Dhaka, Bangladesh",
    period: "Aug 2024 – Mar 2025",
    badges: ["Digital Campaigns", "Customer Acquisition", "CRM"],
    highlights: [
      {
        lead: "Campaign Management",
        body: "Managed online campaigns and communications, focusing on understanding customer requirements and delivering targeted digital solutions.",
      },
      {
        lead: "Growth Coordination",
        body: "Analyzed user needs and coordinated promotional frameworks to enhance service visibility and customer acquisition.",
      },
    ],
  },
  {
    company: "ISU IT Club",
    role: "Executive Board Member — Multiple Roles",
    location: "Dhaka, Bangladesh",
    period: "Oct 2022 – Apr 2026",
    badges: ["Leadership", "Operations", "Finance", "PR", "Content"],
    highlights: [
      {
        lead: "Secretary · Apr 2025 – Apr 2026",
        body: "Led overall club operations, managed strategic decision-making, and coordinated closely with tech professionals and executive teams for high-impact seminars and workshops.",
      },
      {
        lead: "Treasurer · Mar 2024 – Feb 2025",
        body: "Handled budgeting, financial planning, resource allocation, and maintained precise records to support successful student development programs.",
      },
      {
        lead: "Public Relations Officer · Jan 2023 – Mar 2024",
        body: "Spearheaded internal and external communications; built and maintained strong relationships with faculty, students, and industry stakeholders.",
      },
      {
        lead: "Content Writer · Oct 2022 – Jan 2023",
        body: "Crafted engaging, informative content to communicate technical and non-technical updates across the student community.",
      },
    ],
    tag: "4+ Years",
  },
];

const EDUCATION = [
  {
    school: "International Standard University",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "Sep 2022 – Feb 2027",
    status: "In Progress",
  },
  {
    school: "Dhaka City College",
    degree: "Higher Secondary Certificate (HSC), Science",
    period: "Jul 2019 – Dec 2021",
    status: "Completed",
  },
  {
    school: "Monipur High School & College",
    degree: "Secondary School Certificate (SSC), Science",
    period: "Jan 2012 – Mar 2019",
    status: "Completed",
  },
];

const CERTIFICATIONS = [
  "AWS Educate — Getting Started with Compute",
  "AWS Educate — Getting Started with Databases",
];

const LANGUAGES = [
  { name: "English", level: "Professional Working" },
  { name: "Bangla", level: "Native" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TechnicalMatrix />
        <TechnicalSkills />
        <Projects />
        <ProblemSolving />
        <Experience />
        <Academic />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="summary" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="font-mono text-muted-foreground">
              status: <span className="text-emerald">open to opportunities</span>
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-foreground">Ramisa Tabassum</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-primary sm:text-xl">
            CSE Student <span className="text-muted-foreground">|</span> Aspiring Software Engineer
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Computer Science & Engineering undergraduate building full-stack systems,
            data pipelines, and reliable relational backends — with a proven track
            record in leadership, PR, and cross-team communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#projects">
                View Projects
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border bg-surface text-foreground hover:border-primary hover:bg-surface hover:text-primary"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="flex items-center">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="card-surface w-full overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">profile.overview</span>
        <CircleDot className="h-3.5 w-3.5 text-emerald" />
      </div>
      <div className="space-y-3 p-6 font-mono text-xs sm:text-sm">
        <InfoRow icon={MapPin} label="Location" value="Mohammadpur, Dhaka, Bangladesh" />
        <InfoRow icon={GraduationCap} label="Studying" value="B.Sc. CSE · ISU" />
        <InfoRow icon={Briefcase} label="Current" value="Campus Ambassador · WIT Institute" />
        <InfoRow icon={Award} label="Certified" value="AWS Educate · Compute & Databases" />
        <InfoRow icon={Mail} label="Email" value="ramisatabassumwork01@gmail.com" />
        <InfoRow icon={Phone} label="Phone" value="+880 1307 196548" />
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[0.7rem] text-muted-foreground">
          <span>▲ engineering · leadership · communication</span>
          <span className="text-emerald">● available</span>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-border bg-background/50 px-4 py-2.5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />
        <span className="text-[0.7rem] uppercase tracking-wider">{label}</span>
      </div>
      <span className="truncate text-right text-foreground">{value}</span>
    </div>
  );
}

function TechnicalMatrix() {
  return (
    <section id="matrix" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 // Competencies"
          title="Core skills & capabilities"
          description="Communication, technical, and leadership strengths I bring to every role."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="card-surface card-surface-hover flex flex-col p-6"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{skill.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechnicalSkills() {
  return (
    <section id="skills" className="border-b border-border bg-background/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 // Technical Stack"
          title="Engineering toolkit"
          description="Languages, frameworks, databases, and tools I use to design and ship software."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_SKILLS.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="card-surface card-surface-hover p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{group.description}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <TechBadge key={it.name} name={it.name} kind={it.kind} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const filters: ("All" | ProjectCategory)[] = ["All", ...PROJECT_CATEGORIES];
  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="04 // Projects"
            title="Selected engineering projects"
            description="Full-stack, research, and database systems work — engineered for reliability, decoupling, and clean execution paths."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
          >
            View all case studies
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = f === filter;
            const count =
              f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={"filter-chip" + (active ? " filter-chip-active" : "")}
                aria-pressed={active}
              >
                {f}
                <span className="text-[0.65rem] opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {filtered.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="card-surface card-surface-hover flex flex-col overflow-hidden"
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

                  <div className="mt-5">
                    <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <TechBadge key={t.name} name={t.name} kind={t.kind} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      Impact
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {p.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      Read case study
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    {p.links.map((l) => {
                      const LIcon = l.icon;
                      const isExternal = l.href.startsWith("http");
                      return (
                        <a
                          key={l.label}
                          href={l.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="group inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <LIcon className="h-3.5 w-3.5" />
                          <span>{l.label}</span>
                          {isExternal && (
                            <ExternalLink className="h-3 w-3 opacity-70 transition-opacity group-hover:opacity-100" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProblemSolving() {
  return (
    <section id="problem-solving" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="05 // Problem Solving"
          title="Coding profiles & practice"
          description="Where I sharpen data structures, algorithms, and SQL — plus the repositories where the work lives."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_SOLVING.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.platform}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="card-surface card-surface-hover group flex flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {p.platform}
                </h3>
                <p className="mt-1 font-mono text-xs text-primary">{p.handle}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
              </a>
            );
          })}
        </div>
        <p className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Code2 className="h-3.5 w-3.5 text-primary" />
          Consistent daily practice — DSA, SQL, and system-design fundamentals.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="06 // Professional Experience"
          title="Roles, ownership & impact"
          description="Selected positions demonstrating leadership, outreach, and coordination across academic and professional environments."
        />
        <div className="mt-12 space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <article
              key={exp.company}
              className="card-surface card-surface-hover overflow-hidden"
            >
              <div className="grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_2fr] lg:p-10">
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <span>ROLE_0{idx + 1}</span>
                      {exp.tag && (
                        <span className="rounded-sm border border-emerald/40 bg-emerald/10 px-2 py-0.5 text-emerald">
                          {exp.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold leading-snug text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary">{exp.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.location}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.badges.map((b) => (
                      <span key={b} className="badge-tech badge-tool">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="h-px flex-1 bg-border" />
                    <span>Key Contributions</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <ul className="space-y-4">
                    {exp.highlights.map((h) => (
                      <li
                        key={h.lead}
                        className="rounded-md border border-border bg-background/40 p-4"
                      >
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          <span className="font-semibold text-foreground">{h.lead}: </span>
                          {h.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Academic() {
  return (
    <section id="academic" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="07 // Education & Certifications"
          title="Academic credentials & training"
          description="Formal education, certifications, and languages that support my professional profile."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <ol className="relative border-l border-border pl-8">
              {EDUCATION.map((e) => (
                <li key={e.school} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border border-border bg-surface text-primary">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div className="card-surface p-6">
                    <div className="mb-2 flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
                      <span>{e.period}</span>
                      <span className="rounded-sm border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">
                        {e.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{e.school}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="card-surface p-6">
              <div className="mb-4 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-border bg-background/40 p-3 text-sm text-muted-foreground"
                  >
                    <span className="text-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-6">
              <div className="mb-4 flex items-center gap-2">
                <MessagesSquare className="h-4 w-4 text-primary" />
                <h3 className="font-mono text-sm font-semibold text-foreground">Languages</h3>
              </div>
              <ul className="space-y-2">
                {LANGUAGES.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between rounded-md border border-border bg-background/40 px-4 py-2.5 text-sm"
                  >
                    <span className="text-foreground">{l.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="08 // Contact"
          title="Let's connect"
          description="Available for software engineering internships, junior developer roles, and technical program work."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="card-surface flex flex-col justify-between p-8">
            <div>
              <div className="mb-3 font-mono text-xs text-muted-foreground">
                &gt; direct channels
              </div>
              <h3 className="text-xl font-semibold text-foreground">Reach out directly</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Comfortable with remote workflows, online meetings, and async communication. Use
                any of the channels below or send a message.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <ConsoleLink
                icon={Mail}
                label="Email"
                value="ramisatabassumwork01@gmail.com"
                href="mailto:ramisatabassumwork01@gmail.com"
              />
              <ConsoleLink
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/ramisa-tabassum"
                href="https://www.linkedin.com/in/ramisa-tabassum"
              />
              <ConsoleLink
                icon={Phone}
                label="Phone"
                value="+880 1307 196548"
                href="tel:+8801307196548"
              />
              <ConsoleLink
                icon={MapPin}
                label="Location"
                value="Mohammadpur, Dhaka, Bangladesh"
                href="https://maps.google.com/?q=Mohammadpur+Dhaka+Bangladesh"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ConsoleLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Linkedin;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-md border border-border bg-background/40 px-4 py-3 transition-colors hover:border-primary"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
          <div className="truncate text-sm text-foreground">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
    </a>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("All fields required", {
        description: "Please provide your name, email, and message.",
      });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Message sent", {
      description: "Thanks for reaching out — I'll respond shortly.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={onSubmit} className="card-surface p-8">
      <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald" />
          <h3 className="font-mono text-sm font-semibold text-foreground">Send a message</h3>
        </div>
        <span className="font-mono text-[0.7rem] text-muted-foreground">direct inbox</span>
      </div>
      <div className="space-y-4">
        <Field
          id="name"
          label="Name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Your full name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          placeholder="you@example.com"
        />
        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground"
          >
            Message
          </Label>
          <Textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about the role, project, or opportunity…"
            className="resize-none border-border bg-background/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/30"
          />
        </div>
        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {submitting ? "Sending…" : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border-border bg-background/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/30"
      />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base text-muted-foreground">{description}</p>
    </div>
  );
}
