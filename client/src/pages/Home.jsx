import { AnimationProvider } from "../components/AnimationContext";
import TextPageLoader from "../components/TextPageLoader";

import "../components/styles/home.css";

function Home() {
  // Utilisez useContext pour accéder au contexte ButtonClickContext

  return (
    <AnimationProvider>
      <TextPageLoader data={1000} />
    </AnimationProvider>
  );
}

export default Home;
