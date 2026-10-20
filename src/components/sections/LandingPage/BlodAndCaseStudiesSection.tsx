import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogAndCaseStudiesSection() {
  return (
    <section className="bg-bg-alt/40 border-border-main border-b py-24 transition-colors duration-300">
      <div className="container-custom">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              OUR BLOGS &amp; CASESTUDIES
            </span>
            <h2 className="text-h2 text-foreground font-bold">
              Stories Behind the Solutions We Build
            </h2>
            <p className="text-body1 text-text-alt">
              Explore our latest blogs and case studies to discover our ideas, approach, and the
              digital solutions we create.
            </p>
          </div>
          <Link href="/blog">
            <button
              type="button"
              className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>

        {/* 3-card blog row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Link
            href="/blog"
            className="bg-bg-main border-border-main group flex flex-col justify-between overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:border-[#2D738D]/60"
          >
            <div className="space-y-3 p-6">
              <span className="text-caption2 font-bold text-[#2D738D] uppercase">
                Engineering Insights
              </span>
              <h3 className="text-h5 text-foreground font-bold transition-colors group-hover:text-[#2D738D]">
                A Practical Approach to Digital Innovation
              </h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Discover practical insights on technology, design, and digital transformation.
              </p>
            </div>
            <div className="text-caption1 flex items-center gap-1 px-6 pb-6 font-semibold text-[#2D738D]">
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          <Link
            href="/blog"
            className="bg-bg-main border-border-main group flex flex-col justify-between overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:border-[#2D738D]/60"
          >
            <div className="space-y-3 p-6">
              <span className="text-caption2 font-bold text-[#2D738D] uppercase">
                Case Analysis
              </span>
              <h3 className="text-h5 text-foreground font-bold transition-colors group-hover:text-[#2D738D]">
                From Challenges to Digital Solutions
              </h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Explore the thinking, process, and solutions behind our work with organizations.
              </p>
            </div>
            <div className="text-caption1 flex items-center gap-1 px-6 pb-6 font-semibold text-[#2D738D]">
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          <Link
            href="/blog"
            className="bg-bg-main border-border-main group flex flex-col justify-between overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:border-[#2D738D]/60"
          >
            <div className="space-y-3 p-6">
              <span className="text-caption2 font-bold text-[#2D738D] uppercase">
                Discovery Guide
              </span>
              <h3 className="text-h5 text-foreground font-bold transition-colors group-hover:text-[#2D738D]">
                What to prepare before your discovery call with us
              </h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Explore the thinking, process, and solutions behind our work with organizations.
              </p>
            </div>
            <div className="text-caption1 flex items-center gap-1 px-6 pb-6 font-semibold text-[#2D738D]">
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
