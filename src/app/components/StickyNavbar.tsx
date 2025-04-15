export function StickyNavbar() {
  return (
    <nav className={`sticky bg-black h-16 top-0 z-20 bg-opacity-100 text-white px-6 flex justify-center items-center gap-16`}>
      <a href="#home" className="hover:text-gray-300 transition">
        Home
      </a>
      <a href="#about" className="text-sky-400 text-2xl leading-6 ">
        About
      </a>
      <a href="#projects" className="hover:text-gray-300 transition">
        Projects
      </a>
      <a href="#contact" className="hover:text-gray-300 transition">
        Contact
      </a>
    </nav>
  );
}
