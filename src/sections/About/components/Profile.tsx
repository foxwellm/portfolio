"use client";

import Image from "next/image";
import { useRef } from "react";

import { useObserveThreshold } from "@/hooks";

export function Profile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useObserveThreshold(containerRef);

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-16 justify-center items-center flex-1 p-8"
    >
      {/* Image */}
      <div
        className={`w-[clamp(16rem,18vw,20rem)] ${
          isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
        }`}
      >
        <Image
          src="/about/workprofile.jpeg"
          alt="Profile"
          width={320}
          height={320}
          className="rounded-2xl object-cover w-full h-auto"
        />
      </div>

      {/* Text */}
      <div
        className={`text-center lg:text-left
    ${isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"}
  `}
      >
        <h2 className="text-center text-[clamp(1.25rem,2vw,2.25rem)] font-bold text-sky-400">
          About Me
        </h2>
        <p className="text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed">
          I grew up across the globe — living in Canada, Brazil, Scotland,
          France, the Philippines, Gabon, and England before settling in
          Houston, TX at 18.
        </p>
        <p className="text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed mt-4">
          After serving as an electrician in the U.S. Navy in Japan, I
          discovered a passion for programming through a C++ class and built my
          first web app from a PHP/MySQL book. That spark led me to graduate
          from Turing School of Software & Design — and I’ve been building ever
          since.
        </p>
      </div>
    </div>
  );
}
