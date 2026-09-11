/**
 * The engagement arc — how a stalled project becomes a delivered one.
 * Shared by the services page, the header nav, and the home page preview.
 */

export type Service = {
  slug: string;
  name: string;
  step: string;
  icon: string;
  tagline: string;
  copy: string;
  points: string[];
  deliverable: string;
};

export const SERVICES: Service[] = [
  {
    slug: "assessment",
    name: "Technical Assessment",
    step: "01",
    icon: "search_insights",
    tagline: "An honest read on where the project actually stands.",
    copy: "Before anyone promises a date, we review the codebase, infrastructure, and delivery history to establish what exists, what works, and what is left. You get a candid picture — including the parts that are harder to hear.",
    points: [
      "Architecture and code quality review",
      "Security, dependency, and infrastructure audit",
      "Remaining-scope inventory against the original intent",
      "Risk register with severity and effort estimates",
    ],
    deliverable: "Assessment report & completion estimate",
  },
  {
    slug: "architecture",
    name: "Architecture & Design",
    step: "02",
    icon: "architecture",
    tagline: "A plan that gets the build to a finishable state.",
    copy: "We decide what to keep, what to refactor, and what to replace — then design the path to completion. Decisions are written down with their trade-offs so your team can challenge them now and understand them later.",
    points: [
      "Target architecture and migration path",
      "Keep, refactor, or rebuild decisions per component",
      "Interface and data contracts",
      "Documented decision records",
    ],
    deliverable: "Architecture specification & decision records",
  },
  {
    slug: "delivery",
    name: "Delivery & Completion",
    step: "03",
    icon: "handyman",
    tagline: "We take ownership of the remaining build.",
    copy: "This is the core of the engagement. We work the completion roadmap in sequenced milestones with working software at the end of each — no long silences, no surprise reveals at the end of a quarter.",
    points: [
      "Milestone-based delivery with working software each cycle",
      "Automated testing across critical paths",
      "Code review and quality gates on every change",
      "Weekly written progress against the roadmap",
    ],
    deliverable: "Completed, tested, reviewable increments",
  },
  {
    slug: "deployment",
    name: "Staging & Deployment",
    step: "04",
    icon: "rocket_launch",
    tagline: "Launch as a controlled procedure, not an event.",
    copy: "Releases are rehearsed in environments that mirror production, with rollback paths tested before they are needed. Cutovers are planned, sequenced, and reversible.",
    points: [
      "Production-equivalent staging environments",
      "Automated deployment pipelines with rollback",
      "Load and failure testing ahead of launch",
      "Sequenced cutover plan with go/no-go criteria",
    ],
    deliverable: "Release pipeline & rehearsed cutover plan",
  },
  {
    slug: "project-management",
    name: "Project Management",
    step: "05",
    icon: "fact_check",
    tagline: "Visible progress, honest reporting.",
    copy: "Every engagement has a named delivery lead accountable for scope, schedule, and communication. Status is reported in writing on a fixed cadence — including when something has slipped and what we are doing about it.",
    points: [
      "Named delivery lead as a single point of accountability",
      "Fixed-cadence written status reporting",
      "Scope and change control with cost implications stated upfront",
      "Risk tracking with mitigation owners",
    ],
    deliverable: "Delivery plan & recurring status reporting",
  },
  {
    slug: "handover",
    name: "Handover & Enablement",
    step: "06",
    icon: "menu_book",
    tagline: "You own it when we leave — genuinely.",
    copy: "The engagement is not finished when the code ships; it is finished when your team can run, extend, and debug the system without us. We plan for that from the first week.",
    points: [
      "Architecture documentation and operational runbooks",
      "Paired sessions with your engineers on real tasks",
      "Environment, credential, and access transfer",
      "Optional support window after handover",
    ],
    deliverable: "Runbooks, documentation & trained team",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
