import { MapContainer, TileLayer } from "react-leaflet";
import "./styles/PagePrincipale.css";

function Map() {
  return (
    <div className="map-leaflet">
      <MapContainer center={[46.78, 2.7]} zoom={6.4}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
