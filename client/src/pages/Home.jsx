import { useState, useEffect } from "react";
import TextPageLoader from "../components/TextPageLoader";
import Spinner from "../components/Spinner";
import "../components/styles/home.css";
import "../App.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [stationData, setStationData] = useState(null);

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?date_recherche=2024-01-01&format=json&size=3000"
    )
      .then((response) => response.json())
      .then((resstationData) => {
        setStationData(resstationData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Spinner />;
  }

  // Calcul du pourcentage moyen de la profondeur d'investigation
  const profondeurs = stationData.data.map(
    (station) => station.profondeur_investigation
  );

  // Calcul de la moyenne
  const moyenneProfondeur =
    profondeurs.reduce((acc, curr) => acc + curr, 0) / profondeurs.length;
  const pourcentageArrondi = Math.round(moyenneProfondeur);

  return (
    <TextPageLoader
      stationData={stationData.data.length}
      moyenneProfondeur={pourcentageArrondi}
    />
  );
}

export default Home;
