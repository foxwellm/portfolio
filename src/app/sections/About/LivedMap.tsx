"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { addMapLayers } from "../../../../lib/map/addMapLayers";
import { useHighlightAndPan } from "../../../../lib/map/useHighlightAndPan";
import { useObserveThreshold } from "../../../../hooks/useObserveThreshold";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function LivedMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const isContainerInView = useObserveThreshold(mapContainerRef);

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
    <div className="w-auto lg:w-3/5 h-auto">
      <div ref={mapContainerRef} className="h-full w-full relative" />
    </div>
  );
}
