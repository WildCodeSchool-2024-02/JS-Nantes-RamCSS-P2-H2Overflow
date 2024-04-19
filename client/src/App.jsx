import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://hubeau.eaufrance.fr/api//v1/niveaux_nappes/chroniques_tr?page=20&size=1000"
    )
      .then((response) => response.json())
      .then((resData) => {
        setData(resData);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Header data={data} />
      <Outlet />
    </>
  );
}

export default App;
