import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { Context } from "./Context.js";
function Header() {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const loggedin = state.isloggedin;
  const username = state.name;

  function handleClick() {
    dispatch({ type: "signout" });
    history.push("/login");
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchin" />
        <SearchIcon className="header_searchicon" />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
          alt=""
          className="flag"
        />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="option1 user_name">
            Hello, {!username ? "Guest" : username}
          </span>
          {!loggedin ? (
            <Link className="link" to="/login">
              <span className="option2">Sign in</span>
            </Link>
          ) : (
            <Link onClick={handleClick} className="sign_out">
              <span className="option2">Sign Out</span>
            </Link>
          )}
        </div>
        <div className="header_option">
          <span className="option1">Returns</span>
          <span className="option2">&Orders</span>
        </div>
        <div className="header_option">
          <span className="option1">Your</span>
          <span className="option2">prime</span>
        </div>
      </div>
      <Link to="checkout">
        <div className="basket">
          <ShoppingBasketIcon className="basketicon" />
          <span className="basket_count">{state["cnt"]}</span>
        </div>
      </Link>
    </div>
  );
}
export default Header;
