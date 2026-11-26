export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  type: string;
  icon: "layers" | "book" | "filebox";
  stats: string;
  isPdf: boolean;
  pdfPath?: string;
  category: string;
  keywords: string[];
}

export const RESOURCES: ResourceItem[] = [
  {
    slug: "modular-architecture",
    title: "Modular Architecture Deep Dive",
    description:
      "A comprehensive guide on designing scalable systems using strategic modularism and domain-driven design.",
    type: "Whitepaper",
    icon: "layers",
    stats: "24 Pages · PDF",
    isPdf: true,
    pdfPath: "/downloads/modulifyr-capability-deck.pdf",
    category: "Architecture",
    keywords: [
      "modular architecture",
      "domain-driven design",
      "capability deck",
      "whitepaper",
      "system design",
      "pdf",
    ],
  },
  {
    slug: "modernization-roadmap",
    title: "System Modernization Roadmap",
    description:
      "Strategic framework for migrating legacy tools and manual spreadsheets into modular TypeScript, Next.js, and n8n workflows without downtime.",
    type: "Playbook",
    icon: "book",
    stats: "12 Pages · PDF",
    isPdf: true,
    pdfPath: "/downloads/modulifyr-technical-briefing.pdf",
    category: "Strategy",
    keywords: [
      "modernization",
      "legacy migration",
      "spreadsheets",
      "typescript",
      "nextjs",
      "n8n",
      "playbook",
      "pdf",
    ],
  },
  {
    slug: "sre-best-practices",
    title: "Reliability & Monitoring for Lean Teams",
    description:
      "Pragmatic uptime alerting, structured error logging, and database backup practices for lean Next.js, Hono, PostgreSQL, and n8n systems.",
    type: "Technical Guide",
    icon: "filebox",
    stats: "6 min read",
    isPdf: false,
    category: "Operations",
    keywords: [
      "reliability",
      "monitoring",
      "uptime",
      "hono",
      "postgresql",
      "backups",
      "n8n",
      "webhooks",
      "sre",
    ],
  },
];
