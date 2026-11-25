"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Compass, Globe, Workflow, ShieldCheck, Cpu } from "lucide-react";
import type { Group } from "three";

export type ArchitectureModuleId = "strategy" | "launch" | "automation" | "delivery";

export interface ArchitectureModule {
  id: ArchitectureModuleId;
  label: string;
  summary: string;
  nodeIndex: number;
}

export const ARCHITECTURE_MODULES: readonly ArchitectureModule[] = [
  {
    id: "strategy",
    label: "Strategy Sprint",
    summary: "Prevent wasted spend with clear scope, timelines & roadmap",
    nodeIndex: 5,
  },
  {
    id: "launch",
    label: "Launch Kit",
    summary: "Fast, mobile-ready websites built to win local trust & leads",
    nodeIndex: 1,
  },
  {
    id: "automation",
    label: "Automation Layer",
    summary: "Eliminate manual entry by syncing your daily business tools",
    nodeIndex: 0,
  },
  {
    id: "delivery",
    label: "Clean Handoff",
    summary: "Full ownership, clear documentation & zero vendor lock-in",
    nodeIndex: 3,
  },
];

// Styled 2D fallback for SSR, reduced motion, or WebGL unavailable/context lost
export function StaticFallback({
  activeModule = "strategy",
  onSelectModule,
}: {
  activeModule?: ArchitectureModuleId;
  onSelectModule?: (id: ArchitectureModuleId) => void;
}) {
  const current =
    ARCHITECTURE_MODULES.find((m) => m.id === activeModule) ?? ARCHITECTURE_MODULES[0];

  return (
    <div className="border-border-base bg-surface relative flex h-full min-h-[360px] w-full flex-col justify-between overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-8">
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
            Modular Architecture
          </p>
          <p className="text-on-background mt-1 text-lg font-bold">{current.label}</p>
        </div>
        <div className="bg-cta/10 text-cta flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
          <Compass className="h-5 w-5" />
        </div>
      </div>

      <div className="relative my-6 grid grid-cols-2 gap-3">
        {ARCHITECTURE_MODULES.map((mod) => {
          const isActive = mod.id === activeModule;
          const Icon =
            mod.id === "strategy"
              ? Compass
              : mod.id === "launch"
                ? Globe
                : mod.id === "automation"
                  ? Workflow
                  : ShieldCheck;

          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => onSelectModule?.(mod.id)}
              className={`cursor-pointer rounded-2xl border p-4 text-left transition-all duration-150 ${
                isActive
                  ? "border-cta bg-cta/10 text-on-background"
                  : "border-border-base bg-background/70 text-on-surface-variant hover:border-cta/50"
              }`}
            >
              <Icon className={`mb-2 h-4 w-4 ${isActive ? "text-cta" : "text-on-surface-variant"}`} />
              <p className="text-on-background text-sm font-semibold">{mod.label}</p>
              <p className="text-on-surface-variant mt-1 text-xs leading-snug">{mod.summary}</p>
            </button>
          );
        })}
      </div>

      <div className="text-on-surface-variant border-border-base relative z-10 flex items-center justify-between border-t pt-4 text-xs">
        <span className="flex items-center gap-1.5">
          <Cpu className="text-cta h-3.5 w-3.5" />
          Discrete data boundaries
        </span>
        <span>Zero rebuild upgrades</span>
      </div>
    </div>
  );
}

const NODES: readonly { pos: [number, number, number]; moduleId?: ArchitectureModuleId; baseColor: string }[] = [
  { pos: [-1.35, 0.95, 0.25], moduleId: "automation", baseColor: "#409EB7" },
  { pos: [1.35, -0.55, 0.45], moduleId: "launch", baseColor: "#E8A33D" },
  { pos: [0.25, -1.15, -0.55], baseColor: "#6FA8B8" },
  { pos: [0.95, 1.1, -0.75], moduleId: "delivery", baseColor: "#3B82F6" },
  { pos: [-0.95, -0.95, 0.75], baseColor: "#6FA8B8" },
  { pos: [0.0, 0.1, 0.95], moduleId: "strategy", baseColor: "#2D738D" },
];

const CONNECTIONS: readonly [number, number][] = [
  [0, 1],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 2],
  [1, 3],
  [1, 5],
  [2, 4],
  [2, 5],
  [3, 5],
  [4, 5],
];

