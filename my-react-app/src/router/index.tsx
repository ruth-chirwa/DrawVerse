import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home";
import AboutPage from "../components/About";
import GalleryPage from "../components/Gallery";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  }
]);

export default router;