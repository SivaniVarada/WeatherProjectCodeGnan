
// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component

import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {user ? (
        <Route path="/" element={<Home />} />
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} /> {/* Add this route */}
        </>
      )}
    </Routes>
  );
}

export default App;
