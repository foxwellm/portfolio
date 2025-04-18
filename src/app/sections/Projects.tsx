import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-4rem)] scroll-mt-16 bg-red-900 text-white px-8 py-16"
    >
      <div className="flex flex-col lg:flex-row items-center w-full md:gap-16">
        {/* Images */}
        <div className="flex justify-center md:translate-x-12 w-full lg:w-auto">
          <img
            src="projects/Example New.png"
            alt="Example New"
            className="md:w-64 lg:w-50 xl:w-64 2xl:w-84"
          />
          <img
            src="projects/Example Note.png"
            alt="Example Note"
            className="md:w-64 lg:w-50 xl:w-64 2xl:w-84 translate-y-8 -translate-x-12"
          />
          <img
            src="projects/Example Checklist.png"
            alt="Example Checklist"
            className="md:w-64 lg:w-50 xl:w-64 2xl:w-84 translate-y-16 -translate-x-24"
          />
        </div>

        {/* Info */}
        <div className="lg:text-left max-w-md">
          <h3 className="text-3xl font-bold mb-2">ListTaskTick</h3>
          <p className="text-gray-300 mb-4">React Native mobile application</p>

          <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            <a
              href="https://apps.apple.com/us/app/listtasktick/id6723865056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="Apple.svg"
                alt="Download on the App Store"
                width={260}
                height={20}
                className=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.fox8844.foxwelllistmaker&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                width={320}
                height={20}
                className="-mt-3"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
