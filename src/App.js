import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

  function App() {
    return (
      <div className="portfolio-app">
        <AboutMe />
        <Contact />
        <Resume />
        <Portfolio />
      </div>
    );
  }
  

export default App;
