export interface FaqItem {
  question: string;
  answer?: string;
}

export const DEFAULT_FAQ_ITEMS: readonly { question: string; answer: string }[] = [
  {
    question: "How do I start a project with Modulifyr?",
    answer:
      "Every project starts with a Free 20-Minute Checkup call—never a paid barrier. We look at your website, lead flow, or manual bottlenecks, recommend the simplest fix (Launch Kit website, Automation Layer, or off-the-shelf software), and only suggest a paid Strategy Sprint if you need deep multi-tool research (100% credited if you start your build within 30 days).",
  },
  {
    question: "What does Modulifyr do differently from other software development companies?",
    answer:
      "We speak plain business English, publish clear NPR and USD prices upfront, and deliver fast without agency bloat. You get direct engineering communication from Birtamode, milestone billing, and 100% ownership of your code, domain, and accounts.",
  },
  {
    question: "Can you integrate our website and forms with existing tools we use?",
    answer:
      "Yes. We connect website and Facebook/Google lead forms, CRMs, Google Sheets, Notion, and eSewa, Khalti, Fonepay, or Stripe webhooks using REST APIs, webhooks & scheduled sync—sending instant alerts via Click-to-WhatsApp routing, Email, Telegram, or Nepali SMS (Sparrow/Aakash).",
  },
  {
    question: "Do I need to pay for third-party tools like hosting, domains, or SMS credits?",
    answer:
      "Yes. Third-party subscriptions (domain names, Vercel hosting if needed, SMS credits, or external tool plans) stay registered in your own business name and are billed at cost—so you never get locked into an agency markup.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You receive 100% ownership of your code repository, domain, and connected accounts plus plain-English handover notes. If you want ongoing peace of mind, our optional Monthly Care & Lead-Ops Plan covers uptime monitoring, form/lead health checks, and up to 2 small text, photo, or banner updates per month.",
  },
];
