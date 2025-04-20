"use client";

import { useEffect, useState } from "react";
import { useActiveSection } from "../../../hooks/useActiveSection";

export default function Navbar({ sections }: { sections: string[] }) {
  const activeSection = useActiveSection(sections);

  const [navHeight, setNavHeight] = useState(false);
  const [navOpacity, setNavOpacity] = useState(false);

  useEffect(() => {
    // TODO: show and disable if starting lower
    const onScroll = () => {
      setNavHeight(window.scrollY > 64);

      if (window.scrollY > 100) {
        setNavOpacity(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 pt-[env(safe-area-inset-top)] w-full z-20 bg-gray-950 border-b border-white/10 text-white px-6 flex items-center justify-between 
      transition-opacity duration-500 overflow-hidden
      ${navHeight ? "h-16" : "h-0"} 
      ${navOpacity ? "opacity-100" : "opacity-0"}`}
    >
      <div className="w-24" />

      <div className="flex gap-16 justify-center">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`transition lg:text-sm lg:text-xl ${
              activeSection === section
                ? "text-sky-400 scale-110"
                : "hover:text-gray-300"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <a
        href="/MatthewFoxwellResume.pdf"
        download
        className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-md text-sm transition duration-300"
      >
        Download Resume
      </a>
    </nav>
  );
}
