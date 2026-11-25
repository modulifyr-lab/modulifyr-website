"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Compass, Globe, Workflow, ShieldCheck, Cpu, Layers, Minimize2 } from "lucide-react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export type ArchitectureModuleId = "strategy" | "launch" | "automation" | "delivery";

export interface ArchitectureModule {
  id: ArchitectureModuleId;
  label: string;
  summary: string;
  dockDirection: readonly [number, number, number];
  accentColor: string;
}

export const ARCHITECTURE_MODULES: readonly ArchitectureModule[] = [
  {
    id: "strategy",
    label: "Strategy Sprint",
    summary: "Prevent wasted spend with clear scope, timelines & roadmap",
    dockDirection: [-1, 0.85, 0.55],
    accentColor: "#2D738D",
  },
  {
    id: "launch",
    label: "Launch Kit",
    summary: "Fast, mobile-ready websites built to win local trust & leads",
    dockDirection: [1, 0.85, 0.55],
    accentColor: "#E8A33D",
  },
  {
    id: "automation",
    label: "Automation Layer",
    summary: "Eliminate manual entry by syncing your daily business tools",
    dockDirection: [-1, -0.85, -0.45],
    accentColor: "#409EB7",
  },
  {
    id: "delivery",
    label: "Clean Handoff",
    summary: "Full ownership, clear documentation & zero vendor lock-in",
    dockDirection: [1, -0.85, -0.45],
    accentColor: "#3B82F6",
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
    <div className="border-border-base bg-surface relative flex h-full min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-8">
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

function createRoundedSquareShape(size: number, radius: number): THREE.Shape {
  const half = size / 2;
  const r = Math.min(radius, half * 0.45);
  const shape = new THREE.Shape();
  shape.moveTo(-half + r, -half);
  shape.lineTo(half - r, -half);
  shape.quadraticCurveTo(half, -half, half, -half + r);
  shape.lineTo(half, half - r);
  shape.quadraticCurveTo(half, half, half - r, half);
  shape.lineTo(-half + r, half);
  shape.quadraticCurveTo(-half, half, -half, half - r);
  shape.lineTo(-half, -half + r);
  shape.quadraticCurveTo(-half, -half, -half + r, -half);
  return shape;
}

function createOctagonShape(radius: number): THREE.Shape {
  const shape = new THREE.Shape();
  const sides = 8;
  for (let i = 0; i < sides; i++) {
    const angle = (i / sides) * Math.PI * 2 + Math.PI / 8;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

interface SharedGeometries {
  hubChassis: THREE.ExtrudeGeometry;
  hubEdges: THREE.EdgesGeometry;
  moduleBody: THREE.ExtrudeGeometry;
  moduleEdges: THREE.EdgesGeometry;
  modulePlate: THREE.ExtrudeGeometry;
}

function ModularBlock({
  mod,
  index,
  isActive,
  isHovered,
  exploded,
  geometries,
  onHover,
  onSelect,
}: {
  mod: ArchitectureModule;
  index: number;
  isActive: boolean;
  isHovered: boolean;
  exploded: boolean;
  geometries: SharedGeometries;
  onHover: (id: ArchitectureModuleId | null) => void;
  onSelect?: (id: ArchitectureModuleId) => void;
}) {
  const blockRef = React.useRef<THREE.Group>(null);
  const strutRef = React.useRef<THREE.Group>(null);

  // Normalize dock direction for radial assembly
  const dir = React.useMemo(() => {
    const v = new THREE.Vector3(...mod.dockDirection).normalize();
    return v;
  }, [mod.dockDirection]);

  const strutQuaternion = React.useMemo(() => {
    const up = new THREE.Vector3(0, 1, 0);
    return new THREE.Quaternion().setFromUnitVectors(up, dir);
  }, [dir]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const t = state.clock.elapsedTime;

    const baseDist = exploded ? 1.52 : 1.06;
    const activeOffset = isActive ? 0.24 : isHovered ? 0.14 : 0;
    const floatBob = Math.sin(t * 1.4 + index * 1.55) * 0.035;
    const targetDist = baseDist + activeOffset + floatBob;

    if (blockRef.current) {
      blockRef.current.position.x = THREE.MathUtils.damp(
        blockRef.current.position.x,
        dir.x * targetDist,
        7,
        dt
      );
      blockRef.current.position.y = THREE.MathUtils.damp(
        blockRef.current.position.y,
        dir.y * targetDist,
        7,
        dt
      );
      blockRef.current.position.z = THREE.MathUtils.damp(
        blockRef.current.position.z,
        dir.z * targetDist,
        7,
        dt
      );

      const targetScale = isActive ? 1.13 : isHovered ? 1.06 : 1.0;
      const nextScale = THREE.MathUtils.damp(blockRef.current.scale.x, targetScale, 8, dt);
      blockRef.current.scale.setScalar(nextScale);

      const targetTiltX = isActive ? 0.18 + Math.sin(t * 0.9 + index) * 0.05 : Math.sin(t * 0.7 + index) * 0.04;
      const targetTiltY = isActive ? 0.26 + Math.cos(t * 0.8 + index) * 0.05 : Math.cos(t * 0.6 + index) * 0.04;
      blockRef.current.rotation.x = THREE.MathUtils.damp(blockRef.current.rotation.x, targetTiltX, 6, dt);
      blockRef.current.rotation.y = THREE.MathUtils.damp(blockRef.current.rotation.y, targetTiltY, 6, dt);
    }

    if (strutRef.current) {
      const midDist = targetDist * 0.5;
      strutRef.current.position.set(dir.x * midDist, dir.y * midDist, dir.z * midDist);
      strutRef.current.scale.set(1, Math.max(targetDist - 0.36, 0.2), 1);
    }
  });

  const glowColor = isActive ? "#FFC24B" : mod.accentColor;

  return (
    <group>
      {/* Connector Conduit Rail */}
      <group ref={strutRef} quaternion={strutQuaternion}>
        <mesh>
          <cylinderGeometry args={[0.022, 0.022, 1, 12]} />
          <meshStandardMaterial
            color={isActive ? "#FFC24B" : "#4FB6C6"}
            roughness={0.28}
            metalness={0.82}
            emissive={isActive ? "#E8A33D" : "#1E3A4C"}
            emissiveIntensity={isActive ? 0.45 : 0.15}
          />
        </mesh>
        {/* Mid-rail collar */}
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.06, 16]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.22} metalness={0.88} />
        </mesh>
      </group>

      {/* Multi-part Procedural Module Assembly */}
      <group
        ref={blockRef}
        position={[dir.x * 1.06, dir.y * 1.06, dir.z * 1.06]}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(mod.id);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect?.(mod.id);
        }}
      >
        {/* Primary Matte Anodized Chassis */}
        <mesh geometry={geometries.moduleBody}>
          <meshStandardMaterial
            color={isActive ? "#1D2C44" : "#152134"}
            roughness={0.72}
            metalness={0.22}
          />
        </mesh>

        {/* Crisp Architectural Edge Highlight */}
        <lineSegments geometry={geometries.moduleEdges}>
          <lineBasicMaterial
            color={isActive ? "#FFC24B" : isHovered ? "#7DD3E0" : "#4FB6C6"}
            transparent
            opacity={isActive ? 0.9 : isHovered ? 0.65 : 0.35}
          />
        </lineSegments>

        {/* Brushed Metallic Faceplate */}
        <mesh geometry={geometries.modulePlate} position={[0, 0, 0.165]}>
          <meshStandardMaterial
            color={isActive ? "#E2E8F0" : "#94A3B8"}
            roughness={0.22}
            metalness={0.86}
          />
        </mesh>

        {/* Back Metallic Collar */}
        <mesh geometry={geometries.modulePlate} position={[0, 0, -0.175]}>
          <meshStandardMaterial color="#64748B" roughness={0.25} metalness={0.85} />
        </mesh>

        {/* Emissive Module Core Insert (Distinct Geometry by Module) */}
        {mod.id === "strategy" && (
          <group position={[0, 0, 0.215]}>
            <mesh rotation={[0, 0, Math.PI / 4]}>
              <octahedronGeometry args={[0.11, 0]} />
              <meshStandardMaterial
                color={glowColor}
                roughness={0.2}
                metalness={0.4}
                emissive={glowColor}
                emissiveIntensity={isActive ? 0.85 : 0.35}
              />
            </mesh>
            <mesh>
              <torusGeometry args={[0.17, 0.015, 10, 32]} />
              <meshStandardMaterial color={glowColor} roughness={0.25} metalness={0.75} />
            </mesh>
          </group>
        )}

        {mod.id === "launch" && (
          <group position={[0, 0, 0.21]}>
            <mesh position={[0, 0.055, 0]}>
              <boxGeometry args={[0.28, 0.075, 0.04]} />
              <meshStandardMaterial
                color={glowColor}
                roughness={0.22}
                metalness={0.45}
                emissive={glowColor}
                emissiveIntensity={isActive ? 0.8 : 0.32}
              />
            </mesh>
            <mesh position={[-0.05, -0.055, 0]}>
              <boxGeometry args={[0.18, 0.06, 0.035]} />
              <meshStandardMaterial color="#4FB6C6" roughness={0.35} metalness={0.65} />
            </mesh>
          </group>
        )}

        {mod.id === "automation" && (
          <group position={[0, 0, 0.215]}>
            <mesh position={[-0.09, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.055, 0.055, 0.05, 16]} />
              <meshStandardMaterial
                color={glowColor}
                roughness={0.22}
                metalness={0.5}
                emissive={glowColor}
                emissiveIntensity={isActive ? 0.85 : 0.35}
              />
            </mesh>
            <mesh position={[0.09, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.055, 0.055, 0.05, 16]} />
              <meshStandardMaterial
                color={glowColor}
                roughness={0.22}
                metalness={0.5}
                emissive={glowColor}
                emissiveIntensity={isActive ? 0.85 : 0.35}
              />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.16, 0.025, 0.025]} />
              <meshStandardMaterial color="#E2E8F0" roughness={0.2} metalness={0.85} />
            </mesh>
          </group>
        )}

        {mod.id === "delivery" && (
          <group position={[0, 0, 0.215]}>
            <mesh>
              <cylinderGeometry args={[0.11, 0.11, 0.045, 6]} />
              <meshStandardMaterial
                color={glowColor}
                roughness={0.22}
                metalness={0.45}
                emissive={glowColor}
                emissiveIntensity={isActive ? 0.85 : 0.35}
              />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.015]}>
              <torusGeometry args={[0.16, 0.014, 10, 6]} />
              <meshStandardMaterial color="#E2E8F0" roughness={0.22} metalness={0.88} />
            </mesh>
          </group>
        )}
      </group>
    </group>
  );
}

