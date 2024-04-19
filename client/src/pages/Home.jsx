import TextPageLoader from "../components/TextPageLoader";

import "../components/styles/home.css";

function Home() {
  // Utilisez useContext pour accéder au contexte ButtonClickContext

  return <TextPageLoader data={1000} />;
}

export default Home;
