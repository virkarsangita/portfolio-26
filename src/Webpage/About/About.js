import React from 'react';
import './About.css'; 
import profileImage from '../../Asscets/Img/profileImage.jpg';
import Header from '../../Commpontes/Header/Header';

function About() {
  return (
    <>
      <Header />
      

        {/* About Me Section */}
        <div className='container-fluid'>
      <div className="about-section">
  <div className="about-container">

    {/* Image */}
    <div className="about-image">
      <img src={profileImage} alt="Sangita Virkar" />
    </div>

    {/* Content */}
    <div className="about-content">

      <h5 className="about-subtitle">Get To Know Me</h5>

      <h2>
        About <span>Me</span>
      </h2>

      <p className="about-desc">
        I am a passionate Frontend Developer skilled in building responsive,
        high-performance web applications using React.js, JavaScript, and modern UI technologies.
      </p>

      <p className="about-desc">
        I focus on writing clean, scalable code and creating intuitive user experiences.
        I am always eager to learn new technologies and improve my development skills.
      </p>

      {/* Info Cards */}
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
        <a href="/contact" className="btn">
          Contact Me
        </a>

        <a href="/resume.pdf" className="btn btn-outline" download>
          Download CV
        </a>
      </div>

    </div>
  </div>
</div>
        </div>
      
    </>
  );
}

export default About;