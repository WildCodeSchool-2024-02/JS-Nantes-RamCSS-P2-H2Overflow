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
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [dataMap, setdataMap] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [stationsData, setStationsData] = useState(null);
  const [chroniquesData, setChroniquesData] = useState(null);
  const codeBss = "00147D0218/P1";

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?size=1000"
    )
      .then((response) => response.json())
      .then((resdataMap) => {
        setdataMap(resdataMap);
        setIsLoadingMap(false);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchStations = fetch(
      `https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?code_bss=${codeBss}&fields=profondeur_investigation%2Cdate_debut_mesure%2Cdate_fin_mesure%2Cnom_commune%2Cnom_departement%2Clibelle_pe`,
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

  if (isLoadingMap) {
    return <Spinner />;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <main className="main">
      <div className="groundwater-chartcard">
        <Groundwatercard
          nappeProfondeur={chroniquesData.data[0].profondeur_nappe}
          investigationNappe={stationsData.data[0].profondeur_investigation}
        />
        <NapeHome
          ville={stationsData.data[0].nom_commune}
          departement={stationsData.data[0].nom_departement}
          dateDebut={stationsData.data[0].date_debut_mesure}
          dateFin={stationsData.data[0].date_fin_mesure}
          profondeur={stationsData.data[0].profondeur_investigation}
          nomNappe={stationsData.data[0].libelle_pe}
        />
        <Chartcard
          dataChronique={chroniquesData.data}
          dataStation={stationsData.data}
        />
        <Footer />
      </div>
      <Map dataMappy={dataMap} setdataMap={setdataMap} />
    </main>
  );
}

export default PagePrincipale;