function NetworkGroup({
  activeModule,
  onSelectModule,
}: {
  activeModule: ArchitectureModuleId;
  onSelectModule?: (id: ArchitectureModuleId) => void;
}) {
  const groupRef = React.useRef<Group>(null);
  const ringRef = React.useRef<Group>(null);
  const mouse = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
        return;
      }
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const linePositions = React.useMemo(() => {
    return CONNECTIONS.map(([startIdx, endIdx]) => {
      const start = NODES[startIdx].pos;
      const end = NODES[endIdx].pos;
      return new Float32Array([...start, ...end]);
    });
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);

    if (groupRef.current) {
      groupRef.current.rotation.y += dt * 0.14;
      groupRef.current.rotation.x += dt * 0.03;

      const isTouch =
        typeof window !== "undefined" &&
        (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);

      const targetY = isTouch ? 0 : mouse.current.x * 0.35;
      const targetX = isTouch ? 0 : -mouse.current.y * 0.25;

      const lerpFactor = Math.min(dt * 3.5, 1.0);
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * lerpFactor;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * lerpFactor;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += dt * 0.22;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Subtle orbital wireframe ring */}
      <group ref={ringRef} rotation={[Math.PI / 3, 0.3, 0]}>
        <mesh>
          <torusGeometry args={[1.65, 0.012, 12, 72]} />
          <meshStandardMaterial color="#4FB6C6" roughness={0.4} metalness={0.6} transparent opacity={0.35} />
        </mesh>
      </group>

      {/* Nodes */}
      {NODES.map((node, i) => {
        const isActive = node.moduleId === activeModule;
        const radius = isActive ? 0.24 : node.moduleId ? 0.17 : 0.11;

        return (
          <group key={i} position={node.pos}>
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                if (node.moduleId) onSelectModule?.(node.moduleId);
              }}
            >
              <icosahedronGeometry args={[radius, 1]} />
              <meshPhysicalMaterial
                color={isActive ? "#FFC24B" : node.baseColor}
                roughness={0.25}
                metalness={0.55}
                clearcoat={0.6}
                emissive={isActive ? "#E8A33D" : "#0F172A"}
                emissiveIntensity={isActive ? 0.45 : 0.08}
              />
            </mesh>
            {isActive && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[radius + 0.11, 0.012, 10, 40]} />
                <meshStandardMaterial color="#FFC24B" emissive="#FFC24B" emissiveIntensity={0.4} />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Connection edges */}
      {linePositions.map((posArray, i) => {
        const [startIdx, endIdx] = CONNECTIONS[i];
        const connectedToActive =
          NODES[startIdx].moduleId === activeModule || NODES[endIdx].moduleId === activeModule;

        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[posArray, 3]}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={connectedToActive ? "#4FB6C6" : "#64748B"}
              opacity={connectedToActive ? 0.85 : 0.28}
              transparent
            />
          </line>
        );
      })}
    </group>
  );
}

export default function NetworkScene({
  activeModule = "strategy",
  onSelectModule,
}: {
  activeModule?: ArchitectureModuleId;
  onSelectModule?: (id: ArchitectureModuleId) => void;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = React.useState<boolean | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isInViewport, setIsInViewport] = React.useState(true);
  const [contextLost, setContextLost] = React.useState(false);

  React.useEffect(() => {
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
      } catch {
        return false;
      }
    };

    const supported = checkWebGL();
    setUseFallback(!supported);

    const timer = setTimeout(() => {
      setIsMounted(supported);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
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

  const currentModule =
    ARCHITECTURE_MODULES.find((m) => m.id === activeModule) ?? ARCHITECTURE_MODULES[0];

  if (useFallback === null || useFallback === true || !isMounted || contextLost) {
    return (
      <div ref={containerRef} className="h-full w-full">
        <StaticFallback activeModule={activeModule} onSelectModule={onSelectModule} />
      </div>
    );
  }

  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;

  return (
    <div
      ref={containerRef}
      className="border-border-base bg-brand-navy relative flex h-full min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-3xl border shadow-xl"
    >
      {/* Top Semantic Module Overlay */}
      <div className="pointer-events-none relative z-10 flex items-start justify-between p-5 sm:p-6">
        <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-sm">
          <p className="text-[11px] font-semibold tracking-wider text-[#B8E0E9] uppercase">
            Interactive Module Map
          </p>
          <p className="mt-0.5 text-sm font-bold text-white">{currentModule.label}</p>
          <p className="text-xs text-slate-300">{currentModule.summary}</p>
        </div>
      </div>

      {/* Full-Bleed 3D WebGL Canvas */}
      <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0, 4.3], fov: 45 }}
          dpr={dpr}
          frameloop={isInViewport ? "always" : "demand"}
          onCreated={({ gl }) => {
            const canvas = gl.domElement;
            const handleLost = (e: Event) => {
              e.preventDefault();
              setContextLost(true);
            };
            const handleRestored = () => {
              setContextLost(false);
            };
            canvas.addEventListener("webglcontextlost", handleLost);
            canvas.addEventListener("webglcontextrestored", handleRestored);
          }}
        >
          <fog attach="fog" args={["#0F1724", 4.5, 9]} />
          {/* Three-Point Studio Lighting */}
          <ambientLight intensity={0.75} color="#B8E0E9" />
          <directionalLight position={[5, 6, 5]} intensity={1.8} color="#FFE8C2" />
          <pointLight position={[-4, -3, -4]} intensity={1.4} color="#2D738D" />
          <NetworkGroup activeModule={activeModule} onSelectModule={onSelectModule} />
        </Canvas>
      </div>

      {/* Bottom Interactive Module Selector Controls */}
      <div className="relative z-10 p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-black/45 p-2 backdrop-blur-sm">
          {ARCHITECTURE_MODULES.map((mod) => {
            const isActive = mod.id === activeModule;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => onSelectModule?.(mod.id)}
                className={`cursor-pointer truncate rounded-xl px-3 py-2 text-left text-xs font-semibold transition-colors duration-150 ${
                  isActive
                    ? "bg-[#2D738D] text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {mod.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
