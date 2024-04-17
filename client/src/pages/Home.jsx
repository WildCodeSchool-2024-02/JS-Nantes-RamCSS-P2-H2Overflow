import { useLoaderData } from "react-router-dom";
import TextPageLoader from "../components/TextPageLoader";
import "../components/styles/home.css";

function Home() {
  const data = useLoaderData();

  return <TextPageLoader data={data.data.length} />;
}
export default Home;
