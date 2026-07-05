import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, n as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as ChartLine, a as MessagesSquare, b as ArrowUpRight, c as Linkedin, d as FolderGit2, f as FlaskConical, g as CircleDot, h as Cpu, i as Phone, l as GraduationCap, m as Database, n as Target, o as MapPin, p as ExternalLink, r as Send, s as Mail, t as Users, u as Github, v as Briefcase, y as Award } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D1IUdENb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var NAV_ITEMS = [
	{
		href: "#summary",
		label: "Profile"
	},
	{
		href: "#matrix",
		label: "Competencies"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#academic",
		label: "Education"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var SKILLS = [
	{
		icon: MessagesSquare,
		title: "Communication & Negotiation",
		items: [
			"Pitching ideas to stakeholders",
			"Public speaking & outreach",
			"Multi-team coordination",
			"Public relations"
		]
	},
	{
		icon: Cpu,
		title: "Technical Proficiency",
		items: [
			"Software ecosystems",
			"Digital workflows",
			"CRM management",
			"Internet & productivity tools"
		]
	},
	{
		icon: Users,
		title: "Client & Relationship Management",
		items: [
			"Bridge between orgs & partners",
			"Student & faculty engagement",
			"Tele-sales communication",
			"Remote workflow fluency"
		]
	},
	{
		icon: Target,
		title: "Result-Oriented Leadership",
		items: [
			"Team engagement & motivation",
			"Meeting club targets",
			"Project lifecycle management",
			"Strategic decision-making"
		]
	}
];
var EXPERIENCES = [
	{
		company: "WIT Institute",
		role: "Campus Ambassador",
		location: "Farmgate, Dhaka, Bangladesh",
		period: "Feb 2025 – Jun 2026",
		badges: [
			"Outreach",
			"Public Speaking",
			"Lead Generation"
		],
		highlights: [
			{
				lead: "Program Representation",
				body: "Represented the organization within the university by promoting its programs and initiatives to the student community."
			},
			{
				lead: "Targeted Outreach",
				body: "Engaged students through outreach activities and awareness campaigns to build interest and generate qualified leads."
			},
			{
				lead: "Persuasive Communication",
				body: "Strengthened persuasive communication, public speaking, and active engagement skills in a highly interactive role."
			}
		],
		tag: "Current"
	},
	{
		company: "Fiver",
		role: "Digital Marketing Manager",
		location: "Mohammadpur, Dhaka, Bangladesh",
		period: "Aug 2024 – Mar 2025",
		badges: [
			"Digital Campaigns",
			"Customer Acquisition",
			"CRM"
		],
		highlights: [{
			lead: "Campaign Management",
			body: "Managed online campaigns and communications, focusing on understanding customer requirements and delivering targeted digital solutions."
		}, {
			lead: "Growth Coordination",
			body: "Analyzed user needs and coordinated promotional frameworks to enhance service visibility and customer acquisition."
		}]
	},
	{
		company: "ISU IT Club",
		role: "Executive Board Member — Multiple Roles",
		location: "Dhaka, Bangladesh",
		period: "Oct 2022 – Apr 2026",
		badges: [
			"Leadership",
			"Operations",
			"Finance",
			"PR",
			"Content"
		],
		highlights: [
			{
				lead: "Secretary · Apr 2025 – Apr 2026",
				body: "Led overall club operations, managed strategic decision-making, and coordinated closely with tech professionals and executive teams for high-impact seminars and workshops."
			},
			{
				lead: "Treasurer · Mar 2024 – Feb 2025",
				body: "Handled budgeting, financial planning, resource allocation, and maintained precise records to support successful student development programs."
			},
			{
				lead: "Public Relations Officer · Jan 2023 – Mar 2024",
				body: "Spearheaded internal and external communications; built and maintained strong relationships with faculty, students, and industry stakeholders."
			},
			{
				lead: "Content Writer · Oct 2022 – Jan 2023",
				body: "Crafted engaging, informative content to communicate technical and non-technical updates across the student community."
			}
		],
		tag: "4+ Years"
	}
];
var EDUCATION = [
	{
		school: "International Standard University",
		degree: "B.Sc. in Computer Science and Engineering",
		period: "Sep 2022 – Feb 2027",
		status: "In Progress"
	},
	{
		school: "Dhaka City College",
		degree: "Higher Secondary Certificate (HSC), Science",
		period: "Jul 2019 – Dec 2021",
		status: "Completed"
	},
	{
		school: "Monipur High School & College",
		degree: "Secondary School Certificate (SSC), Science",
		period: "Jan 2012 – Mar 2019",
		status: "Completed"
	}
];
var CERTIFICATIONS = ["AWS Educate — Getting Started with Compute", "AWS Educate — Getting Started with Databases"];
var LANGUAGES = [{
	name: "English",
	level: "Professional Working"
}, {
	name: "Bangla",
	level: "Native"
}];
var PROJECTS = [
	{
		id: "PRJ_01",
		icon: ChartLine,
		name: "Full-Stack Market Intelligence Terminal & Async REST API",
		role: "Backend Software Engineer",
		tagline: "End-to-end analytics platform that ingests, persists, and streams transactional index data feeds through a fully decoupled service layer.",
		stack: [
			"Python (OOP)",
			"FastAPI",
			"SQLite",
			"Streamlit",
			"Uvicorn",
			"REST API",
			"Git"
		],
		outcomes: [
			"Decoupled data processing from the presentation layer via a dedicated microservice routing tier.",
			"Hardened persistence against structural tampering using parameterized SQL execution patterns.",
			"Stabilized real-time asset trajectory plots with custom state-normalization scaling on the client UI."
		],
		links: [{
			label: "GitHub Repository",
			href: "https://github.com/rt-ahona/Data_Pipeline_Project",
			icon: Github
		}],
		tag: "Full-Stack"
	},
	{
		id: "PRJ_02",
		icon: FlaskConical,
		name: "ML Dataset Formatting & Behavioral Processing Frameworks",
		role: "Lead Undergraduate Researcher",
		tagline: "CSE undergraduate thesis: a programmatic framework that parses, sanitizes, tokenizes, and validates large structured text matrices for downstream ML classification pipelines.",
		stack: [
			"Python Core",
			"Regex",
			"Pattern Matching",
			"Matrix Analysis",
			"Data Validation"
		],
		outcomes: [
			"Built high-throughput regex routines that scrub structural noise and formatting drift from raw text feeds.",
			"Formulated state-consistency profiles to catch sequence anomalies before execution handoff.",
			"Authored complete technical documentation mapping schemas, validation baselines, and workflows."
		],
		links: [{
			label: "Available on request",
			href: "#contact",
			icon: Mail
		}],
		tag: "Research"
	},
	{
		id: "PRJ_03",
		icon: Database,
		name: "Database Systems & Web Management Implementations",
		role: "Database System Developer",
		tagline: "Design and transactional optimization of relational storage frameworks focused on data durability and execution reliability across continuous application cycles.",
		stack: [
			"SQL",
			"MySQL",
			"Relational Schema Design",
			"Query Optimization",
			"Git"
		],
		outcomes: [
			"Configured robust MySQL schemas to maintain clean, accurate operational data attributes.",
			"Refactored query bottlenecks and transaction blocks to improve dataset reliability.",
			"Managed codebase variations and deployment sprints via Git with zero repository regression."
		],
		links: [{
			label: "Academic archive",
			href: "#contact",
			icon: Mail
		}],
		tag: "Databases"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalMatrix, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Academic, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "glass-nav sticky top-0 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#summary",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-surface font-mono text-sm font-bold text-primary",
						children: "RT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm font-semibold tracking-tight text-foreground",
						children: "Ramisa Tabassum"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "hidden rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20 md:inline-flex",
					children: "Get in Touch"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "summary",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-muted-foreground",
							children: ["status: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald",
								children: "open to opportunities"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
						children: ["Hi, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Ramisa Tabassum"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-lg font-semibold text-primary sm:text-xl",
						children: [
							"CSE Student ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "|"
							}),
							" Communications & Tech Leadership"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "Energetic, confident, and target-driven professional with a strong foundation in Computer Science and Engineering, combined with extensive experience in leadership, public relations, and client communication. Passionate about leveraging technical knowledge to drive product growth, software sales, and client acquisition in fast-paced environments."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "bg-primary text-primary-foreground hover:bg-primary/90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#experience",
								children: ["View Experience", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-1 h-4 w-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "border-border bg-surface text-foreground hover:border-primary hover:bg-surface hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Contact Me"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, {})
			})]
		})
	});
}
function ProfileCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-surface w-full overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-border" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: "profile.overview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "h-3.5 w-3.5 text-emerald" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-6 font-mono text-xs sm:text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					icon: MapPin,
					label: "Location",
					value: "Mohammadpur, Dhaka, Bangladesh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					icon: GraduationCap,
					label: "Studying",
					value: "B.Sc. CSE · ISU"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					icon: Briefcase,
					label: "Current",
					value: "Campus Ambassador · WIT Institute"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					icon: Award,
					label: "Certified",
					value: "AWS Educate · Compute & Databases"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					icon: Mail,
					label: "Email",
					value: "ramisatabassumwork01@gmail.com"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					icon: Phone,
					label: "Phone",
					value: "+880 1307 196548"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between border-t border-border pt-3 text-[0.7rem] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "▲ leadership · communication · tech" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-emerald",
						children: "● available"
					})]
				})
			]
		})]
	});
}
function InfoRow({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 rounded-md border border-border bg-background/50 px-4 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[0.7rem] uppercase tracking-wider",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate text-right text-foreground",
			children: value
		})]
	});
}
function TechnicalMatrix() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "matrix",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "02 // Competencies",
				title: "Core skills & capabilities",
				description: "A structured view of the communication, technical, and leadership strengths I bring to every role."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: SKILLS.map((skill) => {
					const Icon = skill.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface card-surface-hover flex flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-foreground",
								children: skill.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: skill.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						]
					}, skill.title);
				})
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "03 // Projects",
				title: "Selected engineering projects",
				description: "Full-stack, research, and database systems work — engineered for reliability, decoupling, and clean execution paths."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 lg:grid-cols-3",
				children: PROJECTS.map((p) => {
					const Icon = p.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-surface card-surface-hover flex flex-col overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border px-5 py-3 font-mono text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.id })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary",
								children: p.tag
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold leading-snug text-foreground",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-xs text-primary",
									children: p.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: p.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground",
										children: "Stack"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: p.stack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge-tech",
											children: t
										}, t))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground",
										children: "Impact"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 text-sm text-muted-foreground",
										children: p.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
										}, o))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-2 border-t border-border pt-4",
									children: p.links.map((l) => {
										const LIcon = l.icon;
										const isExternal = l.href.startsWith("http");
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: l.href,
											target: isExternal ? "_blank" : void 0,
											rel: isExternal ? "noreferrer" : void 0,
											className: "group inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LIcon, { className: "h-3.5 w-3.5" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }),
												isExternal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3 opacity-70 transition-opacity group-hover:opacity-100" })
											]
										}, l.label);
									})
								})
							]
						})]
					}, p.id);
				})
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "04 // Professional Experience",
				title: "Roles, ownership & impact",
				description: "Selected positions demonstrating leadership, outreach, and coordination across academic and professional environments."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-6",
				children: EXPERIENCES.map((exp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "card-surface card-surface-hover overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_2fr] lg:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center gap-2 font-mono text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ROLE_0", idx + 1] }), exp.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-sm border border-emerald/40 bg-emerald/10 px-2 py-0.5 text-emerald",
										children: exp.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-semibold leading-snug text-foreground",
									children: exp.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-medium text-primary",
									children: exp.company
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: exp.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-xs text-muted-foreground",
									children: exp.period
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: exp.badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "badge-tech",
									children: b
								}, b))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Key Contributions" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: exp.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md border border-border bg-background/40 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground",
										children: [h.lead, ": "]
									}), h.body]
								})
							}, h.lead))
						})] })]
					})
				}, exp.company))
			})]
		})
	});
}
function Academic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "academic",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "05 // Education & Certifications",
				title: "Academic credentials & training",
				description: "Formal education, certifications, and languages that support my professional profile."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative border-l border-border pl-8",
					children: EDUCATION.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative pb-6 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border border-border bg-surface text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-surface p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.period }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-sm border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary",
										children: e.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-foreground",
									children: e.school
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: e.degree
								})
							]
						})]
					}, e.school))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-sm font-semibold text-foreground",
								children: "Certifications"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: CERTIFICATIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md border border-border bg-background/40 p-3 text-sm text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: c
								})
							}, c))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesSquare, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-sm font-semibold text-foreground",
								children: "Languages"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between rounded-md border border-border bg-background/40 px-4 py-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: l.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: l.level
								})]
							}, l.name))
						})]
					})]
				})]
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "06 // Contact",
				title: "Let's connect",
				description: "Available for roles in tech-driven sales, communications, digital marketing, and technical program coordination."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface flex flex-col justify-between p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 font-mono text-xs text-muted-foreground",
							children: "> direct channels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold text-foreground",
							children: "Reach out directly"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Comfortable with remote workflows, online meetings, and phone/tele-sales communication. Use any of the channels below or send a message."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleLink, {
								icon: Mail,
								label: "Email",
								value: "ramisatabassumwork01@gmail.com",
								href: "mailto:ramisatabassumwork01@gmail.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleLink, {
								icon: Linkedin,
								label: "LinkedIn",
								value: "linkedin.com/in/ramisa-tabassum",
								href: "https://www.linkedin.com/in/ramisa-tabassum"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleLink, {
								icon: Phone,
								label: "Phone",
								value: "+880 1307 196548",
								href: "tel:+8801307196548"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleLink, {
								icon: MapPin,
								label: "Location",
								value: "Mohammadpur, Dhaka, Bangladesh",
								href: "https://maps.google.com/?q=Mohammadpur+Dhaka+Bangladesh"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
			})]
		})
	});
}
function ConsoleLink({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "group flex items-center justify-between rounded-md border border-border bg-background/40 px-4 py-3 transition-colors hover:border-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-sm text-foreground",
					children: value
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" })]
	});
}
function ContactForm() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			toast.error("All fields required", { description: "Please provide your name, email, and message." });
			return;
		}
		setSubmitting(true);
		await new Promise((r) => setTimeout(r, 700));
		setSubmitting(false);
		toast.success("Message sent", { description: "Thanks for reaching out — I'll respond shortly." });
		setForm({
			name: "",
			email: "",
			message: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "card-surface p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between border-b border-border pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-sm font-semibold text-foreground",
					children: "Send a message"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[0.7rem] text-muted-foreground",
				children: "direct inbox"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "name",
					label: "Name",
					value: form.name,
					onChange: (v) => setForm({
						...form,
						name: v
					}),
					placeholder: "Your full name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Email",
					type: "email",
					value: form.email,
					onChange: (v) => setForm({
						...form,
						email: v
					}),
					placeholder: "you@example.com"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						className: "font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						required: true,
						rows: 5,
						value: form.message,
						onChange: (e) => setForm({
							...form,
							message: e.target.value
						}),
						placeholder: "Tell me about the role, project, or opportunity…",
						className: "resize-none border-border bg-background/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/30"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: submitting,
					className: "w-full bg-primary text-primary-foreground hover:bg-primary/90",
					children: submitting ? "Sending…" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "ml-2 h-4 w-4" })] })
				})
			]
		})]
	});
}
function Field({ id, label, value, onChange, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			className: "font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type,
			required: true,
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "border-border bg-background/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/30"
		})]
	});
}
function SectionHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-xs uppercase tracking-widest text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted-foreground",
				children: description
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Ramisa Tabassum · Dhaka, Bangladesh"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-mono text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald" }), "open to opportunities"]
			})]
		})
	});
}
//#endregion
export { Index as component };
