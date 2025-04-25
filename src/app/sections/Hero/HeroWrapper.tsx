export default function HeroWrapper({
  background,
  scrollDownIndicator,
}: {
  background?: React.ReactNode;
  scrollDownIndicator?: React.ReactNode;
}) {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-around items-center"
    >
      {background}

      {scrollDownIndicator ? scrollDownIndicator : <div className="h-50" />}

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I&#39;m <span className="text-sky-400">Matthew</span>.
        </h1>
        <p className="text-xl max-w-xl">I&#39;m a full stack web developer.</p>

        <a
          href="/MatthewFoxwellResume.pdf"
          download
          className="mt-6 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-md text-sm transition duration-300 md:hidden"
        >
          Download CV
        </a>
      </div>

      <div className="h-50" />
    </section>
  );
}
