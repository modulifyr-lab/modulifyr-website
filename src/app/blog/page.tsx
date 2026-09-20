import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/notion-blog";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Engineering Blog | Modulifyr — Software Insights for Nepal & Beyond",
  description:
    "Technical insights, architecture patterns, and practical engineering perspectives from the Modulifyr team in Birtamode, Nepal.",
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 3600;
export const staticPosts: never[] = [];
export const posts = staticPosts;

const categoryColors: Record<string, string> = {
  Architecture: "bg-[#2D738D]/10 text-[#2D738D]",
  Engineering: "bg-bg-alt text-foreground",
  Backend: "bg-[#2D738D]/10 text-[#2D738D]",
  Frontend: "bg-bg-alt text-foreground",
  DevOps: "bg-[#2D738D]/10 text-[#2D738D]",
  Strategy: "bg-[#2D738D]/10 text-[#2D738D]",
};

export default async function BlogPage() {
  const notionPosts = await getAllPosts();

  const allPosts = [...notionPosts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  const featured = allPosts.find((p) => p.featured) ?? allPosts[0];
  const rest = allPosts.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="flex w-full flex-col">
      <section className="bg-bg-main border-b border-border-main py-24 transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-scale">
              <span className="text-caption1 font-bold text-[#2D738D] mb-4 block tracking-wider uppercase">
                Technical Log
              </span>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="text-h1 font-bold text-foreground mb-6 leading-tight">
                Engineering Insights
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-body1 text-text-alt leading-relaxed">
                Architecture decisions, engineering patterns, and practical perspectives from the
                Modulifyr team — including what we&apos;ve learned building custom software for
                businesses in Nepal and worldwide.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="bg-bg-alt/40 border-b border-border-main py-16 transition-colors duration-300">
          <div className="container-custom">
            <Reveal variant="fade-scale">
              <p className="text-caption1 font-bold text-[#2D738D] mb-6 tracking-wider uppercase">
                Featured Post
              </p>
            </Reveal>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <Reveal variant="fade-scale" delay={100}>
                <div className="bg-[#0F1724] relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl border border-border-main">
                  <div className="from-[#0F1724] via-[#0F1724]/90 to-[#2D738D]/30 absolute inset-0 bg-gradient-to-br" />
                  <div className="relative z-10 p-8 text-center">
                    <p className="text-caption1 font-bold text-[#B8E0E9] tracking-wider uppercase">
                      Engineering Series
                    </p>
                  </div>
                </div>
              </Reveal>
              <div className="flex flex-col gap-5">
                <Reveal variant="fade-scale" delay={100}>
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-caption2 font-bold ${categoryColors[featured.category] ?? "bg-bg-alt text-text-dim"}`}
                  >
                    {featured.category}
                  </span>
                </Reveal>
                <Reveal variant="fade-up" delay={150}>
                  <h2 className="text-h3 font-bold text-foreground leading-tight">
                    {featured.title}
                  </h2>
                </Reveal>
                <Reveal variant="fade-up" delay={200}>
                  <p className="text-body2 text-text-alt leading-relaxed">{featured.excerpt}</p>
                </Reveal>
                <Reveal variant="fade-up" delay={250}>
                  <div className="text-text-dim flex items-center gap-4 text-caption1 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                </Reveal>
                <Reveal variant="fade-up" delay={300}>
                  <Link href={`/blog/${featured.slug}`}>
                    <button
                      type="button"
                      className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-100 ease-in cursor-pointer inline-flex items-center gap-2"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-bg-main py-20 transition-colors duration-300">
        <div className="container-custom">
          {allPosts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-body1 text-text-dim">No posts published yet. Check back soon.</p>
            </div>
          ) : rest.length === 0 ? (
            <p className="text-body2 text-text-dim py-12 text-center">
              Only one post so far. More coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, idx) => (
                <Reveal key={`${post.slug}-${idx}`} variant="fade-up" delay={idx * 100}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col group-hover:border-[#2D738D]/60 transition-all">
                      <span
                        className={`mb-4 w-fit rounded-full px-3 py-1 text-caption2 font-bold ${categoryColors[post.category] || "bg-bg-alt text-text-dim"}`}
                      >
                        {post.category}
                      </span>
                      <CardTitle className="group-hover:text-[#2D738D] mb-3 text-h5 transition-colors">
                        {post.title}
                      </CardTitle>
                      <p className="text-body2 text-text-alt mb-4 flex-grow leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="border-border-main mt-auto flex items-center justify-between border-t pt-4">
                        <div className="text-caption2 text-text-dim flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.readTime}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <span className="text-caption1 font-bold text-[#2D738D] flex items-center gap-1">
                          Read <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
