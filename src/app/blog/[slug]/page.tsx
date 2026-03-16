import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { posts as staticPosts } from "../page";

// ─── Defined locally so this file has no dependency on page.tsx exports ──────
const categoryColors: Record<string, string> = {
  Architecture: "bg-brand-orange/10 text-brand-orange",
  Engineering: "bg-brand-navy/10 text-brand-navy",
  Backend: "bg-brand-teal/10 text-brand-teal",
  Frontend: "bg-brand-gold/20 text-amber-700",
  DevOps: "bg-brand-teal/10 text-brand-teal",
  Strategy: "bg-brand-orange/10 text-brand-orange",
};
import { getPostBySlug } from "@/lib/notion-blog";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";

// ─── ISR — revalidate every hour so Notion edits go live automatically ────────
export const revalidate = 3600;

// ─── KEY FIX: allow slugs not in generateStaticParams (i.e. Notion posts) ────
// Without this, Next.js returns 404 for ANY slug not pre-built at build time.
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return staticPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Try Notion first
  const notionPost = await getPostBySlug(slug);
  if (notionPost) {
    return {
      title: `${notionPost.title} | Modulifyr Blog`,
      description: notionPost.excerpt,
      openGraph: {
        title: notionPost.title,
        description: notionPost.excerpt,
        type: "article",
        publishedTime: notionPost.dateISO,
        authors: ["Modulifyr Engineering"],
      },
    };
  }
  // Fall back to static
  const post = staticPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | Modulifyr" };
  return {
    title: `${post.title} | Modulifyr Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      authors: ["Modulifyr Engineering"],
    },
  };
}

// ─── Render static post content (markdown-like → JSX) ────────────────────────
function StaticContent({ content }: { content: string }) {
  const sections = content
    .trim()
    .split("\n\n")
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return { type: "heading", text: block.replace(/\*\*/g, "") };
      }
      return {
        type: "paragraph",
        text: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
      };
    });

  return (
    <div className="space-y-5">
      {sections.map((section, i) =>
        section.type === "heading" ? (
          <h2
            key={i}
            className="font-heading text-brand-navy mt-10 mb-3 text-2xl font-bold first:mt-0"
          >
            {section.text}
          </h2>
        ) : (
          <p
            key={i}
            className="text-text-secondary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section.text }}
          />
        )
      )}
    </div>
  );
}

// ─── Render Notion HTML content ───────────────────────────────────────────────
function NotionContent({ html }: { html: string }) {
  return <div className="notion-content space-y-2" dangerouslySetInnerHTML={{ __html: html }} />;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // 1. Try to load from Notion
  const notionPost = await getPostBySlug(slug);

  // 2. Fall back to static
  const staticPost = staticPosts.find((p) => p.slug === slug);

  // 3. 404 if neither found
  if (!notionPost && !staticPost) notFound();

  const post = notionPost ?? staticPost!;

  // Navigation (based on static list order — works for both modes)
  const currentIndex = staticPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? staticPosts[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < staticPosts.length - 1
      ? staticPosts[currentIndex + 1]
      : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: "Modulifyr Engineering",
      url: "https://modulifyr.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Modulifyr",
      url: "https://modulifyr.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://modulifyr.vercel.app/company-logo.png",
      },
    },
  };

  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Header ── */}
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-custom max-w-4xl">
          <Link
            href="/blog"
            className="text-text-muted hover:text-brand-teal mb-8 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span
            className={`mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold ${
              categoryColors[post.category] ?? "bg-white/10 text-white"
            }`}
          >
            {post.category}
          </span>
          <h1 className="font-heading mb-6 text-3xl leading-tight font-bold md:text-5xl">
            {post.title}
          </h1>
          <div className="text-text-muted flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
            <span>·</span>
            <time dateTime={post.dateISO}>{post.date}</time>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> Modulifyr Engineering Team
            </span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-bg-light py-16">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-4">
            <article className="lg:col-span-3">
              <div className="border-border-base rounded-3xl border bg-white p-8 md:p-12">
                {/* Excerpt / lede */}
                <p className="text-text-secondary border-border-base mb-8 border-b pb-8 text-xl leading-relaxed font-medium italic">
                  {post.excerpt}
                </p>

                {/* Content — Notion HTML or static markdown */}
                {notionPost ? (
                  <NotionContent html={notionPost.contentHtml} />
                ) : (
                  <StaticContent content={(staticPost as (typeof staticPosts)[0]).content} />
                )}

                {/* Author footer */}
                <div className="border-border-base mt-12 flex items-center gap-4 border-t pt-8">
                  <div className="bg-brand-orange/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <User className="text-brand-orange h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-brand-navy text-sm font-bold">Modulifyr Engineering Team</p>
                    <p className="text-text-muted text-xs">
                      Birtamode, Jhapa, Nepal · modulifyr.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Prev / Next navigation */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group border-border-base hover:border-brand-orange rounded-2xl border bg-white p-5 transition-colors"
                  >
                    <div className="text-text-muted mb-1 flex items-center gap-1 text-xs">
                      <ArrowLeft className="h-3 w-3" /> Previous
                    </div>
                    <p className="text-brand-navy group-hover:text-brand-orange line-clamp-2 text-sm font-bold transition-colors">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group border-border-base hover:border-brand-orange rounded-2xl border bg-white p-5 text-right transition-colors"
                  >
                    <div className="text-text-muted mb-1 flex items-center justify-end gap-1 text-xs">
                      Next <ArrowRight className="h-3 w-3" />
                    </div>
                    <p className="text-brand-navy group-hover:text-brand-orange line-clamp-2 text-sm font-bold transition-colors">
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="flex flex-col gap-6">
              <div className="bg-brand-navy sticky top-28 rounded-3xl p-7 text-white">
                <h3 className="font-heading mb-3 text-lg font-bold">Put this into practice</h3>
                <p className="text-text-muted mb-5 text-sm leading-relaxed">
                  We build custom systems for businesses in Nepal and globally.
                </p>
                <Link href="/request-proposal">
                  <Button className="w-full" size="sm">
                    Request Proposal
                  </Button>
                </Link>
              </div>
              <div className="bg-bg-secondary border-border-base rounded-3xl border p-7">
                <h3 className="font-heading text-brand-navy mb-3 text-sm font-bold">
                  More Articles
                </h3>
                <div className="space-y-3">
                  {staticPosts
                    .filter((p) => p.slug !== slug)
                    .slice(0, 4)
                    .map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="text-text-secondary hover:text-brand-orange block text-sm leading-snug transition-colors"
                      >
                        {p.title}
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
