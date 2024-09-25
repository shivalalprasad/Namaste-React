import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header";
import Main from "./components/Main";
import TotalOrders from "./components/TotalOrders";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <TotalOrders />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restaurent/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },

])

root.render(<RouterProvider router={AppRouter} />);
