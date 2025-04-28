import { LivedMap, Profile } from "./components";

export function About() {
  return (
    <section
      id="about"
      className="py-16 lg:py-0 lg:min-h-[calc(100vh-4rem)] scroll-mt-16 bg-gray-950 text-white flex flex-col lg:flex-row"
    >
      <Profile />
      <LivedMap />
    </section>
  );
}
