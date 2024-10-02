import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
