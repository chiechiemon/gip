import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      password: password,
      email: email,
    })
      .then((response) => {
        console.log("Success:", response.data);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="login">
    <div className="container" >
      <form onSubmit={login}>
        <h1>Multilingual</h1>
        <div className="input-box underline">
          <input type="text" placeholder="Enter Your Email" required onChange={handleEmailChange} />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input type="password" placeholder="Enter Your Password" required onChange={handlePasswordChange} />
          <div className="underline"></div>
        </div>
        <div className="button">
          <input id="button" type="submit" value="Login" />
        </div>
        <div className="or-line">
          <hr />
          <div className="or-text">OR</div>
          <hr />
        </div>
        <div className="signup-link">
          No account yet? Sign up <Link to="/register">here</Link>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
