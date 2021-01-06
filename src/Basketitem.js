import { SettingsRemoteSharp } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import "./basketitem.css";
import { Context } from "./Context.js";

function Basketitem({ item }) {
  const { title, image, price, rating } = item;
  const [state, dispatch] = useContext(Context);

  const rate = (rate) => {
    let arr = [];
    for (let i = 0; i < Number(rate); i++) {
      arr.push(<p>&#9733;</p>);
    }
    return arr;
  };

  function handleRemove(item) {
    dispatch({ type: "remove", payload: item });
  }
  return (
    <div className="basket" key={title}>
      <img className="img" src={image} alt="" />
      <div className="info">
        <p className="title">{title}</p>
        <p className="price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">{rate(rating).map((ele) => ele)}</div>
        <button className="button" onClick={() => handleRemove(item)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
export default Basketitem;
