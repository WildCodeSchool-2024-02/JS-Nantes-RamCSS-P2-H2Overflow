import TextPageLoader from "../components/TextPageLoader";
import "../components/styles/home.css";

function Home() {
  // if (isLoading) {
  //   return <Spinner />;
  // }
  // return <TextPageLoader data={data.data.length} />;

  return <TextPageLoader data={1000} />;
}
export default Home;
