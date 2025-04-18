"use client";

import Image from "next/image";
import { useObserveThreshold } from "../../../hooks/useObserveThreshold";
import { useRef } from "react";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useObserveThreshold(sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-[calc(100vh-4rem)] scroll-mt-16 bg-red-900 text-white px-8 py-16"
    >
      <div className="flex flex-col lg:flex-row items-center w-full gap-16">
        {/* Images */}
        <div className="flex justify-center translate-x-12 -translate-y-8 w-full lg:w-auto">
          <div
            className={`sm:w-80 md:w-64 lg:w-50 xl:w-64 2xl:w-84 ${
              isContainerInView
                ? "animate-fly-in-left-delay-500"
                : "animate-fly-out-left-delay-500"
            }`}
          >
            <Image
              src="/projects/Example New.png"
              alt="Example New"
              layout="responsive"
              width={500}
              height={1000}
              className="object-contain"
            />
          </div>

          <div
            className={`sm:w-80 md:w-64 lg:w-50 xl:w-64 2xl:w-84 translate-y-8 -translate-x-12 ${
              isContainerInView
                ? "animate-fly-in-left-delay-250"
                : "animate-fly-out-left-delay-250"
            }`}
          >
            <Image
              src="/projects/Example Note.png"
              alt="Example Note"
              layout="responsive"
              width={500}
              height={1000}
              className="object-contain"
            />
          </div>

          <div
            className={`sm:w-80 md:w-64 lg:w-50 xl:w-64 2xl:w-84 translate-y-16 -translate-x-24 ${
              isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
            }`}
          >
            <Image
              src="/projects/Example Checklist.png"
              alt="Example Checklist"
              layout="responsive"
              width={500}
              height={1000}
              className="object-contain"
            />
          </div>
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
