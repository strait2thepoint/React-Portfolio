import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

  function App() {
    return (
      <div className="portfolio">
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
        <AboutMe id="about-me" />
        <Contact id="contact" />
        <Resume id="resume" />
      </div>
    );
  }
  

export default App;
