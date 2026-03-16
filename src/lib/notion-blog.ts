// src/lib/notion-blog.ts
const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

// ─── Notion API types ─────────────────────────────────────────────────────────
type RichTextItem = {
  plain_text: string;
  annotations?: Record<string, boolean>;
  href?: string | null;
};
type NotionProp =
  | { rich_text: RichTextItem[] }
  | { title: RichTextItem[] }
  | { select: { name: string } | null }
  | { date: { start: string } | null }
  | { checkbox: boolean }
  | Record<string, unknown>;

type NotionBlock = {
  type: string;
  paragraph?: { rich_text: RichTextItem[] };
  heading_1?: { rich_text: RichTextItem[] };
  heading_2?: { rich_text: RichTextItem[] };
  heading_3?: { rich_text: RichTextItem[] };
  bulleted_list_item?: { rich_text: RichTextItem[] };
  numbered_list_item?: { rich_text: RichTextItem[] };
  code?: { rich_text: RichTextItem[]; language?: string };
  quote?: { rich_text: RichTextItem[] };
  callout?: { rich_text: RichTextItem[]; icon?: { emoji?: string } };
  image?: { file?: { url: string }; external?: { url: string }; caption?: RichTextItem[] };
  video?: { external?: { url: string } };
};

type NotionPage = {
  id: string;
  properties: Record<string, NotionProp>;
  blocks?: NotionBlock[];
};

// ─── Public types ─────────────────────────────────────────────────────────────
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

// ─── Helpers ──────────────────────────────────────────────────────────────────
function isConfigured(): boolean {
  return Boolean(process.env.NOTION_API_KEY && process.env.NOTION_BLOG_DATABASE_ID);
}

function notionHeaders() {
  return {
    Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    "Content-Type": "application/json",
    "Notion-Version": NOTION_VERSION,
  };
}

function richText(prop: NotionProp): string {
  const p = prop as { rich_text?: RichTextItem[] };
  return p?.rich_text?.map((t) => t.plain_text).join("") ?? "";
}

function titleProp(prop: NotionProp): string {
  const p = prop as { title?: RichTextItem[] };
  return p?.title?.map((t) => t.plain_text).join("") ?? "";
}

function selectProp(prop: NotionProp): string {
  const p = prop as { select?: { name: string } | null };
  return p?.select?.name ?? "";
}

function dateProp(prop: NotionProp): string {
  const p = prop as { date?: { start: string } | null };
  return p?.date?.start ?? "";
}

