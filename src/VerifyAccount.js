import React, { useState, useContext } from "react";
import { Context } from "./Context.js";
import { useHistory } from "react-router-dom";
import Axios from "./Axios.js";
import "./verify.css";
function VerifyAccount() {
  const [otp, setOtp] = useState("");
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  function handleClick() {
    if (otp === "") {
      alert("please enter a valid otp");
      setOtp("");
      return;
    }
    const obj = {
      id: state.id,
      otp
    };
    async function activate() {
      try {
        const data = await Axios.post("/activateaccount", obj);
        setOtp("");
        alert("You have been successfully registered with Amazon");
        dispatch({ type: "resetid" });
        history.push("/login");
      } catch (err) {
        alert("invalid otp please try again");
        setOtp("");
        return;
      }
    }
    activate();
  }
  function handleChange(evnt) {
    setOtp(evnt.target.value);
  }
  return (
    <div className="verify">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
        className="logo"
      />
      <div className="verify-container">
        <h3>Account Activation</h3>
        <p>
          <strong>Please enter the otp</strong>
        </p>
        <input
          placeholder="enter the otp here"
          value={otp}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Activate</button>
      </div>
    </div>
  );
}
export default VerifyAccount;
