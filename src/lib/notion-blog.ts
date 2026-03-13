// ─── Lazy imports — only resolved when Notion is actually configured ──────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _notion: any = null;

function getClient() {
  if (_notion) return _notion;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require("@notionhq/client");
    // Handle CJS default export, named export, and ESM interop
    const ClientClass = mod.Client ?? mod.default?.Client ?? mod.default;
    if (typeof ClientClass !== "function") {
      throw new Error("@notionhq/client: Client constructor not found in module");
    }
    _notion = new ClientClass({ auth: process.env.NOTION_API_KEY });
  } catch (e) {
    console.error("[notion-blog] Failed to init Notion client:", e);
    return null;
  }
  return _notion;
}

const DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID ?? "";

// ─── Types ───────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;      // human-readable: "March 2026"
  dateISO: string;   // machine-readable: "2026-03-01"
  readTime: string;  // "7 min read"
  featured: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  contentHtml: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function isConfigured(): boolean {
  return Boolean(process.env.NOTION_API_KEY && process.env.NOTION_BLOG_DATABASE_ID);
}

function richText(prop: unknown): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = prop as any;
  return p?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
}

function titleProp(prop: unknown): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = prop as any;
  return p?.title?.map((t: any) => t.plain_text).join("") ?? "";
}

function selectProp(prop: unknown): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = prop as any;
  return p?.select?.name ?? "";
}

function dateProp(prop: unknown): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = prop as any;
  return p?.date?.start ?? "";
}

function checkboxProp(prop: unknown): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = prop as any;
  return p?.checkbox ?? false;
}

function formatDate(iso: string): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  } catch {
    return iso;
  }
}

function estimateReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

// ─── Block → HTML ─────────────────────────────────────────────────────────────
function inlineToHtml(richTextArr: any[]): string {
  return richTextArr
    .map((span) => {
      let text = span.plain_text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      if (span.annotations?.bold) text = `<strong>${text}</strong>`;
      if (span.annotations?.italic) text = `<em>${text}</em>`;
      if (span.annotations?.code) text = `<code>${text}</code>`;
      if (span.href) text = `<a href="${span.href}" class="notion-link">${text}</a>`;
      return text;
    })
    .join("");
}

function blocksToHtml(blocks: any[]): string {
  const parts: string[] = [];

  for (const block of blocks) {
    switch (block.type) {
      case "paragraph":
        parts.push(`<p class="notion-p">${inlineToHtml(block.paragraph.rich_text)}</p>`);
        break;
      case "heading_1":
        parts.push(`<h1 class="notion-h1">${inlineToHtml(block.heading_1.rich_text)}</h1>`);
        break;
      case "heading_2":
        parts.push(`<h2 class="notion-h2">${inlineToHtml(block.heading_2.rich_text)}</h2>`);
        break;
      case "heading_3":
        parts.push(`<h3 class="notion-h3">${inlineToHtml(block.heading_3.rich_text)}</h3>`);
        break;
      case "bulleted_list_item":
        parts.push(`<li class="notion-li">${inlineToHtml(block.bulleted_list_item.rich_text)}</li>`);
        break;
      case "numbered_list_item":
        parts.push(`<li class="notion-li notion-oli">${inlineToHtml(block.numbered_list_item.rich_text)}</li>`);
        break;
      case "code":
        parts.push(
          `<pre class="notion-pre"><code>${inlineToHtml(block.code.rich_text)}</code></pre>`
        );
        break;
      case "quote":
        parts.push(`<blockquote class="notion-quote">${inlineToHtml(block.quote.rich_text)}</blockquote>`);
        break;
      case "divider":
        parts.push(`<hr class="notion-hr" />`);
        break;
      case "callout":
        parts.push(
          `<div class="notion-callout">${inlineToHtml(block.callout.rich_text)}</div>`
        );
        break;
      default:
        break;
    }
  }

  return parts.join("\n");
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Fetch all published posts from Notion, sorted newest first.
 * Returns [] if Notion isn't configured (graceful fallback).
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!isConfigured()) return [];

  const client = getClient();
  if (!client) return [];

  try {
    const res = await client.databases.query({
      database_id: DATABASE_ID,
      filter: { property: "Status", select: { equals: "Published" } },
      sorts: [{ property: "Publish Date", direction: "descending" }],
    });

    return res.results
      .filter((p: any) => "properties" in p)
      .map((page: any) => {
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
          readTime: richText(props["Read Time"]) || "5 min read",
          featured: checkboxProp(props["Featured"]),
        };
      })
      .filter((p: any) => p.slug && p.title);
  } catch (err) {
    console.warn("[notion-blog] getAllPosts failed — falling back to static posts.", err);
    return [];
  }
}

/**
 * Fetch a single post with its full HTML content.
 * Returns null if not found or Notion isn't configured.
 */
export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  if (!isConfigured()) return null;

  const client = getClient();
  if (!client) return null;

  try {
    const res = await client.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          { property: "Slug",   rich_text: { equals: slug } },
          { property: "Status", select:    { equals: "Published" } },
        ],
      },
    });

    const page = res.results[0] as any | undefined;
    if (!page) return null;

    const props = page.properties;
    const iso = dateProp(props["Publish Date"]);

    const blocksRes = await client.blocks.children.list({
      block_id: page.id,
      page_size: 100,
    });

    const contentHtml = blocksToHtml(blocksRes.results as any[]);

    return {
      id:          page.id,
      slug:        richText(props["Slug"]),
      title:       titleProp(props["Title"]),
      excerpt:     richText(props["Excerpt"]),
      category:    selectProp(props["Category"]),
      date:        formatDate(iso),
      dateISO:     iso,
      readTime:    estimateReadTime(contentHtml),
      featured:    checkboxProp(props["Featured"]),
      contentHtml,
    };
  } catch (err) {
    console.warn("[notion-blog] getPostBySlug failed — falling back to static post.", err);
    return null;
  }
}