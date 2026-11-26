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
      "Modulifyr is ideal for SMBs and founders who need a fast Launch Kit website on Next.js & Tailwind, an Automation Layer connecting existing tools via n8n/webhooks, or a custom web app/MVP scoped through a Strategy Sprint.",
  },
  {
    question: "Can you integrate our new system with existing tools we use?",
    answer:
      "Yes. We build REST/webhook integrations and automated workflows across n8n, Zapier, Make, WhatsApp Business, Notion, Google Sheets, CRM tools, and payment gateways like eSewa, Khalti, and Stripe.",
  },
  {
    question: "How do I start a project with Modulifyr?",
    answer:
      "For a straightforward Launch Kit website or single automation, you can request a proposal or book a discovery call directly. For custom web apps, MVPs, or complex automations, start with a 3–10 day Strategy Sprint—100% of the sprint fee is credited if you build with us.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You get 100% ownership of your repository, domain, and accounts plus clear handoff documentation. Post-launch, we offer optional managed hosting, uptime alerting, and workflow health checks, or scope new features as a follow-on milestone.",
  },
];
