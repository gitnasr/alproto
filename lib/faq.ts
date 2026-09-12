/**
 * The objections that actually stop someone getting in touch about a rescue.
 * Answered plainly — including where the honest answer is unwelcome.
 */

export type FaqItem = { question: string; answer: string };

export const FAQ: FaqItem[] = [
  {
    question: "There's almost no documentation. Is that a problem?",
    answer:
      "No — it is the norm. Undocumented systems are one of the most common reasons a project stalls in the first place, and reading an unfamiliar codebase is a core part of what an assessment is for. We reconstruct the picture from the code, the infrastructure, the commit history, and conversations with whoever is still around. Producing the documentation that was missing is part of what we hand back.",
  },
  {
    question: "Are you going to tell us the code is garbage and start over?",
    answer:
      "Rarely, and never as an opening position. A rewrite is the most expensive option and usually the slowest route to a working product, so the assessment tests whether it is genuinely necessary rather than assuming it. Most engagements keep the majority of what exists, stabilize it, and finish the remaining work. When we do recommend replacing a component, you get the reasoning and the cost of both paths.",
  },
  {
    question: "What if the code really cannot be saved?",
    answer:
      "Then we say so during the assessment, in writing, with the evidence. That is a more useful outcome than six months of sunk cost, and it is one of the reasons the assessment is scoped and paid for separately — the finding is yours regardless of what you decide to do next, including deciding not to work with us.",
  },
  {
    question: "We still have an existing vendor or team. Does that complicate things?",
    answer:
      "It is a normal situation and does not have to be adversarial. We can work alongside an incumbent, take over a defined slice while they continue, or handle a full transition. What matters is that ownership boundaries are written down before work starts, so two teams are not silently changing the same thing.",
  },
  {
    question: "Who owns the code and the IP?",
    answer:
      "You do, from the first commit, including anything produced during the assessment. Work happens under a mutual NDA signed before we look at a repository, and access is scoped and time-bound. There is no arrangement in which finishing your project makes you dependent on us to keep running it.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "An assessment can usually begin within a couple of weeks of an NDA and repository access. Full delivery engagements depend on current capacity — the banner on the home page reflects which quarters we are actively booking. If a situation is genuinely urgent, say so in your first message and we will tell you honestly whether we can help on that timeline.",
  },
  {
    question: "What does this cost?",
    answer:
      "The assessment is a fixed-scope, fixed-fee piece of work, so you know the number before it starts. Delivery engagements are quoted after the assessment, because quoting a completion before anyone has read the code is guesswork — and an estimate given on that basis is the same mistake that stalls most of the projects we are called in to finish.",
  },
  {
    question: "Will you tell us if we don't need you?",
    answer:
      "Yes. Some projects need a decision rather than a development team, and some are closer to done than the people inside them believe. If that is what the assessment finds, that is what it will say.",
  },
];
