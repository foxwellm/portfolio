"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"), {
  ssr: false, // Disable SSR to avoid "document is not defined"
});

export default function HeroClientWrapper() {
  return <Hero />;
}