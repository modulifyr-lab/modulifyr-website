import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getPostBySlug, getAllPosts } from "@/lib/notion-blog";
import { ArrowLeft, Clock, User } from "lucide-react";

// ISR — revalidate every hour so Notion edits go live automatically
export const revalidate = 3600;

// Allow slugs not pre-built at build time (all Notion posts)
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

const categoryColors: Record<string, string> = {
  Architecture: "bg-brand-orange/10 text-brand-orange",
  Engineering: "bg-brand-navy/10 text-brand-navy",
  Backend: "bg-brand-teal/10 text-brand-teal",
  Frontend: "bg-brand-gold/20 text-amber-700",
  DevOps: "bg-brand-teal/10 text-brand-teal",
  Strategy: "bg-brand-orange/10 text-brand-orange",
};

export async function generateStaticParams() {
  // No static posts — all content is from Notion
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const notionPost = await getPostBySlug(slug);
  if (!notionPost) return { title: "Post Not Found | Modulifyr" };
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

// Render Notion HTML content
function NotionContent({ html }: { html: string }) {
  return <div className="notion-content space-y-2" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const notionPost = await getPostBySlug(slug);
  if (!notionPost) notFound();

  // Fetch all posts for sidebar "More Articles"
  const allPosts = await getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: notionPost.title,
    description: notionPost.excerpt,
    datePublished: notionPost.dateISO,
    dateModified: notionPost.dateISO,
    author: {
      "@type": "Organization",
      name: "Modulifyr Engineering",
      url: "https://modulifyr.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Modulifyr",
      url: "https://modulifyr.com",
      logo: {
        "@type": "ImageObject",
        url: "https://modulifyr.com/company-logo.png",
      },
    },
  };

  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
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
              categoryColors[notionPost.category] ?? "bg-white/10 text-white"
            }`}
          >
            {notionPost.category}
          </span>
          <h1 className="font-heading mb-6 text-3xl leading-tight font-bold md:text-5xl">
            {notionPost.title}
          </h1>
          <div className="text-text-muted flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {notionPost.readTime}
            </span>
            <span>·</span>
            <time dateTime={notionPost.dateISO}>{notionPost.date}</time>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> Modulifyr Engineering Team
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-bg-light py-16">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-4">
            <article className="lg:col-span-3">
              <div className="border-border-base rounded-3xl border bg-white p-8 md:p-12">
                {/* Excerpt */}
                <p className="text-text-secondary border-border-base mb-8 border-b pb-8 text-xl leading-relaxed font-medium italic">
                  {notionPost.excerpt}
                </p>

                <NotionContent html={notionPost.contentHtml} />

                {/* Author footer */}
                <div className="border-border-base mt-12 flex items-center gap-4 border-t pt-8">
                  <div className="bg-brand-orange/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <User className="text-brand-orange h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-brand-navy text-sm font-bold">Modulifyr Engineering Team</p>
                    <p className="text-text-muted text-xs">
                      Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal · modulifyr.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/blog"
                  className="group border-border-base hover:border-brand-orange rounded-2xl border bg-white p-5 inline-flex items-center gap-2 transition-colors text-sm font-medium text-text-secondary hover:text-brand-orange"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
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
              {otherPosts.length > 0 && (
                <div className="bg-bg-secondary border-border-base rounded-3xl border p-7">
                  <h3 className="font-heading text-brand-navy mb-3 text-sm font-bold">
                    More Articles
                  </h3>
                  <div className="space-y-3">
                    {otherPosts.map((p) => (
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
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}