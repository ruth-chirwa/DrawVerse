import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home";
import AboutPage from "../components/About";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

export default router;