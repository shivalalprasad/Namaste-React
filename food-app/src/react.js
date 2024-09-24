import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import TotalOrders from "./components/TotalOrders";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <>
      <Header />
      {/* <SearchBar /> */}
      <Main />
      <TotalOrders />
      <Footer />
    </>
  );
};

root.render(<App />);
