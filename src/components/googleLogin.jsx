import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function GoogleLogin() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "849860806206-u87pde4n69kbjprhje89udca9fio60ge.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
  }, []);

  return (
    <div className="google-login">
      <div id="signInDiv"></div>
    </div>
  );
}

export default GoogleLogin;
