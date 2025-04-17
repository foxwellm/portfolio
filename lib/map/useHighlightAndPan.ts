import { useEffect, useRef } from "react";
import { startGlobeSpin, stopGlobeSpin } from "./spinGlobe";
import { LngLatLike } from "mapbox-gl";
import { pingCity, stopPings } from "./pingCity";
import { PlaceLived } from "./types";
import { placesLived } from "./constants";

const highlightedCountries: string[] = [];

function highlightCountry(map: mapboxgl.Map, placeLived: PlaceLived) {
  highlightedCountries.push(placeLived.country);
  map.setFilter("countries-highlight", ["in", "name", ...highlightedCountries]);

  pingCity(map, placeLived);
}

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
      map.jumpTo({
        center: [0, 0],
        zoom: 1.5,
      });
      // Check style loaded in case initial render
      if (map.isStyleLoaded()) {
        map.setFilter("countries-highlight", ["in", "name", ""]);
      }
      stopGlobeSpin();
      stopPings(map);
      return;
    }

    interruptedRef.current = false;
    currentIndexRef.current = 0;
    highlightedCountries.length = 0;

    const spotlightCountry = () => {
      if (interruptedRef.current) {
        return;
      }

      if (currentIndexRef.current >= placesLived.length) {
        startGlobeSpin(map);
        return;
      }

      const next = placesLived[currentIndexRef.current];
      highlightCountry(map, next);

      map.flyTo({
        center: next.cityCoords as LngLatLike,
        zoom: 1.5,
        speed: 0.5,
        curve: 1,
      });

      currentIndexRef.current++;

      timeoutRef.current = setTimeout(spotlightCountry, 3000);
    };

    timeoutRef.current = setTimeout(spotlightCountry, 3000);
  }, [map, inView]);
}
