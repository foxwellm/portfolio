"use client";

import { useActiveSection } from "../../../hooks/useActiveSection";

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const activeSection = useActiveSection(sections);

  return (
    <nav className="sticky bg-black h-16 top-0 z-20 text-white px-6 flex justify-center items-center gap-16">
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
    </nav>
  );
}
