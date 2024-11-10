import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header";
import Main from "./components/Main";
import TotalOrders from "./components/TotalOrders";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Team from "./components/Team";
import userInfo from "./util/userInfo";
// import {useOnline} from './util/useOnline'

const root = ReactDOM.createRoot(document.getElementById('root'));
const About = lazy(()=>import('./components/About'))
const App = () => {
  const [userName,setUserName] = useState(userInfo.userName)
  const {Author} = useContext(userInfo)
  useEffect(()=>{
    // User Info
    const data = {user: "~ "+".dev"}
    setUserName(data.user)
  },[])
  // const internet = useOnline()
//   if(internet===false) {
//     return(
//       <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
//       <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Oops! you are offline <br/> to access please check your internet connection </h1>
//     </div>
//   </div>
// </section>
//     )
  // }
  return (
    <>
    <userInfo.Provider value={{logedInUserName:userName,setUserName,Author}}  >
      <Header />
      <Outlet />
      <TotalOrders />
      <Footer />
      </userInfo.Provider>
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
        element: <Suspense fallback={<h1>fast....</h1>}><About /></Suspense>,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restaurent/:resId",
        element: <ResMenu />,
      },
      {
        path: "/Team",
        element: <Team />,
      },
    ],
    errorElement: <Error />,
  },

])

root.render(<RouterProvider router={AppRouter} />);
