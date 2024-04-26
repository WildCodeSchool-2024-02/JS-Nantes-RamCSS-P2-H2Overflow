import "./styles/NapeHome.css";
import { useEffect, useState } from "react";

function NapeHome() {
  const [setvilleData] = useState(null);
  const [iseloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?date_recherche=2024-01-01&format=json&size=20000"
    )
      .then((response) => response.json())
      .then((resvilleData) => {
        setvilleData(resvilleData);
        setIsLoading(false);
      });
  }, []);

  if (iseloading === true) {
    return <h1>coucou</h1>;
  }

  return (
    <div className="nape-home">
      <h2 className="titre-nape">Nom de la nappe</h2>
      <p className="P">
        {/* Cette nappe se trouve sur la commune de {villeData} dans le departement */}
        de Loire Atlantique <br />
        Le dernier relevé sur cette nappe a été réalisé le 25/04/2024 <br />
        Cette nappe est en activité depuis le xx/xx/xxxx et sa profondeur est de
        35m
      </p>
    </div>
  );
}

export default NapeHome;
