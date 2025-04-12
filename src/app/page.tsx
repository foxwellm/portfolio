import Script from "next/script";
import { Hero } from "./components/sections/Hero";

export default function Main() {
  return (
    <div className="relative scroll-smooth">
      <Hero />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h2 className="text-4xl font-semibold mb-2">About</h2>
          <p className="max-w-xl mx-auto">Info</p>
        </div>
      </section>

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

      {/* Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"
        strategy="beforeInteractive"
      />
      <Script id="init-vanta" strategy="afterInteractive">
        {`
          VANTA.WAVES({
            el: "#homepage-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1d1f20
          });
        `}
      </Script>
    </div>
  );
}
