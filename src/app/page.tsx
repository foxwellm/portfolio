import About from "./sections/About/About";
import Contact from "./sections/Contact";
import HeroClientWrapper from "./sections/Hero/HeroClientWrapper";
import Projects from "./sections/Projects/Projects";
import StickyNavbar from "./sections/StickyNavbar";

export default function Main() {
  return (
    <div className="relative scroll-smooth">
      <HeroClientWrapper />
      <StickyNavbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
