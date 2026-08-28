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

// ISR — revalidate every hour; Make webhook handles instant updates
export const revalidate = 3600;

// Empty static posts — all content comes from Notion
export const staticPosts: never[] = [];

// Keep the old export name for backward compatibility with [slug]/page.tsx
export const posts = staticPosts;

const categoryColors: Record<string, string> = {
  Architecture: "bg-brand-orange/10 text-brand-orange",
  Engineering: "bg-brand-navy/10 text-foreground",
  Backend: "bg-brand-teal/10 text-brand-teal",
  Frontend: "bg-brand-gold/20 text-amber-700",
  DevOps: "bg-brand-teal/10 text-brand-teal",
  Strategy: "bg-brand-orange/10 text-brand-orange",
};

export default async function BlogPage() {
  const notionPosts = await getAllPosts();

  // Sort by date descending
  const allPosts = [...notionPosts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  const featured = allPosts.find((p) => p.featured) ?? allPosts[0];
  const rest = allPosts.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="flex w-full flex-col">
      <section className="bg-bg-secondary border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-scale">
              <span className="text-brand-orange mb-4 block text-xs font-bold tracking-widest uppercase">
                Technical Log
              </span>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold md:text-6xl text-foreground">
                Engineering <span className="text-brand-orange">Insights</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-secondary text-xl leading-relaxed">
                Architecture decisions, engineering patterns, and practical perspectives from the
                Modulifyr team — including what we've learned building custom software for businesses
                in Nepal.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-bg-light border-border-base border-b py-16">
          <div className="container-custom">
            <Reveal variant="fade-scale">
              <p className="text-brand-orange mb-6 text-xs font-bold tracking-widest uppercase">
                Featured Post
              </p>
            </Reveal>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <Reveal variant="fade-scale" delay={100}>
                <div className="bg-brand-navy relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl">
                  <div className="from-brand-navy via-brand-navy/90 to-brand-teal/30 absolute inset-0 bg-gradient-to-br" />
                  <div className="relative z-10 p-8 text-center">
                    <p className="text-brand-teal text-sm font-bold tracking-widest uppercase">
                      Engineering Series
                    </p>
                  </div>
                </div>
              </Reveal>
              <div className="flex flex-col gap-5">
                <Reveal variant="fade-scale" delay={100}>
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${categoryColors[featured.category] ?? "bg-bg-secondary text-text-muted"}`}
                  >
                    {featured.category}
                  </span>
                </Reveal>
                <Reveal variant="fade-up" delay={150}>
                  <h2 className="font-heading text-foreground text-3xl leading-tight font-bold text-foreground">
                    {featured.title}
                  </h2>
                </Reveal>
                <Reveal variant="fade-up" delay={200}>
                  <p className="text-text-secondary leading-relaxed">{featured.excerpt}</p>
                </Reveal>
                <Reveal variant="fade-up" delay={250}>
                  <div className="text-text-muted flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                </Reveal>
                <Reveal variant="fade-up" delay={300}>
                  <Link href={`/blog/${featured.slug}`}>
                    <Button className="group w-fit">
                      Read Article{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-bg-light py-20">
        <div className="container-custom">
          {allPosts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-text-muted text-lg">
                No posts published yet. Check back soon.
              </p>
            </div>
          ) : rest.length === 0 ? (
            <p className="text-text-muted py-12 text-center">Only one post so far. More coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, idx) => (
                <Reveal key={`${post.slug}-${idx}`} variant="fade-up" delay={idx * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <Card className="flex h-full flex-col group-hover:-translate-y-2">
                      <span
                        className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-bold ${categoryColors[post.category] || "bg-bg-secondary text-text-muted"}`}
                      >
                        {post.category}
                      </span>
                      <CardTitle className="group-hover:text-brand-orange mb-3 text-lg leading-snug transition-colors">
                        {post.title}
                      </CardTitle>
                      <p className="text-text-secondary mb-4 flex-grow text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="border-border-base mt-auto flex items-center justify-between border-t pt-4">
                        <div className="text-text-muted flex items-center gap-3 text-xs">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.readTime}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <span className="text-brand-orange flex items-center gap-1 text-xs font-bold">
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
