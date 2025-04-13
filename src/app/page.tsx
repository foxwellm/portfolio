import About from "./components/sections/About";
import Hero from "./components/sections/Hero";

export default function Main() {
  return (
    <div className="relative scroll-smooth">
      <Hero />

      <About />

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h2 className="text-4xl font-semibold mb-2">Projects</h2>
          <p className="max-w-xl mx-auto">Info</p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-zinc-950 text-white flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h2 className="text-4xl font-semibold mb-2">Contact</h2>
          <p className="max-w-xl mx-auto">Info</p>
        </div>
      </section>
    </div>
  );
}
