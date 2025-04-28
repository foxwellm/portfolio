"use client";

import dynamic from "next/dynamic";
import { HeroWrapper } from "./components";

const Hero = dynamic(() => import("./components/HeroWithBackground"), {
  ssr: false, // Disable SSR to avoid "document is not defined"
  loading: () => <HeroWrapper />,
});

export function HeroClientWrapper() {
  return <Hero />;
}
