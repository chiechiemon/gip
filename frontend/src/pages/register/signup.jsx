import React, { useState } from 'react';
import Axios from 'axios';
import '../../pages/register/signup.css';

function Signup() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    });
  };

  const handleUsernameChange = (e) => {
    setUsernameReg(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordReg(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailReg(e.target.value);
  };

  return (
    <div className="container">
      <form>
        <h1 className="title">Sign Up</h1>
        <div className="input-box underline">
          <input
            type="text"
            placeholder="Enter Your Username"
            value={usernameReg}
            onChange={handleUsernameChange}
            required
          />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input
            type="text"
            placeholder="Enter Your Email"
            value={emailReg}
            onChange={handleEmailChange}
            required
          />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input
            type="password"
            placeholder="Enter Your Password"
            value={passwordReg}
            onChange={handlePasswordChange}
            required
          />
          <div className="underline"></div>
        </div>
        <div className="button">
          <button id="button" type="button" onClick={register}>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
