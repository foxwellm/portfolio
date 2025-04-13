"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { addMapLayers } from "../../../../lib/map/addMapLayers";
import { useHighlightAndPan } from "../../../../lib/map/useHighlightAndPan";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function About() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  useHighlightAndPan(mapRef.current, isSectionInView);

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

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsSectionInView(false);
            // Reset Map
            map.jumpTo({
              center: [0, 0],
              zoom: 1.5,
            });
            if (map.isStyleLoaded()) {
              map.setFilter("countries-highlight", ["in", "name", ""]);
            }
          } else {
            setIsSectionInView(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observerRef.current.observe(mapContainerRef.current);

    map.on("load", () => {
      addMapLayers(map);

      return () => {
        observerRef.current?.disconnect();
        map.remove();
      };
    });
  }, []);

  return (
    <section
      id="about"
      className="h-screen bg-black text-white flex flex-col md:flex-row"
    >
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl w-full px-4 py-8">
          {/* Image */}
          <div className="group perspective mb-8">
            <div
              className={`${
                isSectionInView ? "animate-fly-in-left" : "hidden"
              }`}
            >
              <img
                src="/workprofile.jpeg"
                alt="Profile"
                className="w-80 h-80 rounded-2xl object-cover backface-hidden"
              />
            </div>
          </div>

          {/* Text */}
          <div className="animate-fly-in-left text-center max-w-md">
            <h2 className="text-4xl font-bold mb-6 text-center text-sky-400">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              I grew up across the globe — living in Canada, Brazil, Scotland,
              France, the Philippines, Gabon, and England before settling in
              Houston, TX at 18.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              After serving as an electrician in the U.S. Navy in Japan, I
              discovered a passion for programming through a C++ class and built
              my first web app from a PHP/MySQL book. That spark led me to
              graduate from Turing School of Software & Design — and I’ve been
              building ever since.
            </p>
          </div>
        </div>
      </div>

      <div className="w-3/5 md:w-2/3 h-64 md:h-full">
        <div ref={mapContainerRef} className="h-full w-full relative" />
      </div>
    </section>
  );
}
