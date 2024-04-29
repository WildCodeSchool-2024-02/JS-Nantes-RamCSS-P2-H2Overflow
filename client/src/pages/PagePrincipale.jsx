import { useEffect, useState } from "react";
import Map from "../components/Map";
import Footer from "../components/Footer";
import "../components/styles/PagePrincipale.css";
import "../components/styles/header.css";
import Spinner from "../components/Spinner";
import ContainerComposant from "../components/ContainerComposant";

function PagePrincipale() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [dataMap, setdataMap] = useState();
  // const [codeBss, setCodeBss] = useState("05373X0545/5411");

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?format=json&size=1000"
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

  return isLoadingMap ? (
    <Spinner />
  ) : (
    <main className="main">
      <div className="groundwater-chartcard">
        <ContainerComposant
          isLoadingMap={isLoadingMap}
          setIsLoadingMap={setIsLoadingMap}
          // codeBss={codeBss}
          dataMap={dataMap}
        />
        <Footer />
      </div>
      <Map dataMappy={dataMap} setdataMap={setdataMap} />
    </main>
  );
}

export default PagePrincipale;
