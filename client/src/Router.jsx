import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import PagePrincipale from "./pages/PagePrincipale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () =>
          fetch("https://hubeau.eaufrance.fr/api/v1/hydrobio/taxons"),
      },
      {
        path: "/map",
        element: <PagePrincipale />,
      },
    ],
  },
]);

export default router;
