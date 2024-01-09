import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './signup.css';

function Signup() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const navigate = useNavigate(); 

  const register = (e) => {
    e.preventDefault(); 

    if (!usernameReg || !emailReg || !passwordReg) {
      alert('Please fill in all fields');
      return;
    }

    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    })
      .then((response) => {
        console.log('Success:', response.data);
        if (response.data.success) {
          navigate('/home'); 
        } else {
          console.error('Registration failed:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
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
    <div className="signup">
      <div className="container">
        <form onSubmit={register}>
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
            <button id="button" type="submit">
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
