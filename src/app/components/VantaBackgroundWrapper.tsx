"use client";

import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("./VantaBackground"), {
  ssr: false, // Disable SSR to avoid "document is not defined"
  loading: () => <div className="absolute top-0 left-0 w-full h-full z-0" />,
});

export default function HeroClientWrapper() {
  return <VantaBackground />;
}
