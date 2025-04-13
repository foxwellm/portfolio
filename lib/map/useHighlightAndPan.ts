import { useEffect, useRef } from "react";
import { LngLatLike } from "mapbox-gl";

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

export function useHighlightAndPan(map: mapboxgl.Map | null, inView: boolean) {
  const currentIndexRef = useRef(0);
  const interruptedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!map) return;

    if (!inView) {
      interruptedRef.current = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    interruptedRef.current = false;
    currentIndexRef.current = 0;
    highlightedCountries.length = 0;

    const spotlightCountry = () => {
      if (interruptedRef.current) {
        return;
      }

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
  }, [map, inView]);
}
