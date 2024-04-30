import { useEffect, useState } from "react";
import Chartcard from "./ChartCard";
import NapeHome from "./NapeHome";
import Groundwatercard from "./Groundwatercard";
import Spinner from "./Spinner";
import "./styles/PagePrincipale.css";
import "./styles/containerComposant.css";

function ContainerComposant({ isLoadingMap, codeBss, dataMap }) {
  const [chroniquesData, setChroniquesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchChroniques = fetch(
      `https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?code_bss=${codeBss}&fields=date_mesure%2Cprofondeur_nappe&sort=desc&size=8500`,
      { compress: true }
    );

    Promise.all([fetchChroniques])
      .then(([chroniquesResponse]) => Promise.all([chroniquesResponse.json()]))
      .then(([chroniquesResData]) => {
        setChroniquesData(chroniquesResData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
    // }
  }, [codeBss, dataMap]);

  const filtreCodeBss = [];
  let j = 0;
  if (isLoadingMap === false) {
    for (j; j < dataMap.data.length; j += 1) {
      const codeBssArray = dataMap.data[j].code_bss;
      filtreCodeBss.push(codeBssArray);
    }
  }

  const newBss = dataMap.data.find((el) => el.code_bss === codeBss);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container-composants">
      <Groundwatercard
        nappeProfondeur={chroniquesData.data[0].profondeur_nappe}
        investigationNappe={newBss.profondeur_investigation}
      />
      <NapeHome
        ville={newBss.nom_commune}
        departement={newBss.nom_departement}
        dateDebut={newBss.date_debut_mesure}
        dateFin={newBss.date_fin_mesure}
        profondeur={newBss.profondeur_investigation}
        nomNappe={newBss.libelle_pe}
      />
      <Chartcard
        dataChronique={chroniquesData.data}
        dataStation={newBss.profondeur_investigation}
      />
    </div>
  );
}

export default ContainerComposant;
