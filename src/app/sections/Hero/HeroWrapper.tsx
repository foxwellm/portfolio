export default function HeroWrapper({
  background,
  scrollDownIndicator,
}: {
  background?: React.ReactNode;
  scrollDownIndicator?: React.ReactNode;
}) {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {background}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I&#39;m <span className="text-sky-400">Matthew</span>.
        </h1>
        <p className="text-xl max-w-xl">I&#39;m a full stack web developer.</p>

        <a
          href="/MatthewFoxwellResume.pdf"
          download
          className="mt-6 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-md text-sm transition duration-300 md:hidden"
        >
          Download Resume
        </a>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-fadeIn duration-3000">
        {scrollDownIndicator}
      </div>
    </section>
  );
}
