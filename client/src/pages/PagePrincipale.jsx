import { useEffect, useState } from "react";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Groundwatercard from "../components/Groundwatercard";
import Chartcard from "../components/ChartCard";
import "../components/styles/PagePrincipale.css";
import "../components/styles/header.css";
import NapeHome from "../components/NapeHome";
import Spinner from "../components/Spinner";

function PagePrincipale() {
  const [isLoading, setIsLoading] = useState(true);
  const [stationsData, setStationsData] = useState(null);
  const [chroniquesData, setChroniquesData] = useState(null);
  const codeBss = "00692X0062/P";

  useEffect(() => {
    setIsLoading(true);

    const fetchStations = fetch(
      `https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?code_bss=${codeBss}&fields=profondeur_investigation`,
      { compress: true }
    );
    const fetchChroniques = fetch(
      `https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?code_bss=${codeBss}&fields=date_mesure%2Cprofondeur_nappe&size=8500`,
      { compress: true }
    );

    Promise.all([fetchStations, fetchChroniques])
      .then(([stationsResponse, chroniquesResponse]) =>
        Promise.all([stationsResponse.json(), chroniquesResponse.json()])
      )
      .then(([stationsResData, chroniquesResData]) => {
        setStationsData(stationsResData);
        setChroniquesData(chroniquesResData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [codeBss]);

  return isLoading ? (
    <Spinner />
  ) : (
    <main className="main">
      <div className="groundwater-chartcard">
        <Groundwatercard
          nappeProfondeur={chroniquesData.data[0].profondeur_nappe}
          investigationNappe={stationsData.data[0].profondeur_investigation}
        />
        <NapeHome />
        <Chartcard
          dataChronique={chroniquesData.data}
          dataStation={stationsData.data}
        />
        <Footer />
      </div>
      <Map />
    </main>
  );
}

export default PagePrincipale;
