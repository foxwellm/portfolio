import {
  About,
  Chatbot,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
} from "@/sections";

const sections = ["home", "about", "projects", "contact"];

export default function Main() {
  return (
    <>
      <Navbar sections={sections} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}
