// frontend/src/main.jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'; // You can keep this import for clarity, but it's optional
import Login from './pages/login/login';
import Register from './pages/register/signup';
import './pages/login/login.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
