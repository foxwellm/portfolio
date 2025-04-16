"use client";

import dynamic from "next/dynamic";
import HeroWrapper from "./HeroWrapper";

const Hero = dynamic(() => import("./HeroWithBackground"), {
  ssr: false, // Disable SSR to avoid "document is not defined"
  loading: () => <HeroWrapper />,
});

export default function HeroClientWrapper() {
  return <Hero />;
}
