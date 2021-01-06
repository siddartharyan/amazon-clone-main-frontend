import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "./Context.js";
import Axios from "./Axios.js";
import "./Login.css";
function Login() {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const [details, setDetails] = useState({ email: "", password: "" });
  function handleChange(evnt) {
    setDetails((prev) => ({
      ...prev,
      [evnt.target.name]: evnt.target.value
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    if (!details.email || !details.password) {
      return;
    }
    async function login() {
      try {
        const result = await Axios.post("/user", details);
        setDetails({ email: "", password: "" });
        const data = result["data"][0];
        dispatch({ type: "login", payload: data["name"] });
        history.push("/");
      } catch (err) {
        alert("Invalid Credentials");
      }
    }
    login();
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="logo"
        />
      </Link>
      <div className="container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={details.email}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={details.password}
          />
          <button type="submit" onClick={handleClick} className="signin">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
          <span>
            {
              <Link className="forgotlink" to="/forgotpassword">
                Forgot Password?
              </Link>
            }
          </span>
        </p>
        <Link to="/signup">
          <button className="signup">Create An Account</button>
        </Link>
      </div>
    </div>
  );
}
export default Login;
