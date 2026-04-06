import React from 'react';
import './About.css'; 
import profileImage from '../../Asscets/Img/profileImage.jpg';

import  backgroundImage from '../../Asscets/Img/background.jpg';

function About() {
  return (
    <>


        {/* About Me Section */}
       <div
  className="about-bg"
  id="about"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
  }}
>
  <div className="container-fluid">
    <div className="about-section">
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img src={profileImage} alt="Sangita Virkar" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h5 className="about-subtitle">Get To Know Me</h5>

          <h2>About <span>Me</span></h2>

          <p className="about-desc">
            I am a passionate Frontend Developer skilled in building responsive,
            high-performance web applications using React.js.
          </p>

          {/* Cards */}
          <div className="about-info">
            <div className="info-card">
              <h4>Experience</h4>
              <p>Fresher</p>
            </div>

            <div className="info-card">
              <h4>Projects</h4>
              <p>5+ Completed</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Download CV
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</>
  );
}

export default About;