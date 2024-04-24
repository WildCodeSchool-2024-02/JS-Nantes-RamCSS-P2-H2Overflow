import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations")
      .then((response) => response.json())
      .then((resData) => {
        setData(resData);
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

  const yearsArray = [];
  for (let i = 0; i < data.data.length; i += 1) {
    const datesArray = data.data[i].profondeur_investigation;
    const yearsString = datesArray;
    yearsArray.push(yearsString);
  }
  // const years = [...new Set(yearsArray)];

  return (
    <>
      <Header data={data} />
      <Outlet />
    </>
  );
}

export default App;
