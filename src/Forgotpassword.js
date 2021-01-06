import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "./Context.js";
import Axios from "./Axios.js";
import "./forgotpassword.css";
function Forgotpassword() {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  function handleChange(evnt) {
    setEmail(() => evnt.target.value);
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function handleClick() {
    if (!validateEmail(email)) {
      alert("enter email in a correct format");
      return;
    }
    async function validate() {
      try {
        const obj = {
          email
        };
        const data = await Axios.post("/forgotpassword", obj);
        dispatch({ type: "resett", payload: data.data });
        setEmail("");
        history.push("/reset");
      } catch (err) {
        setEmail("");
        alert("email id doesnot exist");
        return;
      }
    }
    validate();
  }
  return (
    <div className="forgot">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="forgotcontainer">
        <h1>Password assistance</h1>
        <p>Enter the email address associated with your Amazon account.</p>
        <input name="email" type="text" value={email} onChange={handleChange} />
        <button onClick={handleClick}>Continue</button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}
export default Forgotpassword;
