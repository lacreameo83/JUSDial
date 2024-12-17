import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure you include Leaflet CSS

const WorldMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Center of the map
      zoom={13} // Initial zoom level
      scrollWheelZoom={false} // Disable zooming with mouse wheel
      style={{ height: "400px", width: "100%" }} // Map dimensions
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WorldMap;
