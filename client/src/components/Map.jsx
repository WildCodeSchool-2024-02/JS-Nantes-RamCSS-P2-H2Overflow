import Pin from "./Pin";
import "./styles/PagePrincipale.css";

function Map() {
  return (
    <div className="map">
      <div className="interieur-map">
        <Pin />
        <Pin />
        <Pin />
        <Pin />
      </div>
    </div>
  );
}

export default Map;
