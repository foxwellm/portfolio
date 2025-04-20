import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer";
import HeroClientWrapper from "./sections/Hero/HeroClientWrapper";
import Projects from "./sections/Projects/Projects";
import StickyNavbar from "./sections/Navbar";

const sections = ["home", "about", "projects", "contact"];

export default function Main() {
  return (
    <div className="relative scroll-smooth">
      <StickyNavbar sections={sections} />
      <HeroClientWrapper />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
