import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [],
  },
]);

export default router;
