import { useState, useEffect } from "react";
import TextPageLoader from "../components/TextPageLoader";

import Spinner from "../components/Spinner";

import "../components/styles/home.css";

function Home() {
  // Utilisez useContext pour accéder au contexte ButtonClickContext
  const [isLoading, setIsLoading] = useState(true);

  const [stationData, setStationData] = useState(null);

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?date_recherche=2024-01-01&format=json&size=2879"
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
        setIsLoading(false); // Assurez-vous que isLoading est toujours réinitialisé, même en cas d'erreur
      });
  }, []);
  if (isLoading) {
    return <Spinner />;
  }

  // en attente pour le .map

  // let profondeurNappe = 0;
  // // let calcul = 0;
  // const profondeurNappeArray = [];

  // for (let i = 0; i < stationData.data.length; i += 1) {
  //   if (stationData.data[i].profondeur_investigation) {
  //     const nappeArray = stationData.data[i].profondeur_investigation;
  //     profondeurNappe += nappeArray;
  //     // calcul = profondeurNappe / stationData.data.length;

  //     profondeurNappeArray.push(nappeArray);
  //   }
  // }

  return <TextPageLoader stationData={stationData.data.length} />;
}

export default Home;
