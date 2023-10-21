import React from 'react';
import { createRoot } from 'react-dom';
import Login from './login.jsx';
import './styles.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Login />
  </React.StrictMode>
);
