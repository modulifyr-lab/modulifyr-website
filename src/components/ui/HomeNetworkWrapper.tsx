'use client'

import * as React from "react";
import dynamic from "next/dynamic";
import { Layers, Cpu, Globe } from "lucide-react";

// Export the Static Fallback so next/dynamic can render it immediately on server/SSR
export function StaticFallback() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="bg-brand-orange/10 absolute top-0 left-0 h-32 w-32 rounded-2xl parallax-up" />
      <div className="bg-brand-navy/5 absolute right-0 bottom-0 h-48 w-48 rounded-[40px] parallax-down" />
      <div className="bg-background border-border-base absolute top-1/2 left-1/2 flex h-80 w-80 -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-3xl border p-8 shadow-2xl parallax-subtle-up">
        <div className="bg-brand-orange flex h-16 w-16 items-center justify-center rounded-xl">
          <Layers className="h-8 w-8 text-white" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-border-base h-4 w-3/4 rounded-full" />
          <div className="bg-border-base h-4 w-1/2 rounded-full opacity-60" />
        </div>
        <div className="mt-auto grid grid-cols-3 gap-2">
          <div className="bg-brand-teal/40 h-2 rounded-full" />
          <div className="bg-brand-gold/40 h-2 rounded-full" />
          <div className="bg-brand-orange/40 h-2 rounded-full" />
        </div>
      </div>
      {/* Floating modules */}
      <div className="bg-brand-navy absolute top-10 right-10 flex h-24 w-24 items-center justify-center rounded-2xl shadow-xl parallax-up">
        <Cpu className="h-10 w-10 text-white" />
      </div>
      <div className="bg-brand-gold absolute bottom-10 left-10 flex h-20 w-20 items-center justify-center rounded-full shadow-xl parallax-down">
        <Globe className="text-brand-navy h-8 w-8" />
      </div>
    </div>
  );
}

const NetworkScene = dynamic(() => import("@/components/ui/NetworkScene"), {
  ssr: false,
  loading: () => <StaticFallback />,
});

export default function HomeNetworkWrapper() {
  return <NetworkScene />;
}
