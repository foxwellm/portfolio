"use client";

import { useRef } from "react";

import { useObserveThreshold } from "@/hooks";

import { Info } from "./Info";
import { VideoWebM } from "./VideoWebM";

export function ExpenseTracker() {
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const isLeftContainerInView = useObserveThreshold(leftContainerRef, 0);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const isRightContainerInView = useObserveThreshold(rightContainerRef, 0);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Left */}
      <div
        ref={leftContainerRef}
        className="flex flex-1 flex-col justify-between gap-8 py-8"
      >
        <Info />
        <div className="flex justify-center">
          <div
            className={`w-full max-w-[1000px] px-8 ${
              isLeftContainerInView
                ? "animate-fly-in-left-delay-500"
                : "animate-fly-out-left-delay-500"
            }`}
          >
            <VideoWebM fileName="laptop-demo" />
          </div>
        </div>
      </div>
      {/* Right */}
      <div ref={rightContainerRef} className="flex flex-1 justify-center p-8">
        <div className="flex items-center max-w-[1000px] gap-4">
          <div
            className={`translate-y-4 ${
              isRightContainerInView
                ? "animate-fly-in-right-delay-500"
                : "animate-fly-out-right-delay-500"
            }`}
          >
            <VideoWebM fileName="phone-demo" />
          </div>

          <div
            className={`-translate-y-4 ${
              isRightContainerInView
                ? "animate-fly-in-right"
                : "animate-fly-out-right"
            }`}
          >
            <VideoWebM fileName="tablet-demo" />
          </div>
        </div>
      </div>
    </div>
  );
}
