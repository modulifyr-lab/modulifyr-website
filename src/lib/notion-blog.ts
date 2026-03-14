// ─── notion-blog.ts ──────────────────────────────────────────────────────────
// Uses raw fetch() to call the Notion REST API directly.
// The @notionhq/client SDK causes "notion.databases.query is not a function"
// under Turbopack (Next.js 16) because Turbopack doesn't bundle the SDK's
// prototype methods correctly. Raw fetch has zero dependencies and always works.

const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

// ─── Types ───────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readTime: string;
  featured: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  contentHtml: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function isConfigured(): boolean {
  return Boolean(process.env.NOTION_API_KEY && process.env.NOTION_BLOG_DATABASE_ID);
}

function notionHeaders() {
  return {
    "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
    "Content-Type": "application/json",
    "Notion-Version": NOTION_VERSION,
  };
}

function richText(prop: any): string {
  return prop?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
}

function titleProp(prop: any): string {
  return prop?.title?.map((t: any) => t.plain_text).join("") ?? "";
}

function selectProp(prop: any): string {
  return prop?.select?.name ?? "";
}

function dateProp(prop: any): string {
  return prop?.date?.start ?? "";
}

function checkboxProp(prop: any): boolean {
  return prop?.checkbox ?? false;
}

function formatDate(iso: string): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long" });
  } catch {
    return iso;
  }
}

function estimateReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function pageToPost(page: any): BlogPost {
  const props = page.properties;
  const iso = dateProp(props["Publish Date"]);
  return {
    id:       page.id,
    slug:     richText(props["Slug"]),
    title:    titleProp(props["Title"]),
    excerpt:  richText(props["Excerpt"]),
    category: selectProp(props["Category"]),
    date:     formatDate(iso),
    dateISO:  iso,
    readTime: "5 min read",
    featured: checkboxProp(props["Featured"]),
  };
}

function inlineToHtml(richTextArr: any[]): string {
  if (!Array.isArray(richTextArr)) return "";
  return richTextArr.map((span) => {
    let text = (span.plain_text ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (span.annotations?.bold)   text = `<strong>${text}</strong>`;
    if (span.annotations?.italic) text = `<em>${text}</em>`;
    if (span.annotations?.code)   text = `<code>${text}</code>`;
    if (span.href) text = `<a href="${span.href}" class="notion-link">${text}</a>`;
    return text;
  }).join("");
}

function blocksToHtml(blocks: any[]): string {
  const parts: string[] = [];
  for (const block of blocks) {
    switch (block.type) {
      case "paragraph":        parts.push(`<p class="notion-p">${inlineToHtml(block.paragraph?.rich_text ?? [])}</p>`); break;
      case "heading_1":        parts.push(`<h1 class="notion-h1">${inlineToHtml(block.heading_1?.rich_text ?? [])}</h1>`); break;
      case "heading_2":        parts.push(`<h2 class="notion-h2">${inlineToHtml(block.heading_2?.rich_text ?? [])}</h2>`); break;
      case "heading_3":        parts.push(`<h3 class="notion-h3">${inlineToHtml(block.heading_3?.rich_text ?? [])}</h3>`); break;
      case "bulleted_list_item": parts.push(`<li class="notion-li">${inlineToHtml(block.bulleted_list_item?.rich_text ?? [])}</li>`); break;
      case "numbered_list_item": parts.push(`<li class="notion-li notion-oli">${inlineToHtml(block.numbered_list_item?.rich_text ?? [])}</li>`); break;
      case "code":             parts.push(`<pre class="notion-pre"><code>${inlineToHtml(block.code?.rich_text ?? [])}</code></pre>`); break;
      case "quote":            parts.push(`<blockquote class="notion-quote">${inlineToHtml(block.quote?.rich_text ?? [])}</blockquote>`); break;
      case "divider":          parts.push(`<hr class="notion-hr" />`); break;
      case "callout":          parts.push(`<div class="notion-callout">${inlineToHtml(block.callout?.rich_text ?? [])}</div>`); break;
    }
  }
  return parts.join("\n");
}

// ─── Public API ──────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!isConfigured()) return [];
  try {
    const res = await fetch(
      `${NOTION_API_BASE}/databases/${process.env.NOTION_BLOG_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: notionHeaders(),
        body: JSON.stringify({
          filter: { property: "Status", select: { equals: "Published" } },
          sorts: [{ property: "Publish Date", direction: "descending" }],
        }),
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) { console.warn(`[notion-blog] getAllPosts HTTP ${res.status}`); return []; }
    const data = await res.json();
    return (data.results ?? []).map(pageToPost).filter((p: BlogPost) => p.slug && p.title);
  } catch (err) {
    console.warn("[notion-blog] getAllPosts failed", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  if (!isConfigured()) return null;
  try {
    const queryRes = await fetch(
      `${NOTION_API_BASE}/databases/${process.env.NOTION_BLOG_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: notionHeaders(),
        body: JSON.stringify({
          filter: {
            and: [
              { property: "Slug",   rich_text: { equals: slug } },
              { property: "Status", select:    { equals: "Published" } },
            ],
          },
          page_size: 1,
        }),
        next: { revalidate: 3600 },
      }
    );
    if (!queryRes.ok) { console.warn(`[notion-blog] getPostBySlug query HTTP ${queryRes.status}`); return null; }
    const queryData = await queryRes.json();
    const page = queryData.results?.[0];
    if (!page) return null;

    const blocksRes = await fetch(
      `${NOTION_API_BASE}/blocks/${page.id}/children?page_size=100`,
      { method: "GET", headers: notionHeaders(), next: { revalidate: 3600 } }
    );
    if (!blocksRes.ok) { console.warn(`[notion-blog] getPostBySlug blocks HTTP ${blocksRes.status}`); return null; }
    const blocksData = await blocksRes.json();
    const contentHtml = blocksToHtml(blocksData.results ?? []);

    return { ...pageToPost(page), readTime: estimateReadTime(contentHtml), contentHtml };
  } catch (err) {
    console.warn("[notion-blog] getPostBySlug failed", err);
    return null;
  }
}