import { APP_LOGO } from "../util/constants"
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import {useOnline} from '../util/useOnline'
import userInfo from "../util/userInfo";
// import { useSelector } from "react-redux";
// import { cartStore } from "../util/store/cartstore";

const Header = () => {
  const {Author,logedInUserName} = useContext(userInfo)
  const isOnline = useOnline();
  const [isUser, setIsUser] = useState("← Login");
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="rounded-full" src={APP_LOGO} alt="logo" />
          <span className="ml-3 text-xl">Tomato - By {Author}</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="cursor-pointer mr-5  hover:text-gray-900" title="internet status" >🛜 : {isOnline?"🟢":"🔴"}</Link>
          <Link to="/" className="cursor-pointer mr-5  text-gray-900" title="Moradabad City">Moradabad</Link>
          <Link to="/About" className="cursor-pointer mr-5  hover:text-gray-900">About</Link>
          <Link to='/Contact' className="cursor-pointer mr-5 hover:text-gray-900">Contact Us</Link>
          <Link to='/Team' className="cursor-pointer mr-5 hover:text-gray-900">Our Team</Link>
          <a className="cursor-pointer mr-5 hover:text-gray-900">Cart
          {/* {cardItems.length ? (cartStore.length)+" items" : ""} */}
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={() => { isUser === "← Login" ? setIsUser(logedInUserName+"→") : setIsUser("← Login"); }}>
          {isUser}
        </button>
      </div>
    </header>
  )
}


export default Header;
