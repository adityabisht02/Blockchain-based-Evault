import React, { useState, useRef, useCallback, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing_page from './landing_page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing_page />}></Route>
    </Routes>
  );
}

export default App;
