import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/notion-blog";
import { RESOURCES } from "@/lib/resources";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://modulifyr.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core pages
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/strategy-sprint`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/launch-kit`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/automation-layer`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/request-proposal`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/capabilities`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/process`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/technical-standards`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/careers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/resources`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, changeFrequency: "yearly", priority: 0.3 },
    ...RESOURCES.filter((r) => !r.isPdf).map((r) => ({
      url: `${base}/resources/${r.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const posts = await getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    ...(post.dateISO ? { lastModified: new Date(post.dateISO) } : {}),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
