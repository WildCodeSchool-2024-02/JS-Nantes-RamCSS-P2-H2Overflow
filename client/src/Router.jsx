import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import PagePrincipale from "./pages/PagePrincipale";
import MentionLégales from "./pages/Mentionslegales";

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
      {
        path: "/mentionlégales",
        element: <MentionLégales />,
      },
    ],
  },
]);

export default router;
