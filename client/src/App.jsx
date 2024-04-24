import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?size=20000"
    )
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

  // *en attente de calcule et de logique

  // let profondeurNappe = 0;
  // const profondeurNappeArray = [];
  // for (let i = 0; i < data.data.length; i += 1) {
  //   console.log("%c⧭", "color: #99adcc", data.data[i].bss_id)
  //   if (data.data[i].profondeur_investigation) {
  //     const nappeArray = data.data[i].profondeur_investigation;

  //     profondeurNappeArray.push(nappeArray);
  //   }
  // }
  // console.log("%c⧭", "color: #99adcc", profondeurNappe);
  // // const years = [...new Set(yearsArray)];

  return (
    <>
      <Header data={data} />
      <Outlet />
    </>
  );
}

export default App;
