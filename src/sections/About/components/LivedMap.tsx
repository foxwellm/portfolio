"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import { useObserveThreshold, useWindowResize } from "@/hooks";
import { useHighlightAndPan } from "../hooks";
import { addMapLayers } from "../lib";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export function LivedMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const isContainerInView = useObserveThreshold(mapContainerRef, 0.2);
  const { width, isBelowBreakpoint } = useWindowResize(1024);

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
      trackResize: true,
    });

    mapRef.current = map;

    map.on("load", () => {
      addMapLayers(map);
      map.resize();
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      style={isBelowBreakpoint ? { height: `${width}px` } : undefined}
      className="lg:w-3/5 lg:h-auto max-h-[calc(100vh-4rem)]"
    >
      <div ref={mapContainerRef} className="h-full w-full relative" />
    </div>
  );
}
