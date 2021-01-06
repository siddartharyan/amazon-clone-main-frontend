import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "./Context.js";
import Axios from "./Axios.js";
import "./resetlink.css";
function ResetLink() {
  const [details, setDetails] = useState({ otp: "", newp: "", check: "" });
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  function handleClick() {
    const { otp, newp, check } = details;
    if (otp === "" || newp === "" || check === "") {
      alert("please enter a valid details");
      return;
    }
    if (newp !== check) {
      alert("passwords does not match");
      return;
    }
    async function validate() {
      try {
        const obj = {
          id: state.id,
          otp,
          password: newp
        };
        const result = await Axios.post("/reset", obj);
      } catch (err) {
        alert("invalid otp or otp has expired, please try again");
        setDetails({ otp: "", newp: "", check: "" });
        dispatch({ type: "reset" });
        dispatch({ type: "resetid" });
        history.push("/forgotpassword");
      }
    }
    validate();
    setDetails({ otp: "", newp: "", check: "" });
    dispatch({ type: "reset" });
    dispatch({ type: "resetid" });
    alert("password was updated");
    history.push("/login");
  }
  function handleChange(evnt) {
    setDetails((prev) => ({
      ...prev,
      [evnt.target.name]: evnt.target.value
    }));
  }
  return (
    <div className="reset">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
        className="logo"
      />
      <div className="reset-container">
        <p>Please enter the OTP received to your email address</p>
        <input
          type="text"
          name="otp"
          value={details.otp}
          onChange={handleChange}
          placeholder="Enter The OTP"
        />
        <p>Enter the New Password</p>
        <input
          type="password"
          name="newp"
          value={details.newp}
          onChange={handleChange}
          placeholder="Enter the New Password"
        />
        <p>Re Enter the Password</p>
        <input
          type="password"
          name="check"
          value={details.check}
          onChange={handleChange}
          placeholder="Enter The Password Again"
        />
        <button onClick={handleClick}>Verify the OTP</button>
      </div>
    </div>
  );
}
export default ResetLink;
