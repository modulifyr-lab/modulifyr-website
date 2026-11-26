import rawSearchIndex from "@/data/search-index.json";
import type { BlogPost } from "@/lib/notion-blog";

export type SearchIndexKind = "blog" | "resource";

export interface SearchIndexItem {
  id: string;
  kind: SearchIndexKind;
  slug: string;
  title: string;
  description: string;
  category: string;
  type: string;
  href: string;
  meta: string;
  isDownload: boolean;
  keywords: string[];
  dateISO?: string;
}

export interface SearchIndexData {
  version: number;
  items: SearchIndexItem[];
}

export const LOCAL_SEARCH_INDEX: SearchIndexData = rawSearchIndex as SearchIndexData;

export function blogPostToSearchItem(post: BlogPost): SearchIndexItem {
  return {
    id: `blog:${post.slug}`,
    kind: "blog",
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    category: post.category || "Engineering",
    type: "Blog Post",
    href: `/blog/${post.slug}`,
    meta: [post.readTime, post.date].filter(Boolean).join(" · "),
    isDownload: false,
    keywords: [post.category, post.slug.replace(/-/g, " "), "blog", "article"].filter(Boolean),
    dateISO: post.dateISO,
  };
}

export function buildSearchIndex(blogPosts: BlogPost[] = []): SearchIndexItem[] {
  const dynamicPosts = blogPosts.map(blogPostToSearchItem);
  const seenHrefs = new Set(dynamicPosts.map((item) => item.href));

  // Keep local resources + blog hub fallback when no individual posts overlap
  const localItems = LOCAL_SEARCH_INDEX.items.filter((item) => !seenHrefs.has(item.href));

  return [...dynamicPosts, ...localItems];
}

export function filterSearchItems(
  items: SearchIndexItem[],
  query: string,
  kind: "all" | SearchIndexKind = "all"
): SearchIndexItem[] {
  const scoped = kind === "all" ? items : items.filter((item) => item.kind === kind);
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return scoped;
  }

  const tokens = normalized.split(/\s+/).filter(Boolean);

  const scored: Array<{ item: SearchIndexItem; score: number }> = [];

  for (const item of scoped) {
    const title = item.title.toLowerCase();
    const category = item.category.toLowerCase();
    const type = item.type.toLowerCase();
    const description = item.description.toLowerCase();
    const slug = item.slug.toLowerCase();
    const keywordsText = item.keywords.join(" ").toLowerCase();
    const combined = `${title} ${category} ${type} ${description} ${slug} ${keywordsText}`;

    const matchesAllTokens = tokens.every((token) => combined.includes(token));
    if (!matchesAllTokens) continue;

    let score = 0;
    if (title === normalized) score += 100;
    else if (title.startsWith(normalized)) score += 60;
    else if (title.includes(normalized)) score += 40;

    for (const token of tokens) {
      if (title.includes(token)) score += 18;
      if (keywordsText.includes(token)) score += 12;
      if (category.includes(token) || type.includes(token)) score += 10;
      if (slug.includes(token)) score += 8;
      if (description.includes(token)) score += 4;
    }

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map((entry) => entry.item);
}
