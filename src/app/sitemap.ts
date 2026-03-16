import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://modulifyr.vercel.app";

  return [
    // Core pages
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/request-proposal`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/capabilities`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/process`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/technical-standards`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/careers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/resources`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },

    // Blog posts — Nepal-focused posts get priority 0.9 (high local SEO value)
    { url: `${base}/blog/custom-software-nepal-sme`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/erp-schools-colleges-nepal`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/modular-vs-monolith`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${base}/blog/legacy-modernization-playbook`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/blog/api-design-patterns`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/cost-of-technical-debt`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/sre-for-startups`, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${base}/blog/react-server-components-enterprise`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Resource articles (non-PDF)
    {
      url: `${base}/resources/micro-frontend-orchestration`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${base}/resources/sre-best-practices`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
