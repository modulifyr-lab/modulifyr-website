import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET() {
  const apiKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_BLOG_DATABASE_ID;

  // Step 1: Are env vars even set?
  if (!apiKey || !dbId) {
    return NextResponse.json({
      step: "env_check",
      error: "Missing env vars",
      NOTION_API_KEY: apiKey ? `set (${apiKey.slice(0, 12)}...)` : "MISSING",
      NOTION_BLOG_DATABASE_ID: dbId ? `set (${dbId})` : "MISSING",
    }, { status: 500 });
  }

  // Step 2: Can we query the database?
  try {
    // src/app/api/debug-notion/route.ts — update the try block to:
const res = await fetch(
  `https://api.notion.com/v1/databases/${dbId}/query`,
  {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({ page_size: 3 }),
  }
);
const data = await res.json();
return NextResponse.json({ status: res.status, results: data.results?.length });  
  } catch (err: any) {
    return NextResponse.json({
      step: "notion_query_failed",
      NOTION_API_KEY: `set (${apiKey.slice(0, 12)}...)`,
      NOTION_BLOG_DATABASE_ID: dbId,
      error: err?.message ?? String(err),
      status_code: err?.status ?? "unknown",
      code: err?.code ?? "unknown",
    }, { status: 500 });
  }
}