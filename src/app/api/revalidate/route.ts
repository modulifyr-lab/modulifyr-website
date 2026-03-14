// src/app/api/revalidate/route.ts
// Called by Make when a blog post is published/updated in Notion.
// Triggers Next.js ISR on-demand revalidation so the blog cache refreshes
// immediately instead of waiting for the 1-hour revalidate window.

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    // ── Secret token check — prevent unauthorized cache clears ────────────
    const secret = req.headers.get("x-revalidate-secret");
    if (!secret || secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));

    // ── Revalidate specific slug if provided, otherwise revalidate all blog ─
    const slug = body?.slug as string | undefined;

    if (slug) {
      // Revalidate the specific post page
      revalidatePath(`/blog/${slug}`);
      console.log(`[revalidate] Revalidated /blog/${slug}`);
    }

    // Always revalidate the blog index (featured post, post list)
    revalidatePath("/blog");
    // Also revalidate the RSS feed
    revalidatePath("/feed.xml");

    return NextResponse.json({
      revalidated: true,
      slug: slug ?? "all",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[revalidate] Error:", error);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}

// Also support GET for easy manual testing from browser
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/blog");
  revalidatePath("/feed.xml");

  return NextResponse.json({
    revalidated: true,
    slug: "all",
    timestamp: new Date().toISOString(),
  });
}