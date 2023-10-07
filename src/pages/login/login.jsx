import React from 'react';

function Login() {
  return (
    <div>
      <h1 id="login">Login</h1>
      <label id="mail">Email Adres</label>
      <input type="text" id="email_box" className="input-field" />
      <label id="wachtwoord">Wachtwoord</label>
      <input type="password" id="wachtwoord_box" className="input-field" />
      <p id="registratie">Nog geen account? Registreer je <span id="link">hier</span>.</p>
    </div>
  );
}

export default Login;
