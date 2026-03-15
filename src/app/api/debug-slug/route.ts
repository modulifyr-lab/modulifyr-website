// src/app/api/debug-slug/route.ts
// Temporary debug endpoint — remove after fixing
// Visit: /api/debug-slug?slug=test-page

import { NextRequest, NextResponse } from "next/server";

const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") ?? "test-page";
  const apiKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_BLOG_DATABASE_ID;

  // Step 1: Check env vars
  if (!apiKey || !dbId) {
    return NextResponse.json({
      step: "env_check_failed",
      NOTION_API_KEY: apiKey ? `set (${apiKey.slice(0, 8)}...)` : "MISSING",
      NOTION_BLOG_DATABASE_ID: dbId ? `set` : "MISSING",
    }, { status: 500 });
  }

  // Step 2: Query by slug WITHOUT status filter to see if it exists at all
  const resNoFilter = await fetch(
    `${NOTION_API_BASE}/databases/${dbId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": NOTION_VERSION,
      },
      body: JSON.stringify({
        filter: {
          property: "Slug",
          rich_text: { equals: slug },
        },
        page_size: 3,
      }),
      cache: "no-store",
    }
  );

  const dataNoFilter = await resNoFilter.json();

  // Step 3: Query with status filter (exactly what notion-blog.ts does)
  const resWithFilter = await fetch(
    `${NOTION_API_BASE}/databases/${dbId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": NOTION_VERSION,
      },
      body: JSON.stringify({
        filter: {
          and: [
            { property: "Slug", rich_text: { equals: slug } },
            { property: "Status", select: { equals: "Published" } },
          ],
        },
        page_size: 1,
      }),
      cache: "no-store",
    }
  );

  const dataWithFilter = await resWithFilter.json();

  // Step 4: Show raw property names and values of the found page
  const page = dataNoFilter.results?.[0];
  const rawProperties = page
    ? Object.fromEntries(
        Object.entries(page.properties as Record<string, any>).map(([k, v]) => [
          k,
          {
            type: v.type,
            value:
              v.type === "select"
                ? v.select
                : v.type === "rich_text"
                ? v.rich_text?.map((t: any) => t.plain_text).join("")
                : v.type === "title"
                ? v.title?.map((t: any) => t.plain_text).join("")
                : v.type === "checkbox"
                ? v.checkbox
                : v.type === "date"
                ? v.date
                : "see raw",
          },
        ])
      )
    : null;

  return NextResponse.json({
    slug_queried: slug,
    env: {
      NOTION_API_KEY: `set (${apiKey.slice(0, 8)}...)`,
      NOTION_BLOG_DATABASE_ID: dbId,
    },
    query_without_status_filter: {
      http_status: resNoFilter.status,
      results_count: dataNoFilter.results?.length ?? 0,
    },
    query_with_status_filter: {
      http_status: resWithFilter.status,
      results_count: dataWithFilter.results?.length ?? 0,
      error: dataWithFilter.message ?? null,
    },
    raw_properties_of_first_match: rawProperties,
    full_page_id: page?.id ?? null,
  });
}