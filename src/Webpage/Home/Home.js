import React from 'react';
import './Home.css';
import backgroundImage from '../../Asscets/Img/background.jpg' ; // your uploaded image path
import Header from '../../Commpontes/Header/Header';

function Home() {
  return<>
  <Header/>
  <div className='container-fluid'>
     <div
  className="home-container"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="overlay">
    <div className="home-content">

      <h5 className="intro">Hello, I'm</h5>

      <h1>
        Sangita <span>Virkar</span>
      </h1>

      <h3 className="role">Frontend Developer</h3>

      <p className="desc">
        I create responsive, modern and user-friendly web applications
        using React.js and latest frontend technologies.
      </p>

      <div className="home-buttons">
        <a href="#projects" className="btn">
          View My Work
        </a>

        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>

    </div>
  </div>
</div>
    </div>
  </>
}

export default Home;