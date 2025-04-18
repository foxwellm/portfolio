"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { addMapLayers } from "../../../lib/map/addMapLayers";
import { useHighlightAndPan } from "../../../lib/map/useHighlightAndPan";
import Image from "next/image";
import { useObserveThreshold } from "../../../hooks/useObserveThreshold";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function About() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const isContainerInView = useObserveThreshold(containerRef);

  useHighlightAndPan(mapRef.current, isContainerInView);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [0, 0],
      zoom: 1.5,
      interactive: false,
      projection: "globe",
    });

    mapRef.current = map;

    map.on("load", () => {
      addMapLayers(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section
      id="about"
      className={`min-h-[calc(100vh-4rem)] scroll-mt-16 bg-black text-white flex flex-col lg:flex-row`}
    >
      <div
        ref={containerRef}
        className="w-full lg:w-2/5 flex items-center justify-center flex-col px-4"
      >
        {/* Image */}
        <div
          className={`xs:w-80 2xl:w-100 ${
            isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
          }`}
        >
          <Image
            src="/workprofile.jpeg"
            alt="Profile"
            layout="responsive"
            width={320}
            height={320}
            className="rounded-2xl object-cover"
          />
        </div>
        {/* Text */}
        <div
          className={`text-center lg:text-left px-16 xl:pt-12 lg:pt-4
            ${
              isContainerInView ? "animate-fly-in-left" : "animate-fly-out-left"
            }`}
        >
          <h2 className="md:text-4xl font-bold mb-2 text-sky-400">About Me</h2>
          <p className="md:text-xl leading-relaxed">
            I grew up across the globe — living in Canada, Brazil, Scotland,
            France, the Philippines, Gabon, and England before settling in
            Houston, TX at 18.
          </p>
          <p className="md:text-xl leading-relaxed mt-4">
            After serving as an electrician in the U.S. Navy in Japan, I
            discovered a passion for programming through a C++ class and built
            my first web app from a PHP/MySQL book. That spark led me to
            graduate from Turing School of Software & Design — and I’ve been
            building ever since.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-auto lg:w-3/5 h-auto">
        <div ref={mapContainerRef} className="h-full w-full relative" />
      </div>
    </section>
  );
}
