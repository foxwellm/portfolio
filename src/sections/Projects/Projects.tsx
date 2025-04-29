import Image from "next/image";

import { PhoneDisplay } from "./components";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex py-32 lg:py-0 lg:min-h-[calc(100vh-4rem)] scroll-mt-16 bg-gray-950 text-white px-8"
    >
      <div className="flex flex-col lg:flex-row items-center w-full gap-16">
        <PhoneDisplay />

        <div className="lg:text-left max-w-md">
          <h3 className="text-3xl text-sky-400 font-bold mb-2">ListTaskTick</h3>
          <p className="text-gray-300 mb-4">
            React Native / TypeScript list-making application that implements
            CRUD functionality.
          </p>

          <div className="flex gap-8 mt-4 justify-center lg:justify-start">
            <a
              href="https://apps.apple.com/us/app/listtasktick/id6723865056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/Apple.svg"
                alt="Download on the App Store"
                width={260}
                height={20}
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
