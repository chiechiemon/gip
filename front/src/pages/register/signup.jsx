import React from 'react';

function Register() {
  return (
    <div className="container">
      <form>
        <h1>Sign Up</h1>
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

export default Register;
