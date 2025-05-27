"use client";

import Image from "next/image";
import { useRef } from "react";

import { useObserveThreshold } from "@/hooks";

import { Info } from "./Info";

export function ListTaskTick() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useObserveThreshold(containerRef);

  return (
    <>
      <div className="flex flex-1 flex-col justify-between gap-8 py-8">
        <Info />
      </div>

      <div className="flex flex-1 justify-center md:py-8">
        <div ref={containerRef} className="flex max-w-[1000px]">
          <div
            className={`-translate-y-4 md:-translate-y-8 translate-x-4 md:translate-x-12 ${
              isContainerInView
                ? "animate-fly-in-left-delay-500"
                : "animate-fly-out-left-delay-500"
            }`}
          >
            <Image
              src="/projects/listtasktick/Example New.png"
              alt="Example New"
              className="w-full h-auto object-contain"
              width={500}
              height={1000}
            />
          </div>

          <div
            className={`${
              isContainerInView
                ? "animate-fly-in-left-delay-250"
                : "animate-fly-out-left-delay-250"
            }`}
          >
            <Image
              src="/projects/listtasktick/Example Note.png"
              alt="Example Note"
              width={500}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>

          <div
            className={`translate-y-4 md:translate-y-8 -translate-x-4  md:-translate-x-12 ${
              isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
            }`}
          >
            <Image
              src="/projects/listtasktick/Example Checklist.png"
              alt="Example Checklist"
              width={500}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
