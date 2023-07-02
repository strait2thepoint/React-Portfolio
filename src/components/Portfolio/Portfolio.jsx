import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <AboutMe />
      <Contact />
      <Resume />
    </div>
  );
};

export default Portfolio;
