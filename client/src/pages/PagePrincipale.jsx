import { useState, useEffect } from "react";
import Map from "../components/Map";
import Groundwatercard from "../components/Groundwatercard";
import Chartcard from "../components/ChartCard";
import "../components/styles/PagePrincipale.css";
import "../components/styles/header.css";
import Spinner from "../components/Spinner";

function PagePrincipale() {
  const [isLoading, setIsLoading] = useState(true);

  const [dataMap, setdataMap] = useState();

  useEffect(() => {
    fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations")
      .then((response) => response.json())
      .then((resdataMap) => {
        setdataMap(resdataMap);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      });
  }, []);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="main">
      <div className="groundwater-chartcard">
        <Groundwatercard />
        <Chartcard />
      </div>
      <Map dataMappy={dataMap} setdataMap={setdataMap} />
    </main>
  );
}

export default PagePrincipale;
