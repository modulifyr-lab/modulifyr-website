'use client'

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Layers, Cpu, Globe } from "lucide-react";

// Standard Static Fallback JSX
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

// 3D Orbiting Network Mesh Component
function NetworkGroup() {
  const groupRef = React.useRef<any>(null);
  const mouse = React.useRef({ x: 0, y: 0 });

  // 6 nodes representing modular architecture components
  const nodes = React.useMemo(() => [
    { pos: [-1.4, 1.0, 0.2] },
    { pos: [1.4, -0.6, 0.4] },
    { pos: [0.2, -1.2, -0.6] },
    { pos: [1.0, 1.2, -0.8] },
    { pos: [-1.0, -1.0, 0.8] },
    { pos: [0.0, 0.1, 1.1] },
  ], []);

  // Set up connection lines between nodes
  const connections = React.useMemo(() => [
    [0, 1], [0, 3], [0, 4], [0, 5],
    [1, 2], [1, 3], [1, 5],
    [2, 4], [2, 5],
    [3, 5], [4, 5]
  ], []);

  React.useEffect(() => {
    // Track mouse coordinates on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window
      ) {
        return; // Disable mouse-tilt on touch devices
      }
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow auto-rotation on idle (cap delta to prevent huge jumps)
    const dt = Math.min(delta, 0.1);
    groupRef.current.rotation.y += dt * 0.12;
    groupRef.current.rotation.x += dt * 0.04;

    // Mouse-driven offset (soft bounded spring feel)
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const targetY = isTouch ? 0 : mouse.current.x * 0.35;
    const targetX = isTouch ? 0 : -mouse.current.y * 0.25;

    // Smooth LERP follow
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.06;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* 1. Orbiting Nodes (low poly spheres) */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos as [number, number, number]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#E84530" : i % 3 === 1 ? "#2B7FA8" : "#F5B52E"}
          />
        </mesh>
      ))}

      {/* 2. Connection lines */}
      {connections.map(([startIdx, endIdx], i) => {
        const start = nodes[startIdx].pos;
        const end = nodes[endIdx].pos;

        // Define simple lines
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([...start, ...end]), 3]}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#475569" opacity={0.35} transparent linewidth={1} />
          </line>
        );
      })}
    </group>
  );
}

export default function NetworkScene() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = React.useState<boolean | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isInViewport, setIsInViewport] = React.useState(true);

  React.useEffect(() => {
    // Check if WebGL is supported
    const checkWebGL = () => {
      try {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return false;
        }
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    const supported = checkWebGL();
    setUseFallback(!supported);

    // Defer Canvas mount to prevent blocking H1 text paint
    const timer = setTimeout(() => {
      setIsMounted(supported);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    // Viewport checking to pause render loop when out of sight
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Render static fallback until state is determined
  if (useFallback === null || useFallback === true || !isMounted) {
    return (
      <div ref={containerRef}>
        <StaticFallback />
      </div>
    );
  }

  // Cap devicePixelRatio to avoid killing performance on heavy mobile displays
  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-lg cursor-grab active:cursor-grabbing"
      style={{ minHeight: "400px" }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={dpr}
        // Conditionally set frameloop to stop rendering when not visible
        frameloop={isInViewport ? "always" : "demand"}
        style={{ pointerEvents: "auto" }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <NetworkGroup />
      </Canvas>
    </div>
  );
}
