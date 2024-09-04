import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services/Services";
import Contact from "../Pages/Contact/Contact/Contact";
import About from "../Pages/About/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/services',
        element : <Services></Services>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
    ]
  },
]);