import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { ProcessSection } from "@/components/ui/ProcessSection";
import { IntegrationsShowcase } from "@/components/ui/IntegrationsShowcase";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  ShieldCheck,
  Globe,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Layers,
  CreditCard,
  UserCheck,
  Eye,
} from "lucide-react";
import { HeroSection } from "@/components/sections/Hero";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Modulifyr",
    url: "https://modulifyr.com",
    logo: "https://modulifyr.com/company-logo.png",
    sameAs: [
      "https://www.instagram.com/modulifyr/",
      "https://x.com/modulifyr",
      "https://web.facebook.com/profile.php?id=61591920842310",
      "https://www.linkedin.com/company/modulifyr/",
      "https://clutch.co/profile/modulifyr",
      "https://github.com/Modulifyr",
      "https://themanifest.com/company/modulifyr",
      "https://rocketreach.co/modulifyr-profile_b6410cbccbf776ff",
      "https://www.trustpilot.com/review/modulifyr.com",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gauri Tol, Ward 1",
      addressLocality: "Birtamode",
      addressRegion: "Jhapa",
      addressCountry: "NP",
    },
  };

  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <HeroSection />

      {/* Below Hero: Continuous Logo Marquee */}
      <LogoMarquee />

      {/* ── 2. WHY MODULIFYR ───────────────────────────────────────────────── */}
      <section className="bg-bg-alt/60 border-border-main border-b py-24 transition-colors duration-300">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              WHY MODULIFYR
            </span>
            <h2 className="text-h2 text-foreground font-bold">
              Because your business shouldn&apos;t have to adapt to a software.
            </h2>
            <p className="text-subhead text-text-alt">
              Flexible systems, clear costs, and a transparent process.
            </p>
          </div>

          {/* 4 Card Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm transition-colors hover:border-[#2D738D]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-h5 text-foreground font-bold">Modular by Design</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Start with what you need today and add capabilities as your business grows, without
                rebuilding from scratch.
              </p>
            </div>

            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm transition-colors hover:border-[#2D738D]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-h5 text-foreground font-bold">Pay as we Build</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Pay as work is delivered, so you can see progress, manage costs, and avoid large
                upfront commitments.
              </p>
            </div>

            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm transition-colors hover:border-[#2D738D]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-h5 text-foreground font-bold">Founder-led engineering</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Work directly with the founder leading your project, with secure, maintainable code
                tailored to your needs.
              </p>
            </div>

            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm transition-colors hover:border-[#2D738D]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-h5 text-foreground font-bold">Transparent Process</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Know what&apos;s being built, when it&apos;s happening, and what it costs at every
                stage, with no surprises along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES SECTION ───────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 4. HOW WE WORK (5-PHASE PROCESS) ──────────────────────────────── */}
      <ProcessSection />

      {/* ── 5. INTEGRATIONS SHOWCASE ──────────────────────────────────────── */}
      <IntegrationsShowcase />

      {/* ── 6. BLOGS & CASE STUDIES ───────────────────────────────────────── */}
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

      {/* ── 7. FEATURED CASE STUDY ────────────────────────────────────────── */}
      <section className="bg-bg-main py-24 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Visual Panel */}
            <div className="border-border-main group relative aspect-video overflow-hidden rounded-2xl border shadow-xl lg:col-span-6">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="The Planning Bord ERP Platform"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
                <span className="text-caption1 rounded-md bg-[#2D738D] px-3 py-1 font-bold text-white">
                  ERP Platform
                </span>
              </div>
            </div>

            {/* Right Details */}
            <div className="space-y-6 lg:col-span-6">
              <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
                Featured Case Study
              </span>
              <h2 className="text-h2 text-foreground font-bold">The Planning Bord</h2>
              <p className="text-body1 text-text-alt leading-relaxed">
                The Planning Bord is an integrated ERP platform designed to bring essential business
                operations into one connected system. It combines inventory, HR, project management,
                finance, and automation in a unified platform. The solution helps modern teams
                streamline daily workflows, improve visibility, and manage their operations more
                efficiently.
              </p>
              <div className="pt-2">
                <Link href="/work">
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#2D738D] px-6 py-3 text-sm font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ACCORDION ──────────────────────────────────────────────── */}
      <FaqAccordion />

      {/* ── 9. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-bg-alt border-border-main relative overflow-hidden border-t py-24 transition-colors duration-300">
        <div
          className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-20 h-80 w-80 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />

        <div className="container-custom relative z-10 max-w-3xl space-y-6 text-center">
          <h2 className="text-display text-foreground font-extrabold">Ready To Build Together?</h2>
          <p className="text-subhead text-text-alt">Better technology starts here.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/request-proposal">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-[#2D738D] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
              >
                Request a Proposal
              </button>
            </Link>
            <Link href="/contact">
              <button
                type="button"
                className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt cursor-pointer rounded-lg border px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in"
              >
                Schedule Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
