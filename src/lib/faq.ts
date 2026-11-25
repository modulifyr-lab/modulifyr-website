export interface FaqItem {
  question: string;
  answer?: string;
}

export const DEFAULT_FAQ_ITEMS: readonly { question: string; answer: string }[] = [
  {
    question: "What does Modulifyr do differently from other software development companies?",
    answer:
      "We design modular software systems tailored to your exact operational workflows. Instead of forced off-the-shelf constraints or rigid legacy monoliths, our founder-led team builds clean, maintainable systems with pay-as-we-build milestones and zero hidden costs.",
  },
  {
    question: "How do I know Modulifyr is a fit for my business?",
    answer:
      "Modulifyr is ideal for growing SMBs and teams that need clear technical scoping through a Strategy Sprint, a fast static web presence via Launch Kit, or an Automation Layer connecting their existing tools without manual busywork.",
  },
  {
    question: "Can you integrate our new system with existing tools we use?",
    answer:
      "Yes. We specialize in API integrations, webhooks, and legacy system modernization. We connect your existing databases, payment gateways, CRM, and accounting software into one unified data flow.",
  },
  {
    question: "How do I start a project with Modulifyr?",
    answer:
      "You can start by booking a discovery call or scheduling a 2-week Strategy Sprint. We map out your current bottlenecks, architecture requirements, and project roadmap before any development commitments.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We ensure smooth deployment with CI/CD pipelines, automated backups, and thorough documentation. Post-launch, we offer SLA monitoring and security patches. Further feature work is scoped as a new engagement.",
  },
];
