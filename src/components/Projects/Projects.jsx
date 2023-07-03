import React from 'react';
import './styles/projects.css';

const projects = [
  {
    title: 'Project 1',
    image: 'path/to/project1-image.jpg',
    deployLink: 'https://project1-deployed-link.com',
    githubLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project 2',
    image: 'path/to/project2-image.jpg',
    deployLink: 'https://project2-deployed-link.com',
    githubLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project 3',
    image: 'path/to/project1-image.jpg',
    deployLink: 'https://project1-deployed-link.com',
    githubLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project 4',
    image: 'path/to/project2-image.jpg',
    deployLink: 'https://project2-deployed-link.com',
    githubLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project 5',
    image: 'path/to/project1-image.jpg',
    deployLink: 'https://project1-deployed-link.com',
    githubLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project 6',
    image: 'path/to/project2-image.jpg',
    deployLink: 'https://project2-deployed-link.com',
    githubLink: 'https://github.com/username/project2',
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="projects">
      <h2 className="h2">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-links">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
