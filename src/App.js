import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './pages/PageTransition.css';

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation();
  const [animationState, setAnimationState] = useState('active');

  useEffect(() => {
    setAnimationState('exit'); // Start exit animation

    const timeout = setTimeout(() => {
      setAnimationState('active'); // Switch to new page with entry animation
    }, 500); // Match CSS animation duration

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [location.pathname]);

  return (
    <div className="App">
      <Sidebar />
      <div className="page-container">
        <div className={`page-wrapper ${animationState}`}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
