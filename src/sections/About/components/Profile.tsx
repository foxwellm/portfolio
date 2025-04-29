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
      className="w-full lg:w-2/5 flex items-center justify-center flex-col px-0 lg:px-4 py-4 lg:py-0"
    >
      {/* Image */}
      <div
        className={`xs:w-80 md:w-50 2xl:w-100 ${
          isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
        }`}
      >
        <Image
          src="/about/workprofile.jpeg"
          alt="Profile"
          width={320}
          height={320}
          className="rounded-2xl object-cover"
        />
      </div>
      {/* Text */}
      <div
        className={`text-center lg:text-left px-16 lg:px-4 xl:px-8 lg:pt-2 2xl:pt-12
            ${
              isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
            }`}
      >
        <h2 className="text-xl 2xl:text-4xl font-bold mb-2 text-sky-400">
          About Me
        </h2>
        <p className="text-sm 2xl:text-xl leading-relaxed">
          I grew up across the globe — living in Canada, Brazil, Scotland,
          France, the Philippines, Gabon, and England before settling in
          Houston, TX at 18.
        </p>
        <p className="text-sm 2xl:text-xl leading-relaxed mt-4">
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
