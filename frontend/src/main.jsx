import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/signup';
import Home from './pages/home/home';
import Sentence from './pages/sentences/sentence'; 


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sentences" element={<Sentence />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
