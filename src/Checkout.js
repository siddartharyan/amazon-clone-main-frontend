import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Subtotal from "./Subtotal.js";
import { Context } from "./Context.js";
import Basketitem from "./Basketitem.js";
import "./Checkout.css";
function Checkout() {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const arr = !state["cart"] ? [] : state["cart"];
  return (
    <div>
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
            alt=""
            className="ad"
          />
          <div className="name_checkout">
            <h1 className="basket_name">Hello, {state.name}</h1>
            <h2 className="checkout_title">Your Shopping Basket</h2>
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
      <div className="basket_1">
        {arr.length ? arr.map((item) => <Basketitem item={item} />) : ""}
      </div>
    </div>
  );
}
export default Checkout;
