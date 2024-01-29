import React from "react";
import { Link } from "react-router-dom";
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
        <div className="box">
          Vocabulary Set 1
        </div>
        <div className="box">
          Vocabulary Set 2
        </div>
      </div>

      <Link to="/sentences">
        <button className="sentences-button">Go to Sentences</button>
      </Link>
    </div>
  );
}

export default Home;
