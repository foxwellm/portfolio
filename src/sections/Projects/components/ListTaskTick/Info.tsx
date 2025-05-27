import Image from "next/image";

import { InfoWrapper } from "../InfoWrapper";

export function Info() {
  return (
    <InfoWrapper
      header={"ListTaskTick"}
      techStacks={["[ React Native, TypeScript ]"]}
      description="List-making mobile application that implements CRUD functionality."
      links={
        <>
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
        </>
      }
    />
  );
}
