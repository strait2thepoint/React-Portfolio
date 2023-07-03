import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import profileImage from './components/AboutMe/assets/IMG_20221124_165848064~2.jpg';
import './styles/portfolio.css';

function Portfolio() {
  return (
    <Router>
      <div className="portfolio">
        <h2>Laura Strait</h2>
        <img src={profileImage} alt="Profile" />
        <Link to="/about-me">About Me</Link>

        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default Portfolio;
