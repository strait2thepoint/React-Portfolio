import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css'

function Footer() {
  return (
    <div className="footer">
      Made with ❤️ by <a href="https://github.com/strait2thepoint">Strait2thePoint</a>. 
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <h2>Laura Strait</h2>
          <ul>
            <li>
              <Link to="/portfolio">Portfolio</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
              <li>
              <Link to="/about-me">About Me</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