function ModularArchitectureRig({
  activeModule,
  exploded,
  onSelectModule,
}: {
  activeModule: ArchitectureModuleId;
  exploded: boolean;
  onSelectModule?: (id: ArchitectureModuleId) => void;
}) {
  const tiltGroupRef = React.useRef<THREE.Group>(null);
  const spinGroupRef = React.useRef<THREE.Group>(null);
  const outerRingRef = React.useRef<THREE.Mesh>(null);
  const innerRingRef = React.useRef<THREE.Mesh>(null);
  const coreCrystalRef = React.useRef<THREE.Mesh>(null);
  const [hoveredModule, setHoveredModule] = React.useState<ArchitectureModuleId | null>(null);
  const pointer = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    document.body.style.cursor = hoveredModule ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hoveredModule]);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
        return;
      }
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const geometries = React.useMemo<SharedGeometries>(() => {
    const hubShape = createOctagonShape(0.42);
    const hubChassis = new THREE.ExtrudeGeometry(hubShape, {
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.045,
      bevelSegments: 3,
    });
    hubChassis.center();
    const hubEdges = new THREE.EdgesGeometry(hubChassis, 22);

    const modShape = createRoundedSquareShape(0.56, 0.1);
    const moduleBody = new THREE.ExtrudeGeometry(modShape, {
      depth: 0.26,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.035,
      bevelSegments: 3,
    });
    moduleBody.center();
    const moduleEdges = new THREE.EdgesGeometry(moduleBody, 24);

    const plateShape = createRoundedSquareShape(0.42, 0.07);
    const modulePlate = new THREE.ExtrudeGeometry(plateShape, {
      depth: 0.025,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.008,
      bevelSegments: 2,
    });
    modulePlate.center();

    return { hubChassis, hubEdges, moduleBody, moduleEdges, modulePlate };
  }, []);

  React.useEffect(() => {
    return () => {
      geometries.hubChassis.dispose();
      geometries.hubEdges.dispose();
      geometries.moduleBody.dispose();
      geometries.moduleEdges.dispose();
      geometries.modulePlate.dispose();
    };
  }, [geometries]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);

    if (tiltGroupRef.current) {
      const isTouch =
        typeof window !== "undefined" &&
        (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);

      const targetX = isTouch ? 0.12 : 0.12 - pointer.current.y * 0.18;
      const targetY = isTouch ? 0 : pointer.current.x * 0.26;

      tiltGroupRef.current.rotation.x = THREE.MathUtils.damp(
        tiltGroupRef.current.rotation.x,
        targetX,
        4.5,
        dt
      );
      tiltGroupRef.current.rotation.y = THREE.MathUtils.damp(
        tiltGroupRef.current.rotation.y,
        targetY,
        4.5,
        dt
      );
    }

    if (spinGroupRef.current) {
      spinGroupRef.current.rotation.y += dt * 0.16;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += dt * 0.18;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= dt * 0.24;
    }

    if (coreCrystalRef.current) {
      coreCrystalRef.current.rotation.y -= dt * 0.55;
      coreCrystalRef.current.rotation.x += dt * 0.25;
    }
  });

  const activeData =
    ARCHITECTURE_MODULES.find((m) => m.id === activeModule) ?? ARCHITECTURE_MODULES[0];

  return (
    <group ref={tiltGroupRef}>
      <group ref={spinGroupRef}>
        {/* Outer Gyroscopic Architecture Rings */}
        <mesh ref={outerRingRef} rotation={[Math.PI / 2.6, 0.25, 0]}>
          <torusGeometry args={[1.95, 0.011, 12, 84]} />
          <meshStandardMaterial
            color="#4FB6C6"
            roughness={0.32}
            metalness={0.78}
            transparent
            opacity={0.42}
          />
        </mesh>

        <mesh ref={innerRingRef} rotation={[-Math.PI / 3.1, -0.35, 0.4]}>
          <torusGeometry args={[1.58, 0.009, 10, 72]} />
          <meshStandardMaterial
            color="#FFC24B"
            roughness={0.28}
            metalness={0.82}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Central Modular Foundation Hub */}
        <group>
          <mesh geometry={geometries.hubChassis}>
            <meshStandardMaterial color="#101B2D" roughness={0.75} metalness={0.25} />
          </mesh>

          <lineSegments geometry={geometries.hubEdges}>
            <lineBasicMaterial color="#4FB6C6" transparent opacity={0.55} />
          </lineSegments>

          {/* Brushed Metallic Hub Flange */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.48, 0.024, 12, 48]} />
            <meshStandardMaterial color="#CBD5E1" roughness={0.22} metalness={0.88} />
          </mesh>

          {/* Active Energy Core Crystal */}
          <mesh ref={coreCrystalRef}>
            <octahedronGeometry args={[0.24, 0]} />
            <meshStandardMaterial
              color={activeData.accentColor}
              roughness={0.18}
              metalness={0.35}
              emissive={activeData.accentColor}
              emissiveIntensity={0.65}
            />
          </mesh>
        </group>

        {/* 4 Interlocking Procedural Service Modules */}
        {ARCHITECTURE_MODULES.map((mod, idx) => (
          <ModularBlock
            key={mod.id}
            mod={mod}
            index={idx}
            isActive={mod.id === activeModule}
            isHovered={hoveredModule === mod.id}
            exploded={exploded}
            geometries={geometries}
            onHover={setHoveredModule}
            onSelect={onSelectModule}
          />
        ))}
      </group>
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
  const envCleanupRef = React.useRef<(() => void) | null>(null);
  const [useFallback, setUseFallback] = React.useState<boolean | null>(null);
  const [isSoftwareGl, setIsSoftwareGl] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isInViewport, setIsInViewport] = React.useState(true);
  const [contextLost, setContextLost] = React.useState(false);
  const [exploded, setExploded] = React.useState(false);

  React.useEffect(() => {
    return () => {
      envCleanupRef.current?.();
      envCleanupRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    const probeWebGL = () => {
      try {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return { supported: false, software: false };
        }
        const probeCanvas = document.createElement("canvas");
        const gl2 = probeCanvas.getContext("webgl2") as WebGL2RenderingContext | null;
        const gl1 = !gl2
          ? (probeCanvas.getContext("webgl") || probeCanvas.getContext("experimental-webgl")) as WebGLRenderingContext | null
          : null;
        const gl = gl2 || gl1;

        if (!gl) {
          return { supported: false, software: false };
        }

        const dbg = gl.getExtension("WEBGL_debug_renderer_info");
        const rendererStr = dbg
          ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || "")
          : "";
        const software = /swiftshader|llvmpipe|softpipe/i.test(rendererStr);

        gl.getExtension("WEBGL_lose_context")?.loseContext();
        return { supported: true, software };
      } catch {
        return { supported: false, software: false };
      }
    };

    const { supported, software } = probeWebGL();
    setUseFallback(!supported);
    setIsSoftwareGl(software);

    const timer = setTimeout(() => {
      setIsMounted(supported);
    }, 180);

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

  const dpr: number | [number, number] = isSoftwareGl
    ? 1
    : typeof window !== "undefined"
      ? Math.min(window.devicePixelRatio || 1, 2)
      : 1;

  return (
    <div
      ref={containerRef}
      className="border-border-base bg-[#0B121E] relative flex h-full min-h-[400px] w-full flex-col justify-between overflow-hidden rounded-3xl border shadow-xl lg:min-h-[430px]"
    >
      {/* Top Semantic Module Overlay (no backdrop-blur over WebGL) */}
      <div className="pointer-events-none relative z-10 flex items-start justify-between gap-3 p-4 sm:p-5">
        <div className="max-w-[78%] rounded-xl border border-white/10 bg-[#0B121E]/88 px-3.5 py-2.5">
          <p className="text-[11px] font-semibold tracking-wider text-[#B8E0E9] uppercase">
            Modular 3D Architecture
          </p>
          <p className="mt-0.5 text-sm font-bold text-white">{currentModule.label}</p>
          <p className="mt-0.5 text-xs leading-snug text-slate-300">{currentModule.summary}</p>
        </div>

        <button
          type="button"
          onClick={() => setExploded((prev) => !prev)}
          aria-label={exploded ? "Assemble modules" : "Expand modules"}
          className="pointer-events-auto inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-white/15 bg-[#0B121E]/90 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors duration-150 hover:border-[#4FB6C6]/60 hover:text-white"
        >
          {exploded ? (
            <>
              <Minimize2 className="h-3.5 w-3.5 text-[#FFC24B]" />
              <span>Assemble</span>
            </>
          ) : (
            <>
              <Layers className="h-3.5 w-3.5 text-[#4FB6C6]" />
              <span>Expand</span>
            </>
          )}
        </button>
      </div>

      {/* Full-Bleed Interactive 3D WebGL Canvas */}
      <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0.25, 4.9], fov: 42 }}
          dpr={dpr}
          gl={{
            antialias: !isSoftwareGl,
            powerPreference: "high-performance",
          }}
          frameloop={isInViewport ? "always" : "demand"}
          onCreated={({ gl, scene }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.05;
            gl.outputColorSpace = THREE.SRGBColorSpace;

            envCleanupRef.current?.();
            const pmremGenerator = new THREE.PMREMGenerator(gl);
            pmremGenerator.compileEquirectangularShader();
            const envScene = new RoomEnvironment();
            const renderTarget = pmremGenerator.fromScene(envScene, 0.04);
            scene.environment = renderTarget.texture;
            scene.environmentIntensity = 0.72;
            envScene.dispose();
            pmremGenerator.dispose();

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

            envCleanupRef.current = () => {
              if (scene.environment === renderTarget.texture) {
                scene.environment = null;
              }
              renderTarget.dispose();
              canvas.removeEventListener("webglcontextlost", handleLost);
              canvas.removeEventListener("webglcontextrestored", handleRestored);
            };
          }}
        >
          <color attach="background" args={["#0B121E"]} />
          <fog attach="fog" args={["#0B121E", 5.5, 11]} />

          {/* Studio 3-Point Rig */}
          <hemisphereLight args={["#B8E0E9", "#0B121E", 0.65]} />
          <directionalLight position={[4.5, 6, 5]} intensity={1.75} color="#FFF1D6" />
          <pointLight position={[-4, -2.5, -3.5]} intensity={1.3} color="#4FB6C6" />

          <ModularArchitectureRig
            activeModule={activeModule}
            exploded={exploded}
            onSelectModule={onSelectModule}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={!isSoftwareGl}
            dampingFactor={0.07}
            rotateSpeed={0.65}
            minPolarAngle={Math.PI * 0.28}
            maxPolarAngle={Math.PI * 0.72}
          />
        </Canvas>
      </div>

      {/* Bottom Interactive Module Selector Controls (no backdrop-blur over WebGL) */}
      <div className="relative z-10 p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#0B121E]/88 p-2">
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
