import React from "react";
import './home.css';

function Home() {
  return (
    <div className="homepage">
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
          Vocabulary Set 1
        </div>
        <div className="box">
          Vocabulary Set 2
      </div>
    </div>
  );
}

export default Home;
