import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "./Context.js";
import "./Product.css";
function Product({ title, image, price, rating }) {
  const [state, dispatch] = useContext(Context);
  const rate = (rate) => {
    let arr = [];
    for (let i = 0; i < Number(rate); i++) {
      arr.push(<p>&#9733;</p>);
    }
    return arr;
  };
  function handleClick(obj) {
    dispatch({ type: "add", payload: obj });
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="rating">{rate(rating).map((ele) => ele)}</div>
      <img src={image} alt="" />
      <button onClick={() => handleClick({ title, image, price, rating })}>
        Add to Basket
      </button>
    </div>
  );
}
export default Product;
