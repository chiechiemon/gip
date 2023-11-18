import React from 'react';
import RegisterForm from "../../components/registerform"; // Adjusted import path
function Signup() {
  return (
    <div className="container">
      <form>
        <h1>Sign Up</h1>
        <RegisterForm />
        <div className="input-box underline">
          <input type="text" placeholder='Enter Your Email' required />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input type="password" placeholder='Enter Your Password' required />
          <div className="underline"></div>
        </div>
        <div className="button">
          <input id="button" type="submit" value="Create account" />
        </div>
      </form>
    </div>
  );
  
}

export default Signup;
