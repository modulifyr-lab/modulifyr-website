"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  StaticFallback,
  type ArchitectureModuleId,
} from "@/components/ui/NetworkScene";

const NetworkScene = dynamic(() => import("@/components/ui/NetworkScene"), {
  ssr: false,
  loading: () => <StaticFallback />,
});

export default function HomeNetworkWrapper() {
  const [activeModule, setActiveModule] = React.useState<ArchitectureModuleId>("strategy");

  return (
    <div className="h-full w-full">
      <NetworkScene activeModule={activeModule} onSelectModule={setActiveModule} />
    </div>
  );
}
