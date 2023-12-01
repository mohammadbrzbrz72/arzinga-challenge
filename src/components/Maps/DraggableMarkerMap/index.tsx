"use client";
import { useEffect } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import DraggableMarker, { center, IGetLatLng } from "./DraggableMarker";

interface IDraggableMarkerMap extends IGetLatLng {}

export default function DraggableMarkerMap({ getLatLng }: IDraggableMarkerMap) {
  useEffect(() => {
    (async function init() {
      delete (Leaflet as any).Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
        iconUrl: "/leaflet/images/marker-icon.png",
        shadowUrl: "/leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer
      className="w-full h-full"
      center={center}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker getLatLng={getLatLng} />
    </MapContainer>
  );
}
