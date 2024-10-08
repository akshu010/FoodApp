import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants.js";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="header flex"  >
      <div className="logo-container">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus?"✅" : "🔴"}</li>
          <li className="head">
            <Link to="/">Home</Link>
          </li>
          <li className="head">
            <Link to="/about">About Us</Link>
          </li>{" "}
          <li className="head">
            <Link to="/contact">Contact Us</Link>
          </li>{" "}
          <li className="head">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold text-xl text-center pt-[5px]">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
