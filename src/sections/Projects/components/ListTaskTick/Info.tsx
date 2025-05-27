import Image from "next/image";

import { InfoWrapper } from "../InfoWrapper";

export function Info() {
  return (
    <InfoWrapper>
      <h3 className="text-[1.75em] text-sky-400 font-bold text-center lg:text-left">
        ListTaskTick
      </h3>

      <div className="flex flex-col text-gray-400 -mt-4">
        <span className="text-[0.75em] max-w-full text-gray-400">
          [ Next.js, TypeScript, Material-UI, D3, Apollo Client, Jest ]
        </span>
      </div>
      <span className="text-[0.875em] text-gray-200 max-w-full">
        List-making mobile application that implements CRUD functionality.
      </span>

      <div className="flex justify-around items-center">
        <a
          href="https://apps.apple.com/us/app/listtasktick/id6723865056"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projects/listtasktick/Apple.svg"
            alt="Download on the App Store"
            className="w-[8em] h-auto"
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
            className="w-[10.25em] h-auto"
          />
        </a>
      </div>
    </InfoWrapper>
  );
}
