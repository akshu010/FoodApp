import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  return (
    <div className="header flex">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
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
            <Link to="/cart">
              <i class="ri-shopping-cart-2-fill"></i>({cartItems.length} items)
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold text-xl text-center pt-[5px]">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
