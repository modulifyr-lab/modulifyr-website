"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Boxes, FileCode2, GitBranch } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";

const SERVICES = [
  {
    image: "/services/service-one.png",
  },
  {
    image: "/services/service-two.png",
  },
  {
    image: "/services/service-three.png",
  },
  {
    image: "/services/service-four.png",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % SERVICES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <span className="text-center align-middle font-sans text-[20px] leading-[110%] font-normal tracking-[0%] text-[#FFC24B]">
              OUR SERVICES
            </span>

            {/* Heading */}
            <h2 className="text-on-background max-w-2xl text-4xl leading-[1.1] font-bold">
              Custom Software Services
              <br />
              Built for Growing Organizations
            </h2>

            {/* Description */}
            <p className="text-body1 text-on-surface-variant mt-5 max-w-2xl leading-[1.3]">
              We provide end-to-end software services — from architecture to deployment — designed
              to help your business replace rigid tools with systems that scale as you grow.
            </p>

            {/* CTA */}
            <div className="mt-14">
              <Link href="/services" className="group inline-block">
                <Button variant="outline">
                  Explore Integration Solutions{" "}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT ANIMATION */}
          <div className="relative mx-auto aspect-square w-full max-w-[500px]">
            {/* Animated images */}
            <div className="absolute inset-0">
              {SERVICES.map((service, index) => (
                <img
                  key={service.image}
                  src={service.image}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${activeService === index ? "opacity-100" : "opacity-0"} `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes service-label-in {
          from {
            opacity: 0;
            transform: translate(-10px, -50%);
          }

          to {
            opacity: 1;
            transform: translate(0, -50%);
          }
        }
      `}</style>
    </section>
  );
}

interface OrbitItemProps {
  position: "top" | "right" | "bottom-left";
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function OrbitItem({ position, active, onClick, children }: OrbitItemProps) {
  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2",
    right: "top-1/2 right-0 -translate-y-1/2",
    "bottom-left": "bottom-0 left-[23%]",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Select service"
      className={`absolute z-20 flex h-[70px] w-[70px] items-center justify-center rounded-full border transition-all duration-500 ${positionClasses[position]} ${
        active
          ? "border-on-background bg-surface text-on-background scale-110 shadow-xl"
          : "border-outline/30 bg-surface-container text-on-surface-variant"
      } `}
    >
      {children}
    </button>
  );
}
