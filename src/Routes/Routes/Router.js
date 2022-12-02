import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/products/:categoryName",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products?categoryName=${params.categoryName}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
