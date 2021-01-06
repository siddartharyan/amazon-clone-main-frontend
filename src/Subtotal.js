import React, { useContext } from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Context } from "./Context.js";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  function getBasketTotal() {
    let arr = state["cart"];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]["price"]);
    }
    return sum;
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.cnt} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        disabled={!state.cart.length ? true : false}
        onClick={() => history.push("/payment")}
      >
        Check Out
      </button>
    </div>
  );
}
export default Subtotal;
