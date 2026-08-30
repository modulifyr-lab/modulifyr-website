import { getAllPosts } from "@/lib/notion-blog";

const SITE_URL = "https://modulifyr.com";

function escXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const notionPosts = await getAllPosts();

  const sorted = [...notionPosts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  const items = sorted
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      return `
    <item>
      <title>${escXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escXml(post.excerpt)}</description>
      <pubDate>${new Date(post.dateISO).toUTCString()}</pubDate>
      <category>${escXml(post.category)}</category>
      <author>contact@modulifyr.com (Modulifyr Engineering)</author>
    </item>`.trim();
    })
    .join("\n\n  ");

  const lastBuild = sorted[0]?.dateISO
    ? new Date(sorted[0].dateISO).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Modulifyr Engineering Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Architecture decisions, engineering patterns, and practical perspectives from the Modulifyr team in Birtamode, Nepal.</description>
    <language>en-US</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <managingEditor>contact@modulifyr.com (Modulifyr Engineering)</managingEditor>
    <ttl>1440</ttl>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/company-logo.png</url>
      <title>Modulifyr Engineering Blog</title>
      <link>${SITE_URL}/blog</link>
    </image>

  ${items}

  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
