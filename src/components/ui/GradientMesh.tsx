"use client";

import * as React from "react";

export default function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Isolated CSS Keyframes to ensure GPU acceleration and proper transition fallback */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blob-one {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -45px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob-two {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.15); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob-three {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -25px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob-1, .animate-blob-2, .animate-blob-3 {
            animation: none !important;
            transform: none !important;
          }
        }
      `,
        }}
      />

      <div
        className="animate-blob-1 absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full opacity-10 blur-[120px]"
        style={{
          backgroundColor: "var(--color-brand-orange)",
          animation: "blob-one 20s infinite ease-in-out",
          willChange: "transform",
        }}
      />

      <div
        className="animate-blob-2 absolute right-[-10%] bottom-[-10%] h-[45%] w-[45%] rounded-full opacity-10 blur-[120px]"
        style={{
          backgroundColor: "var(--color-brand-teal)",
          animation: "blob-two 25s infinite ease-in-out",
          willChange: "transform",
        }}
      />

      <div
        className="animate-blob-3 absolute top-[25%] right-[15%] h-[35%] w-[35%] rounded-full opacity-10 blur-[100px]"
        style={{
          backgroundColor: "var(--color-brand-gold)",
          animation: "blob-three 22s infinite ease-in-out",
          willChange: "transform",
        }}
      />
    </div>
  );
}
