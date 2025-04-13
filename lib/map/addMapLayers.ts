export const addMapLayers = (map: mapboxgl.Map) => {
  map.addLayer({
    id: "countries-highlight",
    type: "fill",
    source: {
      type: "geojson",
      data: "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson", // GeoJSON data for countries
    },
    paint: {
      "fill-color": "#888",
      "fill-opacity": 0.6,
    },
    filter: ["==", "name", ""],
  });
  map.setFog({
    range: [-1, 0.5],
    "horizon-blend": 0.02,
    color: "#131d2a",
    "high-color": "#809fc6",
    "space-color": "#000000",
    "star-intensity": 1,
  });
};
