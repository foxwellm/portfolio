"use client";

import { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import { addMapLayers } from "../../../../lib/map/addMapLayers";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const highlightedCountries: string[] = [];

function highlightCountry(map: mapboxgl.Map, countryName: string) {
  if (!highlightedCountries.includes(countryName)) {
    highlightedCountries.push(countryName);
  }

  map.setFilter("countries-highlight", ["in", "name", ...highlightedCountries]);
}

const cities = [
  { country: "Canada", cityCoords: [-63.5724, 44.6488] },
  { country: "Brazil", cityCoords: [-46.6333, -23.5505] },
  // TODO: add rest
] as { country: string; cityCoords: LngLatLike }[];

export default function About() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const currentIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    currentIndexRef.current = 0;
    highlightedCountries.length = 0;

    const spotlightCountry = () => {
      if (currentIndexRef.current >= cities.length) {
        return;
      }

      const next = cities[currentIndexRef.current];
      highlightCountry(map, next.country);

      map.flyTo({
        center: next.cityCoords,
        zoom: 1.5,
        speed: 0.5,
        curve: 1,
      });

      currentIndexRef.current++;

      timeoutRef.current = setTimeout(spotlightCountry, 3000);
    };

    timeoutRef.current = setTimeout(spotlightCountry, 1000);

    map.on("load", () => {
      addMapLayers(map);

      return () => {
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
            <img
              src="/workprofile.jpeg"
              alt="Profile"
              className="w-80 h-80 rounded-2xl object-cover backface-hidden"
            />
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
