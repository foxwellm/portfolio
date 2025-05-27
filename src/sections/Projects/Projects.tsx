import Image from "next/image";

import { PhoneDisplay } from "./components";
import { ExpenseTracker } from "./components/ExpenseTracker";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex-1 flex-col bg-gray-950 py-32 space-y-32 scroll-mt-16 text-white px-8"
    >
      <ExpenseTracker />

      <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
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
                src="/projects/listtasktick/Apple.svg"
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
