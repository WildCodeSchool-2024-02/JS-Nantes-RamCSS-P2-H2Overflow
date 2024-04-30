import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./styles/PagePrincipale.css";

function Map({ dataMappy, setCodeBss }) {
  const dataReady = dataMappy.data.filter(
    (el) =>
      el.geometry &&
      el.profondeur_investigation &&
      el.nom_commune &&
      el.nom_departement &&
      el.date_debut_mesure &&
      el.date_fin_mesure &&
      el.libelle_pe
  );

  return (
    <div className="map-leaflet">
      <MapContainer center={[46.78, 2.7]} zoom={6.4}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataReady.map((el) => (
          <Marker
            key={el.code_bss}
            eventHandlers={{
              click: () => {
                setCodeBss(el.code_bss);
              },
            }}
            position={[el.geometry.coordinates[1], el.geometry.coordinates[0]]}
            riseOnHover
          >
            <Popup className="popup">
              <p className="inside-popup">
                Nappe phréatique <br />
                <b>
                  {el.nom_commune}, {el.nom_departement}
                </b>
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
