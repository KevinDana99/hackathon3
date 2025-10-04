import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
  return (
    <MapContainer
      center={[-34.6037, -58.3816]} // Buenos Aires
      zoom={13}
      className="h-full w-full rounded-lg"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.6037, -58.3816]}>
        <Popup>¡Hola! Estoy en Buenos Aires 🇦🇷</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
