"use client";

import { useRef } from "react";

import { useObserveThreshold } from "@/hooks";
export function ExpenseTrackerDisplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useObserveThreshold(containerRef);

  return (
    <div
      ref={containerRef}
      className="flex justify-center -translate-y-8 w-full lg:w-auto"
    >
      <div
        className={`sm:w-180 md:w-64 lg:w-90 xl:w-124 2xl:w-184 ${
          isContainerInView
            ? "animate-fly-in-left-delay-500"
            : "animate-fly-out-left-delay-500"
        }`}
      >
        <video
          className="w-full h-auto object-contain"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source
            src="/projects/expense-tracker/laptop-demo.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className={`sm:w-80 md:w-64 lg:w-50 xl:w-64 2xl:w-84 translate-y-8 -translate-x-12 ${
          isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
        }`}
      >
        <video
          className="w-full h-auto object-contain"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source
            src="/projects/expense-tracker/phone-demo.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
