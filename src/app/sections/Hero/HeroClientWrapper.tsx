"use client";

import dynamic from "next/dynamic";
import HeroBase from "./Hero";

const Hero = dynamic(() => import("./HeroWithBackground"), {
  ssr: false, // Disable SSR to avoid "document is not defined"
  loading: () => <HeroBase />,
});

export default function HeroClientWrapper() {
  return <Hero />;
}
