import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1 className='name'>Laura J. Strait</h1>
      <nav className='list'>
        <ul >
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
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/strait2thepoint">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/strait2thepoint/">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/SewStrait">
        <FaTwitter />
      </a>
      <a href = "https://www.facebook.com/strait2thepoint">
      < FaFacebook />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      Made with ❤️ by <a href="https://github.com/strait2thepoint">Strait2thePoint</a>.
      <SocialLinks />
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
