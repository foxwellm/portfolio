"use client";

import dynamic from "next/dynamic";
import { Chevron } from "./components";
// NOTE: Lazy load Vanta to ensure document is available
const VantaBackground = dynamic(
  () =>
    import("./components/VantaBackground").then(
      (module) => module.VantaBackground
    ),
  {
    ssr: false,
  }
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-around items-center"
    >
      <VantaBackground />

      <div className="relative z-10 gap-4 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold">
          Hi, I&#39;m <span className="text-sky-400">Matthew</span>.
        </h1>
        <p className="text-xl max-w-xl">I&#39;m a full stack web developer.</p>

        <a
          href="/MatthewFoxwellResume.pdf"
          download
          className="bg-sky-700 hover:bg-sky-800 py-2 text-white px-4 rounded-md text-sm transition duration-300 md:hidden"
        >
          Download CV
        </a>

        <Chevron />
      </div>
    </section>
  );
}
