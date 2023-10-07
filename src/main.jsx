import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login/login'; // Adjust the path based on your folder structure
import './pages/login/Login.css'; // Adjust the path based on your folder structure

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
