import dynamic from "next/dynamic";

/* Dynymically importing the component with server side rendering disabled
  because component relies on window 
  https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
*/
const Hero = dynamic(() => import("./components/sections/Hero"), {
  ssr: false,
});
import About from "./components/sections/About";

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
