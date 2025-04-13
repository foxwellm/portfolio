"use client";

import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("./VantaBackground"), {
  ssr: false, // Disable SSR to avoid "document is not defined"
});

export default function HeroClientWrapper() {
  return <VantaBackground />;
}
