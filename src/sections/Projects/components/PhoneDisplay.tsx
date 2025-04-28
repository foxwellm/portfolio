"use client";

import { useObserveThreshold } from "@/hooks";
import Image from "next/image";
import { useRef } from "react";

export function PhoneDisplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useObserveThreshold(containerRef);

  return (
    <div
      ref={containerRef}
      className="flex justify-center translate-x-12 -translate-y-8 w-full lg:w-auto"
    >
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
          width={500}
          height={1000}
          className="object-contain"
        />
      </div>
    </div>
  );
}
