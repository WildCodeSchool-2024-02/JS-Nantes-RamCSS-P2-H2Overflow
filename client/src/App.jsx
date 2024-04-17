import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://hubeau.eaufrance.fr/api/v1/hydrobio/taxons")
      .then((response) => response.json())
      .then((resData) => {
        setData(resData);
        setIsLoading(false);
      });
  }, []);

  // console.log("%c⧭", "color: #00a3cc", data);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  // return <TextPageLoader data={data.data.length} />;

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* // data pour commit */}
      <Header data={data} />
      <Outlet />
    </>
  );
}

export default App;
