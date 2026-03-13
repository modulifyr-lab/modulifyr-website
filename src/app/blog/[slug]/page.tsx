import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { posts as staticPosts } from "../page";

// ─── Defined locally so this file has no dependency on page.tsx exports ──────
const categoryColors: Record<string, string> = {
  Architecture: "bg-brand-orange/10 text-brand-orange",
  Engineering:  "bg-brand-navy/10 text-brand-navy",
  Backend:      "bg-brand-teal/10 text-brand-teal",
  Frontend:     "bg-brand-gold/20 text-amber-700",
  DevOps:       "bg-brand-teal/10 text-brand-teal",
  Strategy:     "bg-brand-orange/10 text-brand-orange",
};
import { getPostBySlug } from "@/lib/notion-blog";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";

// ─── ISR — revalidate every hour so Notion edits go live automatically ────────
export const revalidate = 3600;

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
            className="text-2xl font-heading font-bold text-brand-navy mt-10 mb-3 first:mt-0"
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
  return (
    <div
      className="notion-content space-y-2"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
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
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Header ── */}
      <section className="bg-brand-navy text-white py-20">
        <div className="container-custom max-w-4xl">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-text-muted hover:text-brand-teal text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold mb-6 inline-block ${
              categoryColors[post.category] ?? "bg-white/10 text-white"
            }`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
            <span>·</span>
            <time dateTime={post.dateISO}>{post.date}</time>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> Modulifyr Engineering Team
            </span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
            <article className="lg:col-span-3">
              <div className="bg-white border border-border-base rounded-3xl p-8 md:p-12">
                {/* Excerpt / lede */}
                <p className="text-xl text-text-secondary leading-relaxed mb-8 pb-8 border-b border-border-base font-medium italic">
                  {post.excerpt}
                </p>

                {/* Content — Notion HTML or static markdown */}
                {notionPost ? (
                  <NotionContent html={notionPost.contentHtml} />
                ) : (
                  <StaticContent content={(staticPost as typeof staticPosts[0]).content} />
                )}

                {/* Author footer */}
                <div className="mt-12 pt-8 border-t border-border-base flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">
                      Modulifyr Engineering Team
                    </p>
                    <p className="text-xs text-text-muted">
                      Birtamode, Jhapa, Nepal · modulifyr.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Prev / Next navigation */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group p-5 bg-white border border-border-base rounded-2xl hover:border-brand-orange transition-colors"
                  >
                    <div className="text-xs text-text-muted mb-1 flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3" /> Previous
                    </div>
                    <p className="text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group p-5 bg-white border border-border-base rounded-2xl hover:border-brand-orange transition-colors text-right"
                  >
                    <div className="text-xs text-text-muted mb-1 flex items-center gap-1 justify-end">
                      Next <ArrowRight className="w-3 h-3" />
                    </div>
                    <p className="text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2">
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
              <div className="bg-brand-navy text-white rounded-3xl p-7 sticky top-28">
                <h3 className="font-heading font-bold text-lg mb-3">
                  Put this into practice
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  We build custom systems for businesses in Nepal and globally.
                </p>
                <Link href="/request-proposal">
                  <Button className="w-full" size="sm">
                    Request Proposal
                  </Button>
                </Link>
              </div>
              <div className="bg-bg-secondary border border-border-base rounded-3xl p-7">
                <h3 className="font-heading font-bold text-brand-navy mb-3 text-sm">
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
                        className="block text-sm text-text-secondary hover:text-brand-orange transition-colors leading-snug"
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