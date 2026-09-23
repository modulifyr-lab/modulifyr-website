import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getPostBySlug, getAllPosts } from "@/lib/notion-blog";
import { ArrowLeft, Clock, User } from "lucide-react";

export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

const categoryColors: Record<string, string> = {
  Architecture: "bg-[#2D738D]/10 text-[#2D738D]",
  Engineering: "bg-bg-alt text-foreground",
  Backend: "bg-[#2D738D]/10 text-[#2D738D]",
  Frontend: "bg-bg-alt text-foreground",
  DevOps: "bg-[#2D738D]/10 text-[#2D738D]",
  Strategy: "bg-[#2D738D]/10 text-[#2D738D]",
};

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const notionPost = await getPostBySlug(slug);
  if (!notionPost) return { title: "Post Not Found | Modulifyr" };
  return {
    title: `${notionPost.title} | Modulifyr Blog`,
    description: notionPost.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: notionPost.title,
      description: notionPost.excerpt,
      type: "article",
      publishedTime: notionPost.dateISO,
      authors: ["Modulifyr Engineering"],
    },
  };
}

function NotionContent({ html }: { html: string }) {
  return <div className="notion-content space-y-2" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const notionPost = await getPostBySlug(slug);
  if (!notionPost) notFound();

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
      <section className="bg-bg-main border-b border-border-main py-20 transition-colors duration-300">
        <div className="container-custom max-w-4xl">
          <Link
            href="/blog"
            className="text-text-alt hover:text-[#2D738D] mb-8 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span
            className={`mb-6 inline-block rounded-full px-3 py-1 text-caption2 font-bold ${
              categoryColors[notionPost.category] ?? "bg-bg-alt text-foreground"
            }`}
          >
            {notionPost.category}
          </span>
          <h1 className="text-h2 font-bold text-foreground mb-6 leading-tight">
            {notionPost.title}
          </h1>
          <div className="text-text-alt flex items-center gap-4 text-caption1">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#2D738D]" /> {notionPost.readTime}
            </span>
            <span>·</span>
            <time dateTime={notionPost.dateISO}>{notionPost.date}</time>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-[#2D738D]" /> Modulifyr Engineering Team
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-bg-alt/30 py-16 transition-colors duration-300">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-4">
            <article className="lg:col-span-3">
              <div className="bg-bg-main border-border-main rounded-2xl border p-8 md:p-12 shadow-sm">
                <p className="text-body1 text-foreground border-border-main/60 mb-8 border-b pb-8 leading-relaxed font-medium italic">
                  {notionPost.excerpt}
                </p>

                <NotionContent html={notionPost.contentHtml} />

                <div className="border-border-main/60 mt-12 flex items-center gap-4 border-t pt-8">
                  <div className="bg-[#2D738D]/10 text-[#2D738D] flex h-10 w-10 items-center justify-center rounded-full">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-bold">Modulifyr Engineering Team</p>
                    <p className="text-text-dim text-xs">
                      Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal · modulifyr.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/blog"
                  className="group border-border-main hover:border-[#2D738D] text-text-alt hover:text-[#2D738D] inline-flex items-center gap-2 rounded-xl border bg-bg-main p-4 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="bg-bg-alt border-border-main border sticky top-28 rounded-2xl p-7 text-foreground shadow-sm">
                <h3 className="text-h5 font-bold mb-3">Put this into practice</h3>
                <p className="text-text-alt mb-5 text-sm leading-relaxed">
                  We build custom systems for businesses in Nepal and globally.
                </p>
                <Link href="/request-proposal">
                  <Button className="w-full" size="sm">
                    Request Proposal
                  </Button>
                </Link>
              </div>
              {otherPosts.length > 0 && (
                <div className="bg-bg-main border-border-main rounded-2xl border p-7 shadow-sm">
                  <h3 className="text-body1 font-bold text-foreground mb-3">
                    More Articles
                  </h3>
                  <div className="space-y-3">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="text-text-alt hover:text-[#2D738D] block text-sm leading-snug transition-colors"
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
