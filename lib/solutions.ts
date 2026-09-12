/**
 * Solution families — the domains we take unfinished work in.
 * Shared by the solutions index, the per-solution template, the header nav,
 * and the home page preview so the five stay in lockstep.
 */

export type Solution = {
  slug: string;
  name: string;
  navLabel: string;
  icon: string;
  tagline: string;
  summary: string;
  /** Situations clients arrive with. */
  signals: string[];
  /** Optional note that lowers the cost of admitting the situation. */
  reassurance?: string;
  /** Concrete work we deliver in this domain. */
  deliverables: { icon: string; title: string; copy: string }[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "project-rescue",
    name: "Project Rescue & Completion",
    navLabel: "Project Rescue & Completion",
    icon: "engineering",
    tagline: "Stalled, half-built, or inherited — taken to production.",
    summary:
      "Our core practice. When a build has lost momentum, changed hands, or outgrown the team that started it, we assess what exists, take ownership of the remaining work, and deliver it to production — then hand it back documented and maintainable.",
    signals: [
      "A build that has missed several deadlines with no credible path to launch",
      "A codebase inherited from a departed team or an agency that has moved on",
      "Work that is 60–80% complete but cannot get over the finish line",
      "An internal team stretched too thin to finish alongside day-to-day delivery",
    ],
    reassurance:
      "None of these mean anyone was careless. Projects stall for ordinary reasons — scope that moved, people who left, a date that was never real — and it happens to competent teams under pressure. What makes a project unrecoverable is not the original problem, it is how long it goes unexamined. Asking someone to look is not an admission of failure.",
    deliverables: [
      {
        icon: "search_insights",
        title: "Codebase & Delivery Assessment",
        copy: "An honest read on what exists, what is salvageable, what must be rebuilt, and what it will realistically take to finish.",
      },
      {
        icon: "route",
        title: "Completion Roadmap",
        copy: "Remaining scope broken into sequenced, estimated milestones with clear acceptance criteria for each.",
      },
      {
        icon: "handyman",
        title: "Stabilization & Remediation",
        copy: "Critical defects, security gaps, and structural problems resolved before new feature work resumes.",
      },
      {
        icon: "rocket_launch",
        title: "Delivery to Production",
        copy: "The remaining build carried through testing, deployment, and launch under a defined delivery plan.",
      },
      {
        icon: "menu_book",
        title: "Documentation & Handover",
        copy: "Runbooks, architecture notes, and paired sessions so your team owns the system with confidence.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    navLabel: "Cloud & Infrastructure",
    icon: "cloud_sync",
    tagline: "Environments that deploy predictably and stay up.",
    summary:
      "Unfinished projects usually have unfinished infrastructure behind them: manual deploys, one fragile environment, no observability. We build the cloud foundation the application needs to ship safely and run reliably.",
    signals: [
      "Deployments are manual, undocumented, or only one person can run them",
      "No separation between development, staging, and production",
      "Costs are climbing with no clear view of what is driving them",
      "Outages are discovered by customers rather than by monitoring",
    ],
    deliverables: [
      {
        icon: "conversion_path",
        title: "CI/CD Pipelines",
        copy: "Automated build, test, and deployment pipelines so releases are routine rather than risky events.",
      },
      {
        icon: "deployed_code",
        title: "Infrastructure as Code",
        copy: "Environments defined in version control and reproducible from scratch, not assembled by hand.",
      },
      {
        icon: "hub",
        title: "Container Orchestration",
        copy: "Containerized workloads with sensible scaling, health checks, and rollback paths.",
      },
      {
        icon: "monitoring",
        title: "Observability & Alerting",
        copy: "Logging, metrics, and tracing wired up so failures surface with enough context to act on.",
      },
      {
        icon: "savings",
        title: "Cost & Performance Review",
        copy: "Right-sizing and configuration work to bring cloud spend in line with actual usage.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    navLabel: "AI & Automation",
    icon: "neurology",
    tagline: "From promising prototype to dependable production feature.",
    summary:
      "Most AI work stalls in the gap between a demo that impressed a stakeholder and a feature that can be trusted with real users. We close that gap: evaluation, guardrails, cost control, and the engineering that makes it production-grade.",
    signals: [
      "A prototype that works in a notebook but has no path to production",
      "An AI feature whose output quality nobody can measure or defend",
      "Token or inference costs that make the feature uneconomical at scale",
      "Manual internal processes that should have been automated already",
    ],
    deliverables: [
      {
        icon: "smart_toy",
        title: "LLM Application Engineering",
        copy: "Retrieval pipelines, tool-using agents, and structured-output flows built as maintainable software.",
      },
      {
        icon: "fact_check",
        title: "Evaluation Harnesses",
        copy: "Test sets and scoring so changes to prompts or models can be measured instead of guessed at.",
      },
      {
        icon: "shield_lock",
        title: "Guardrails & Safety",
        copy: "Input validation, output constraints, fallback behavior, and human review paths where they matter.",
      },
      {
        icon: "database",
        title: "Vector & Retrieval Infrastructure",
        copy: "Embedding pipelines and search infrastructure tuned for relevance, latency, and cost.",
      },
      {
        icon: "bolt",
        title: "Workflow Automation",
        copy: "Repetitive internal processes replaced with reliable, observable automated workflows.",
      },
    ],
  },
  {
    slug: "data-platforms",
    name: "Data Platforms & Integration",
    navLabel: "Data Platforms & Integration",
    icon: "account_tree",
    tagline: "Systems that agree with each other.",
    summary:
      "Half-finished platforms tend to leave data stranded: partial migrations, brittle integrations, reports nobody trusts. We finish the pipelines, reconcile the systems, and make the numbers dependable.",
    signals: [
      "A migration that was started and never completed, leaving two sources of truth",
      "Integrations that break quietly and are discovered days later",
      "Reporting that different teams calculate differently",
      "Batch jobs that no longer finish inside their window",
    ],
    deliverables: [
      {
        icon: "sync_alt",
        title: "Data Migration & Backfill",
        copy: "Migrations completed with verification, reconciliation, and a documented cutover rather than an open-ended parallel run.",
      },
      {
        icon: "linked_services",
        title: "System Integration",
        copy: "Reliable interfaces between internal services and third-party platforms, with retries and failure visibility.",
      },
      {
        icon: "waterfall_chart",
        title: "Pipelines & Warehousing",
        copy: "Ingestion and transformation pipelines feeding a warehouse your reporting can actually rely on.",
      },
      {
        icon: "rule",
        title: "Data Quality Controls",
        copy: "Validation, schema enforcement, and alerting so bad data is caught at the boundary.",
      },
      {
        icon: "speed",
        title: "Query & Storage Tuning",
        copy: "Indexing, partitioning, and query work to bring slow reads back within budget.",
      },
    ],
  },
  {
    slug: "product-engineering",
    name: "Web & Mobile Product Engineering",
    navLabel: "Web & Mobile Engineering",
    icon: "developer_mode_tv",
    tagline: "The remaining build, delivered to a standard you can maintain.",
    summary:
      "The application layer is where most unfinished projects are judged. We complete the remaining product surface — web and mobile — with the testing, accessibility, and structure that keep it maintainable after we hand it over.",
    signals: [
      "A product that is feature-incomplete and drifting further from its original scope",
      "A front end nobody wants to touch because changes break unrelated screens",
      "A design system that was started but never applied consistently",
      "A mobile app stuck in review cycles or missing from one platform entirely",
    ],
    deliverables: [
      {
        icon: "web",
        title: "Web Application Delivery",
        copy: "Remaining features built out with server rendering, sensible state management, and real performance budgets.",
      },
      {
        icon: "smartphone",
        title: "Mobile Delivery",
        copy: "Cross-platform or native builds carried through store submission and release.",
      },
      {
        icon: "design_services",
        title: "Design System Implementation",
        copy: "A component library applied consistently so future work compounds instead of fragmenting.",
      },
      {
        icon: "accessibility_new",
        title: "Accessibility & Quality",
        copy: "Keyboard access, screen-reader semantics, and automated test coverage across critical flows.",
      },
      {
        icon: "speed",
        title: "Performance Optimization",
        copy: "Load, render, and interaction performance measured and improved against real device conditions.",
      },
    ],
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
