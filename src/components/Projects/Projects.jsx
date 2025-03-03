import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Element } from "react-scroll";
import agsale from "../../assets/images/agsale.png"; 
import netflix from "../../assets/images/netflix.png"

// Project details
const projects = [
  {
    title: "A&G Fashion Store",
    image: agsale,
    github: "https://github.com/ragayathri97/AG-Fashion-Store",
    live: "https://ragayathri97.github.io/AG-Fashion-Store/",
    description: "Solo Project: A online Fashion store for all Gender.\n Tech Stack: HTML, css, JavaScript, Json, Glitch ",
  },
  {
    title: "Netflix Website",
    image: netflix, 
    github: "https://github.com/ragayathri97/Netflix-firebase",
    live: "https://netflix-project-9d731.firebaseapp.com/login",
    description: "Solo Project: A Netflix website.\nTech Stack: React, CSS, Vite, Firebase.",
  },
  
];

const Projects = () => {
  return (
    <Element id="projects">
      <div className="pro-cont">
      <div className="projects-container content-width">

        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-image" />
              </a>
              <div className="project-details">
                <p>{project.description}</p>
                <div className="buttons">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn live-btn">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Element>
  );
};

export default Projects;
