"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import React from "react";
import MapGL from "react-map-gl";

export type MapProps = React.ComponentProps<typeof MapGL>;

export default function Map({ children, ...props }: MapProps) {
  return (
    <MapGL
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapStyle={"mapbox://styles/mapbox/outdoors-v12"}
      {...props}
    >
      {children}
    </MapGL>
  );
}