function checkboxProp(prop: NotionProp): boolean {
  const p = prop as { checkbox?: boolean };
  return p?.checkbox ?? false;
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
  const words = html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function pageToPost(page: NotionPage): BlogPost {
  const props = page.properties;
  const iso = dateProp(props["Publish Date"]);
  return {
    id: page.id,
    slug: richText(props["Slug"]),
    title: titleProp(props["Title"]),
    excerpt: richText(props["Excerpt"]),
    category: selectProp(props["Category"]),
    date: formatDate(iso),
    dateISO: iso,
    readTime: estimateReadTime(blocksToHtml(page.blocks ?? [])),
    featured: checkboxProp(props["Featured"]),
  };
}

function inlineToHtml(richTextArr: RichTextItem[]): string {
  if (!Array.isArray(richTextArr)) return "";
  return richTextArr
    .map((span) => {
      let text = (span.plain_text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      if (span.annotations?.bold) text = `<strong>${text}</strong>`;
      if (span.annotations?.italic) text = `<em>${text}</em>`;
      if (span.annotations?.underline) text = `<u>${text}</u>`;
      if (span.annotations?.strikethrough) text = `<s>${text}</s>`;
      if (span.annotations?.code) text = `<code>${text}</code>`;
      if (span.href)
        text = `<a href="${span.href}" class="notion-link" target="_blank" rel="noopener noreferrer">${text}</a>`;
      return text;
    })
    .join("");
}

function blocksToHtml(blocks: NotionBlock[]): string {
  const parts: string[] = [];
  let inBulletList = false;
  let inNumberList = false;

  for (const block of blocks) {
    if (block.type !== "bulleted_list_item" && inBulletList) {
      parts.push("</ul>");
      inBulletList = false;
    }
    if (block.type !== "numbered_list_item" && inNumberList) {
      parts.push("</ol>");
      inNumberList = false;
    }

    switch (block.type) {
      case "paragraph":
        parts.push(`<p class="notion-p">${inlineToHtml(block.paragraph?.rich_text ?? [])}</p>`);
        break;
      case "heading_1":
        parts.push(`<h1 class="notion-h1">${inlineToHtml(block.heading_1?.rich_text ?? [])}</h1>`);
        break;
      case "heading_2":
        parts.push(`<h2 class="notion-h2">${inlineToHtml(block.heading_2?.rich_text ?? [])}</h2>`);
        break;
      case "heading_3":
        parts.push(`<h3 class="notion-h3">${inlineToHtml(block.heading_3?.rich_text ?? [])}</h3>`);
        break;
      case "bulleted_list_item":
        if (!inBulletList) {
          parts.push('<ul class="notion-ul">');
          inBulletList = true;
        }
        parts.push(
          `<li class="notion-li">${inlineToHtml(block.bulleted_list_item?.rich_text ?? [])}</li>`
        );
        break;
      case "numbered_list_item":
        if (!inNumberList) {
          parts.push('<ol class="notion-ol">');
          inNumberList = true;
        }
        parts.push(
          `<li class="notion-li">${inlineToHtml(block.numbered_list_item?.rich_text ?? [])}</li>`
        );
        break;
      case "code":
        parts.push(
          `<pre class="notion-pre"><code class="notion-code language-${block.code?.language ?? "plain"}">${inlineToHtml(block.code?.rich_text ?? [])}</code></pre>`
        );
        break;
      case "quote":
        parts.push(
          `<blockquote class="notion-quote">${inlineToHtml(block.quote?.rich_text ?? [])}</blockquote>`
        );
        break;
      case "divider":
        parts.push(`<hr class="notion-hr" />`);
        break;
      case "callout": {
        const emoji = block.callout?.icon?.emoji ?? "💡";
        parts.push(
          `<div class="notion-callout"><span class="notion-callout-icon">${emoji}</span><div>${inlineToHtml(block.callout?.rich_text ?? [])}</div></div>`
        );
        break;
      }
      case "image": {
        const url = block.image?.file?.url ?? block.image?.external?.url ?? "";
        const caption = inlineToHtml(block.image?.caption ?? []);
        parts.push(
          `<figure class="notion-figure"><img src="${url}" alt="${caption}" class="notion-image" loading="lazy" />${caption ? `<figcaption class="notion-caption">${caption}</figcaption>` : ""}</figure>`
        );
        break;
      }
      case "video": {
        const videoUrl = block.video?.external?.url ?? "";
        if (videoUrl.includes("youtube") || videoUrl.includes("youtu.be")) {
          const videoId = videoUrl.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1];
          if (videoId)
            parts.push(
              `<div class="notion-video-wrapper"><iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen class="notion-video"></iframe></div>`
            );
        }
        break;
      }
    }
  }

  if (inBulletList) parts.push("</ul>");
  if (inNumberList) parts.push("</ol>");

  return parts.join("\n");
}

// ─── Public API ───────────────────────────────────────────────────────────────
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
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) {
      console.warn(`[notion-blog] getAllPosts HTTP ${res.status}`);
      return [];
    }
    const data = (await res.json()) as { results?: NotionPage[] };
    return (data.results ?? []).map(pageToPost).filter((p) => p.slug && p.title);
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
              { property: "Slug", rich_text: { equals: slug } },
              { property: "Status", select: { equals: "Published" } },
            ],
          },
          page_size: 1,
        }),
        next: { revalidate: 86400 },
      }
    );
    if (!queryRes.ok) {
      console.warn(`[notion-blog] getPostBySlug query HTTP ${queryRes.status}`);
      return null;
    }
    const queryData = (await queryRes.json()) as { results?: NotionPage[] };
    const page = queryData.results?.[0];
    if (!page) return null;

    const blocksRes = await fetch(`${NOTION_API_BASE}/blocks/${page.id}/children?page_size=100`, {
      method: "GET",
      headers: notionHeaders(),
      next: { revalidate: 86400 },
    });
    if (!blocksRes.ok) {
      console.warn(`[notion-blog] getPostBySlug blocks HTTP ${blocksRes.status}`);
      return null;
    }
    const blocksData = (await blocksRes.json()) as { results?: NotionBlock[] };
    const contentHtml = blocksToHtml(blocksData.results ?? []);

    return { ...pageToPost(page), readTime: estimateReadTime(contentHtml), contentHtml };
  } catch (err) {
    console.warn("[notion-blog] getPostBySlug failed", err);
    return null;
  }
}
