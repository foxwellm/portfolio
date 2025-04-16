import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import HeroClientWrapper from "./components/sections/HeroClientWrapper";
import { StickyNavbar } from "./components/StickyNavbar";

export default function Main() {
  return (
    <div className="relative scroll-smooth">
      <HeroClientWrapper />

      <StickyNavbar />

      <About />

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-red-900 text-white flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h2 className="text-4xl font-semibold mb-2">Projects</h2>
          <p className="max-w-xl mx-auto">Info</p>
        </div>
      </section>

      <Contact />
    </div>
  );
}
