import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import Details from "../Pages/Details/Details";
import Favorite from "../Pages/Favorite/Favorite";
import Search from "../Pages/Search/Search";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/details/:type/:id",
        element: <Details />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
