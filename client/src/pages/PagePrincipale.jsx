import { useEffect, useState } from "react";
import Map from "../components/Map";
import Groundwatercard from "../components/Groundwatercard";
import Chartcard from "../components/ChartCard";
import "../components/styles/PagePrincipale.css";
import "../components/styles/header.css";
import Spinner from "../components/Spinner";

function PagePrincipale() {
  const [isLoading, setIsLoading] = useState(true);
  const [stationsData, setStationsData] = useState(null);
  const [chroniquesData, setChroniquesData] = useState(null);
  const codeBss = "01142X0137/RIP100";

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch(
        `https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?code_bss=${codeBss}&format=json&size=20`
      ),
      fetch(
        `https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?code_bss=${codeBss}&size=20000`
      ),
    ])
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
        <Chartcard
          dataChronique={chroniquesData.data}
          dataStation={stationsData.data}
        />
      </div>
      <Map />
    </main>
  );
}

export default PagePrincipale;
