import Map from "../components/Map";
import Groundwatercard from "../components/Groundwatercard";
import "../components/styles/PagePrincipale.css";
import "../components/styles/header.css";
import Footer from "../components/Footer";

function PagePrincipale() {
  return (
    <main className="main">
      <Groundwatercard />
    </>
      <Map />
    </main>
  );
}

export default PagePrincipale;
