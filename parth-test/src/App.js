import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();
  return (
    <div className="app-container">
      {location.pathname === '/' && <Home />}
      {location.pathname === '/about' && <About />}
      {location.pathname === '/contact' && <Contact />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
