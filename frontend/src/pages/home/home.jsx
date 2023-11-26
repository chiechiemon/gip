// home.jsx

import React from "react";
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <div className="options">
          Options
        </div>
        <div className="sign-out">
          Sign Out
        </div>
      </div>
      <h1 className="title">Multilingual</h1>
      <div className="box-container">
        <div className="box">
          Vocabulary Set 1
        </div>
        <div className="box">
          Vocabulary Set 2
        </div>
        {/* Add more boxes for other sets */}
      </div>
    </div>
  );
}

export default Home;
