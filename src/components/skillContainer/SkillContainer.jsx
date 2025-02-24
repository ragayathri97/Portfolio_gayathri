import React from "react";
import "./SkillContainer.css";
import { Element } from "react-scroll"; 

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Git", icon: "🔗" },
  { name: "Figma", icon: "🎭" },
  { name: "Redux", icon: "🔄" },
];

const Skills = () => {
  return (
    <Element id='skills'>
      <div className="skillbg">
    <div className="skills-container content-width">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </Element>
  );
};

export default Skills;
