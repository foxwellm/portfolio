import Profile from "./Profile";
import LivedMap from "./LivedMap";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] scroll-mt-16 bg-gray-950 text-white flex flex-col lg:flex-row"
    >
      <Profile />
      <LivedMap />
    </section>
  );
}
