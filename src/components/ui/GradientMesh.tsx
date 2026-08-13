'use client'

import * as React from 'react'

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Isolated CSS Keyframes to ensure GPU acceleration and proper transition fallback */}
      <style dangerouslySetInnerHTML={{ __html: `
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
      `}} />

      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[120px] animate-blob-1"
           style={{
             backgroundColor: 'var(--color-brand-orange)',
             animation: 'blob-one 20s infinite ease-in-out',
             willChange: 'transform'
           }} />

      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full opacity-10 blur-[120px] animate-blob-2"
           style={{
             backgroundColor: 'var(--color-brand-teal)',
             animation: 'blob-two 25s infinite ease-in-out',
             willChange: 'transform'
           }} />

      <div className="absolute top-[25%] right-[15%] w-[35%] h-[35%] rounded-full opacity-10 blur-[100px] animate-blob-3"
           style={{
             backgroundColor: 'var(--color-brand-gold)',
             animation: 'blob-three 22s infinite ease-in-out',
             willChange: 'transform'
           }} />
    </div>
  )
}
