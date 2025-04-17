import { Feature, Point } from "geojson";
import { GeoJSONSource } from "mapbox-gl";
import { PlaceLived } from "./types";

type PingFeature = Feature<Point, { name: string }>;

const clampToZeroOne = (num: number): number => Math.max(0, Math.min(1, num));

let pingedCities: PingFeature[] = [];
const activePingAnimations = new Map<string, number>();

export function pingCity(map: mapboxgl.Map, placeLived: PlaceLived) {
  const layerId = `ping-layer-${placeLived.city}`;

  map.addLayer({
    id: layerId,
    type: "circle",
    source: `ping-source`,
    paint: {
      "circle-radius": 0,
      "circle-color": "#38bdf8",
      "circle-opacity": 0.8,
    },
  });

  pingedCities.push({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: placeLived.cityCoords,
    },
    properties: {
      name: placeLived.city,
    },
  });

  const source = map.getSource("ping-source") as GeoJSONSource;
  source.setData({
    type: "FeatureCollection",
    features: [...pingedCities],
  });

  let startTime: null | number = null;
  const maxPingSize = 15;
  const animationDuration = 3000;

  const animatePing = (time: number) => {
    if (!startTime) startTime = time;
    const animationProgress = (time - startTime) / animationDuration;
    const circleSize = Math.min(maxPingSize, maxPingSize * animationProgress);

    if (!map.getLayer(layerId)) {
      // Map has gone out of View and pings have reset
      return;
    }

    map.setPaintProperty(layerId, "circle-radius", circleSize);
    map.setPaintProperty(
      layerId,
      "circle-opacity",
      clampToZeroOne(1 - animationProgress)
    );

    if (animationProgress < 1) {
      const frameId = requestAnimationFrame(animatePing);
      activePingAnimations.set(placeLived.city, frameId);
    } else {
      startTime = null;
      const frameId = requestAnimationFrame(animatePing);
      activePingAnimations.set(placeLived.city, frameId);
    }
  };

  const frameId = requestAnimationFrame(animatePing);
  activePingAnimations.set(placeLived.city, frameId);
}

export function stopPings(map: mapboxgl.Map) {
  activePingAnimations.forEach((frameId) => cancelAnimationFrame(frameId));
  activePingAnimations.clear();

  pingedCities.forEach((feature) => {
    const layerId = `ping-layer-${feature.properties.name}`;
    if (map.getLayer(layerId)) {
      map.removeLayer(layerId);
    }
  });

  const source = map.getSource("ping-source") as GeoJSONSource | undefined;
  if (source) {
    source.setData({
      type: "FeatureCollection",
      features: [],
    });
  }

  pingedCities = [];
}
