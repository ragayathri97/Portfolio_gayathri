import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Element } from "react-scroll";
import EcommerceHub from "../../assets/images/EcommerceHub.png"
import agsale from "../../assets/images/agsale.png"; 
import weatherApp from "../../assets/images/weatherApp"

// Project details
const projects = [
  {
    title: "EcommerceHub Website",
    image: EcommerceHub, 
    github: "https://github.com/ragayathri97/ECommerceHub",
    live: "https://ecommercehub-ad1de.web.app/",
    description: "Built a responsive e-commerce website with product filtering, sorting, pagination, and secure checkout, integrated with Firebase for real-time cart and user management.",
  },
  {
    title: "A&G Fashion Store",
    image: agsale,
    github: "https://github.com/ragayathri97/AG-Fashion-Store",
    live: "https://ragayathri97.github.io/AG-Fashion-Store/",
    description: "Solo Project: A online Fashion store for all Gender.\n Tech Stack: HTML, css, JavaScript, Json, Glitch ",
  },
  {
    title: "Weather App",
    image: weatherApp,
    github: "https://github.com/ragayathri97/weather",
    live: "https://ragayathri97.github.io/weather/",
    description: "React weather app using OpenWeatherMap API, Displays current weather for searched cities, Dimple weather application built with React, Detches and shows weather data via API.",
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
