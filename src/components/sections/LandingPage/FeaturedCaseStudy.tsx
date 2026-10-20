import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedCaseStudy() {
  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT: image */}
          <div className="relative aspect-[1.62/1] w-full overflow-hidden rounded-xl lg:col-span-6">
            <Image
              src="/case-studies/planning-bord.jpg"
              alt="Team reviewing color palettes and designs for The Planning Bord"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* RIGHT: details */}
          <div className="lg:col-span-6">
            <span className="font-sans text-xl leading-[110%] font-normal text-[#FFC24B]">
              Featured Case Study
            </span>
            <h2 className="text-on-background mt-4 text-4xl leading-[1.1] font-bold">
              The Planning Bord
            </h2>
            <p className="text-on-background mt-5 max-w-xl text-base leading-[1.35]">
              The Planning Bord is an integrated ERP platform designed to bring essential business
              operations into one connected system. It combines inventory, HR, project management,
              finance, and automation in a unified platform. The solution helps modern teams
              streamline daily workflows, improve visibility, and manage their operations more
              efficiently.
            </p>

            <Link
              href="/work"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-[#4A9DB8] to-[#8CCBDA] px-10 py-4 text-base font-medium text-white shadow-lg shadow-[#4FB6C6]/10 transition-all duration-300 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#4FB6C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] focus-visible:outline-none"
            >
              View Details
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
