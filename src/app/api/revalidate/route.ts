// src/app/api/revalidate/route.ts
// Called by Make when a blog post is published, updated, OR deleted in Notion.
// Triggers Next.js ISR on-demand revalidation so changes go live immediately.

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    // ── Secret token check ────────────────────────────────────────────────
    const secret = req.headers.get("x-revalidate-secret");
    if (!secret || secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const slug = body?.slug as string | undefined;

    // ── Always revalidate the blog index ──────────────────────────────────
    // This handles both new posts appearing AND deleted posts disappearing.
    // The blog index now fetches live from Notion, so revalidating it will
    // re-fetch and the deleted post will simply not be in the Notion response.
    revalidatePath("/blog");
    revalidatePath("/feed.xml");

    // ── If a slug is provided, revalidate that specific post page too ─────
    // For deletions: this clears the cached page so Next.js re-runs
    // getPostBySlug, which returns null for deleted posts → shows 404.
    // For updates/new posts: this ensures the content is fresh.
    if (slug) {
      revalidatePath(`/blog/${slug}`);
      console.log(`[revalidate] Revalidated /blog/${slug}`);
    }

    console.log(`[revalidate] Revalidated /blog and /feed.xml`);

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

// GET for easy manual testing from browser
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const slug = req.nextUrl.searchParams.get("slug");

  revalidatePath("/blog");
  revalidatePath("/feed.xml");

  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    slug: slug ?? "all",
    timestamp: new Date().toISOString(),
  });
}
