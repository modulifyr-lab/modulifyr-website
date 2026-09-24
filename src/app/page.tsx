import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { ProcessSection } from "@/components/ui/ProcessSection";
import { IntegrationsShowcase } from "@/components/ui/IntegrationsShowcase";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ShieldCheck, Globe, Clock, DollarSign, CheckCircle, ArrowRight, Layers, CreditCard, UserCheck, Eye } from "lucide-react";

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
      <section className="relative overflow-hidden bg-bg-main py-20 md:py-28 transition-colors duration-300">
        {/* Background perspective grid pattern & radiating glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: "var(--gradient-grid)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[600px] rounded-full blur-3xl pointer-events-none opacity-25"
          style={{ background: "var(--gradient-primary)" }}
        />

        <div className="container-custom relative z-10 flex flex-col items-center text-center max-w-4xl space-y-8">
          <span className="text-special1 font-bold text-[#2D738D] bg-[#2D738D]/10 border border-[#2D738D]/20 rounded-full px-4 py-1.5 tracking-wider uppercase">
            CUSTOM SOFTWARE SYSTEM
          </span>

          <h1 className="text-h1 font-bold text-foreground leading-[1.1]">
            Built Around Your <span className="text-[#E8A33D]">Business</span>. Built to Scale.
          </h1>

          <p className="text-body1 text-text-alt max-w-2xl leading-relaxed">
            We build custom ERP platforms, workflow automation, integrations, and digital
            infrastructure for growing organizations, designed around how your business actually
            works.
          </p>

          {/* Trust signals row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-caption1 font-semibold text-text-alt">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#2D738D]" /> Response within 24 hours
            </span>
            <span className="hidden sm:inline text-text-dim">•</span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-[#2D738D]" /> Transparent pricing
            </span>
            <span className="hidden sm:inline text-text-dim">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-[#2D738D]" /> No hidden cost
            </span>
          </div>

          {/* Primary CTA */}
          <div className="pt-2">
            <Link href="/contact">
              <Button size="lg" className="shadow-md">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Trust signals row 2 */}
          <div className="flex items-center gap-6 text-caption1 text-text-dim pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#2D738D]" /> NDA Available
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-[#2D738D]" /> Global Collaboration
            </span>
          </div>
        </div>
      </section>

      {/* Below Hero: Continuous Logo Marquee */}
      <LogoMarquee />

      {/* ── 2. WHY MODULIFYR ───────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-alt/60 border-b border-border-main transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              WHY MODULIFYR
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              Because your business shouldn&apos;t have to adapt to a software.
            </h2>
            <p className="text-subhead text-text-alt">
              Flexible systems, clear costs, and a transparent process.
            </p>
          </div>

          {/* 4 Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm hover:border-[#2D738D]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-h5 font-bold text-foreground">Modular by Design</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Start with what you need today and add capabilities as your business grows, without
                rebuilding from scratch.
              </p>
            </div>

            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm hover:border-[#2D738D]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-h5 font-bold text-foreground">Pay as we Build</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Pay as work is delivered, so you can see progress, manage costs, and avoid large
                upfront commitments.
              </p>
            </div>

            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm hover:border-[#2D738D]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-h5 font-bold text-foreground">Founder-led engineering</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Work directly with the founder leading your project, with secure, maintainable code
                tailored to your needs.
              </p>
            </div>

            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm hover:border-[#2D738D]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-h5 font-bold text-foreground">Transparent Process</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Know what&apos;s being built, when it&apos;s happening, and what it costs at every stage,
                with no surprises along the way.
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
      <section className="py-24 bg-bg-alt/40 border-b border-border-main transition-colors duration-300">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
                OUR BLOGS &amp; CASESTUDIES
              </span>
              <h2 className="text-h2 font-bold text-foreground">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/blog"
              className="bg-bg-main border-border-main rounded-2xl border overflow-hidden shadow-sm hover:border-[#2D738D]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <span className="text-caption2 font-bold text-[#2D738D] uppercase">
                  Engineering Insights
                </span>
                <h3 className="text-h5 font-bold text-foreground group-hover:text-[#2D738D] transition-colors">
                  A Practical Approach to Digital Innovation
                </h3>
                <p className="text-body2 text-text-alt leading-relaxed">
                  Discover practical insights on technology, design, and digital transformation.
                </p>
              </div>
              <div className="px-6 pb-6 text-caption1 font-semibold text-[#2D738D] flex items-center gap-1">
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>

            <Link
              href="/blog"
              className="bg-bg-main border-border-main rounded-2xl border overflow-hidden shadow-sm hover:border-[#2D738D]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <span className="text-caption2 font-bold text-[#2D738D] uppercase">
                  Case Analysis
                </span>
                <h3 className="text-h5 font-bold text-foreground group-hover:text-[#2D738D] transition-colors">
                  From Challenges to Digital Solutions
                </h3>
                <p className="text-body2 text-text-alt leading-relaxed">
                  Explore the thinking, process, and solutions behind our work with organizations.
                </p>
              </div>
              <div className="px-6 pb-6 text-caption1 font-semibold text-[#2D738D] flex items-center gap-1">
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>

            <Link
              href="/blog"
              className="bg-bg-main border-border-main rounded-2xl border overflow-hidden shadow-sm hover:border-[#2D738D]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <span className="text-caption2 font-bold text-[#2D738D] uppercase">
                  Discovery Guide
                </span>
                <h3 className="text-h5 font-bold text-foreground group-hover:text-[#2D738D] transition-colors">
                  What to prepare before your discovery call with us
                </h3>
                <p className="text-body2 text-text-alt leading-relaxed">
                  Explore the thinking, process, and solutions behind our work with organizations.
                </p>
              </div>
              <div className="px-6 pb-6 text-caption1 font-semibold text-[#2D738D] flex items-center gap-1">
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. FEATURED CASE STUDY ────────────────────────────────────────── */}
      <section className="py-24 bg-bg-main transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual Panel */}
            <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden border border-border-main shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="The Planning Bord ERP Platform"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <span className="text-caption1 font-bold text-white bg-[#2D738D] px-3 py-1 rounded-md">
                  ERP Platform
                </span>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
                Featured Case Study
              </span>
              <h2 className="text-h2 font-bold text-foreground">
                The Planning Bord
              </h2>
              <p className="text-body1 text-text-alt leading-relaxed">
                The Planning Bord is an integrated ERP platform designed to bring essential
                business operations into one connected system. It combines inventory, HR, project
                management, finance, and automation in a unified platform. The solution helps modern
                teams streamline daily workflows, improve visibility, and manage their operations
                more efficiently.
              </p>
              <div className="pt-2">
                <Link href="/work">
                  <button
                    type="button"
                    className="bg-[#2D738D] hover:bg-[#235b70] text-white inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-100 ease-in cursor-pointer"
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
      <section className="py-24 bg-bg-alt border-t border-border-main relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute -left-20 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: "var(--gradient-primary)" }}
        />

        <div className="container-custom relative z-10 text-center max-w-3xl space-y-6">
          <h2 className="text-display font-extrabold text-foreground">
            Ready To Build Together?
          </h2>
          <p className="text-subhead text-text-alt">
            Better technology starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/request-proposal">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Request a Proposal
              </button>
            </Link>
            <Link href="/contact">
              <button
                type="button"
                className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt rounded-lg border px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
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
