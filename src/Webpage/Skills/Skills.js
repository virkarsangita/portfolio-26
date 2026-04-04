import React from "react";
import "./Skills.css";
import backgroundImage from '../../Asscets/Img/background.jpg';

function Skills() {
  const skillsList = [
    { name: "HTML5", level: "90%" },
    { name: "CSS3", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React JS", level: "75%" },
    { name: "Bootstrap", level: "85%" },
    { name: "Git & GitHub", level: "70%" },
  ];

  return <>
    <div className="skills-section" id="skills"
    style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
          }}
    >
  <div className="container">

    <h5 className="skills-subtitle">My Expertise</h5>
    <h2 className="section-title">Technical Skills</h2>

    <div className="skills-grid">
      {skillsList.map((skill, index) => (
        <div className="skill-card" key={index}>

          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: skill.level }}
            ></div>
          </div>

        </div>
      ))}
    </div>

  </div>
</div>
  </>
}

export default Skills;