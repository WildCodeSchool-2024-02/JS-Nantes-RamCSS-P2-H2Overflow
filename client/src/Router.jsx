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
      },
      {
        path: "/map",
        element: <PagePrincipale />,
      },
      0,
    ],
  },
]);

export default router;
