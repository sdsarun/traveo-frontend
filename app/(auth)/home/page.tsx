"use client";

import "leaflet/dist/leaflet.css";
import { useState } from "react";

import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMapEvent, useMapEvents } from "react-leaflet";

const ClickHandler = () => {
  useMapEvent("click", (e) => {
    console.log("Map clicked at:", e);
    // alert(`Map clicked at latitude: ${e.latlng.lat}, longitude: ${e.latlng.lng}`);
  });

  return null; // This component does not render anything on the map.
};

function LocationMarker() {
  const [position, setPosition] = useState<any>(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default function Home() {
  return (
    <div className="h-screen">
      <MapContainer center={[51.505, -0.09]} zoom={13} className="h-screen">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Hybrid">
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
              attribution="&copy; <a href='https://www.google.com/maps'>Google Maps</a>"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <ClickHandler />
        <LocationMarker />

      </MapContainer>
    </div>
  );
}
