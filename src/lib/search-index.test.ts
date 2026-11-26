import { describe, it, expect } from "vitest";
import { RESOURCES } from "./resources";
import { LOCAL_SEARCH_INDEX, buildSearchIndex, filterSearchItems } from "./search-index";
import type { BlogPost } from "./notion-blog";

describe("local JSON search index", () => {
  it("indexes every resource defined in RESOURCES", () => {
    const indexedSlugs = new Set(LOCAL_SEARCH_INDEX.items.map((item) => item.slug));
    for (const resource of RESOURCES) {
      expect(indexedSlugs.has(resource.slug)).toBe(true);
    }
  });

  it("merges Notion blog posts ahead of local resources without duplicate hrefs", () => {
    const mockPosts: BlogPost[] = [
      {
        id: "post-1",
        slug: "esewa-webhook-retries",
        title: "Designing Idempotent eSewa Webhook Retries",
        excerpt: "How we prevent duplicate payment fulfillment in Next.js and n8n.",
        category: "Architecture",
        date: "November 2026",
        dateISO: "2026-11-10",
        readTime: "5 min read",
        featured: true,
      },
    ];

    const merged = buildSearchIndex(mockPosts);
    expect(merged[0].href).toBe("/blog/esewa-webhook-retries");
    expect(merged[0].kind).toBe("blog");

    const hrefs = merged.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("filters by kind and ranks title/keyword matches accurately", () => {
    const mockPosts: BlogPost[] = [
      {
        id: "post-1",
        slug: "hono-postgres-mvp",
        title: "Building Lean MVPs with Hono and PostgreSQL",
        excerpt: "Practical patterns for founder-led delivery.",
        category: "Backend",
        date: "November 2026",
        dateISO: "2026-11-15",
        readTime: "4 min read",
        featured: false,
      },
    ];

    const items = buildSearchIndex(mockPosts);

    const blogOnly = filterSearchItems(items, "", "blog");
    expect(blogOnly.every((item) => item.kind === "blog")).toBe(true);

    const resourceOnly = filterSearchItems(items, "", "resource");
    expect(resourceOnly.every((item) => item.kind === "resource")).toBe(true);

    const honoResults = filterSearchItems(items, "hono");
    expect(honoResults.length).toBeGreaterThanOrEqual(2);
    expect(honoResults[0].slug).toBe("hono-postgres-mvp");

    const pdfResults = filterSearchItems(items, "whitepaper");
    expect(pdfResults[0].slug).toBe("modular-architecture");
  });
});
