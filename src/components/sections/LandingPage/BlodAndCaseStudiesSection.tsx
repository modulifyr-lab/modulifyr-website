import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

const POSTS = [
  {
    title: "A Practical Approach to Digital Innovation",
    description: "Discover practical insights on technology, design, and digital transformation.",
    image: "/blog/blog-one.jpg",
    alt: "Design system components and widget templates on a screen",
    href: "/blog",
  },
  {
    title: "From Challenges to Digital Solutions",
    description: "Explore the thinking, process, and solutions behind our work with organizations.",
    image: "/blog/blog-two.jpg",
    alt: "Design tool layers panel open on a laptop",
    href: "/blog",
  },
  {
    title: "What to prepare before your discovery call with us",
    description: "Explore the thinking, process, and solutions behind our work with organizations.",
    image: "/blog/blog-three.jpg",
    alt: "Two monitors showing design work on a desk",
    href: "/blog",
  },
];

export function BlogAndCaseStudiesSection() {
  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="font-sans text-[20px] leading-[110%] font-normal text-[#FFC24B]">
              OUR BLOGS &amp; CASESTUDIES
            </span>
            <h2 className="text-on-background mt-2 text-4xl leading-[1.1] font-bold">
              Stories Behind the Solutions We Build
            </h2>
            <p className="text-on-background mt-3 max-w-xl text-base leading-[1.3]">
              Explore our latest blogs and case studies to discover our ideas, approach, and the
              digital solutions we create.
            </p>
          </div>

          <Link href="/blog" className="group inline-block shrink-0 self-start md:self-center">
            <Button variant="outline">
              View All Articles
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post, index) => (
            <Link
              key={post.title}
              href={post.href}
              className="group border-outline/20 bg-surface flex flex-col overflow-hidden rounded-3xl border transition-colors duration-300 hover:border-[#4FB6C6]/50 focus-visible:ring-2 focus-visible:ring-[#4FB6C6] focus-visible:outline-none"
            >
              <div className="relative aspect-[21/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pt-5 pb-6">
                <h3 className="text-on-background text-xl leading-snug font-medium transition-colors duration-300 group-hover:text-[#4FB6C6]">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant mt-3 text-base leading-[1.4]">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
