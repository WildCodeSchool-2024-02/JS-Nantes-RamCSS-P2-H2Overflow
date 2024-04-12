import "./App.css";
import Header from "./components/Header";
import PagePrincipale from "./pages/PagePrincipale";
import TextPageLoader from "./components/TextPageLoader";
import Groundwatercard from "./components/Groundwatercard"

function App() {
  return (
    <>
      <Header />
      <PagePrincipale />
      <TextPageLoader />
    </>
  );
}

export default App;
