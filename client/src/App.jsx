import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import Groundwatercard from "./components/Groundwatercard"

function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;
