/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" /> {/* logo */}
      </div>{" "}
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              {" "}
              Hello {!user ? "Guies" : user.email}{" "}
            </span>{" "}
            <span className="header_optionLinetwo">
              {user ? "Sign out" : "Sign In"}{" "}
            </span>{" "}
          </div>{" "}
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne"> Return </span>{" "}
          <span className="header_optionLinetwo"> $ Order </span>
        </div>{" "}
        <div className="header_option">
          <span className="header_optionLineOne"> Your </span>{" "}
          <span className="header_optionLinetwo"> Prime </span>{" "}
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />

            <span className=" header_optionLinetwo header_optionBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
