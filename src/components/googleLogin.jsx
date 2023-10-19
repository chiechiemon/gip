import React from 'react';
import { useEffect } from 'react';


function Google() {

    function handleCallbackResponse(response) {
      console.log(test)
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "849860806206-u87pde4n69kbjprhje89udca9fio60ge.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}

    );
    }, []);
    return (
        <div className='App'>
          <div id="signInDiv"></div>
        </div>
    );
}
export default Google