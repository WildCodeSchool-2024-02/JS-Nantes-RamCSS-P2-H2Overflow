import Map from "../components/Map";
import Groundwatercard from "../components/Groundwatercard";
import Chartcard from "../components/ChartCard";
import "../components/styles/PagePrincipale.css";
import "../components/styles/header.css";

function PagePrincipale() {
  return (
    <main className="main">
      <Groundwatercard />
      <Chartcard />
      <Map />
    </main>
  );
}

export default PagePrincipale;
