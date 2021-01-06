import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "./Context.js";
import Axios from "./Axios.js";
import "./Login.css";
function Signup() {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const [details, setDetails] = useState({
    name: "",
    password: "",
    check: "",
    email: ""
  });

  function handleClick(e) {
    e.preventDefault();
    const { name, password, check, email } = details;
    if (!name || !password || !check || !email || !validateEmail(email)) {
      alert("please enter valid details");
      return;
    }
    if (password !== check) {
      alert("password doesnot match with the re entered one");
      return;
    }
    async function create() {
      try {
        const data = await Axios.post("/newuser", details);
        dispatch({ type: "setid", payload: data.data });
        setDetails({ name: "", password: "", check: "", email: "" });
        history.push("/verify");
      } catch (err) {
        setDetails({ name: "", password: "", check: "", email: "" });
        alert(err);
        return;
      }
    }
    create();
  }

  function handleChange(e) {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
        <h1>Create account</h1>
        <form>
          <h5>Your name</h5>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={details.name}
          />
          <h5>Email</h5>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            value={details.email}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={details.password}
            placeholder="At least 6 characters"
          />
          <h5>Re-enter password</h5>
          <input
            onChange={handleChange}
            name="check"
            type="password"
            value={details.check}
          />
          <button className="signin" onClick={handleClick}>
            Create your Amazon account
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <span>
          Already have an account{" "}
          <Link className="link1" to="/login">
            Sign-in
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Signup;
