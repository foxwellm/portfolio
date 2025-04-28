import { Position } from "geojson";

export type PlaceLived = {
  country: string;
  city: string;
  cityCoords: Position;
};
