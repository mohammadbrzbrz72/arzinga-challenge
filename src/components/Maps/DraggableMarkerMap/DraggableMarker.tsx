import { useState, useRef, useMemo, useEffect } from "react";
import { Marker } from "react-leaflet";

interface ILatLng {
  lat: number;
  lng: number;
}
export interface IGetLatLng {
  getLatLng: (props: ILatLng) => void;
}
interface IDraggableMarker extends IGetLatLng {}
export const center = {
  lat: 51.505,
  lng: -0.09,
};

export default function DraggableMarker({ getLatLng }: IDraggableMarker) {
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current as any;
        if (marker != null) {
          const latLng = marker.getLatLng();
          setPosition(latLng);
          getLatLng(latLng);
        }
      },
    }),
    []
  );

  useEffect(() => {
    getLatLng(center);
  }, []);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    ></Marker>
  );
}
