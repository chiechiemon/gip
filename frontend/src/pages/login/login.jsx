import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '../../components/googleLogin';

function Login() {
  return (
    <div className="container">
      <form>
        <h1>Multilingual</h1>
        <div className="input-box underline">
          <input type="text" placeholder='Enter Your Email' required />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input type="password" placeholder='Enter Your Password' required />
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
        <div className="option">
          <GoogleLogin />
        </div>
        <div className="signup-link">
          No account yet? Sign up <Link to="/register"> here</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
