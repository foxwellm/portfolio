import { Chevron } from "../Chevron";
import VantaBackgroundWrapper from "../VantaBackgroundWrapper";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <VantaBackgroundWrapper />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I&#39;m <span className="text-sky-400">Matthew</span>.
        </h1>
        <p className="text-xl max-w-xl">I&#39;m a full stack web developer.</p>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-fadeIn duration-3000">
        <Chevron />
      </div>
    </section>
  );
}
