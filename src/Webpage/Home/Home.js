import React from "react";
import "./Home.css";
import backgroundImage from "../../Asscets/Img/background.jpg";
import Header from "../../Commpontes/Header/Header";

function Home() {
  return (
    <>
      <Header />

      <section
        className="home-container"
  id="home"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`, }}
      >
        <div className="overlay">
          <div className="home-content">

            <p className="intro">Hello, I'm</p>

            <h1>
              Sangita <span>Virkar</span>
            </h1>

            <h2 className="role">Frontend Developer</h2>

            <p className="desc">
              I create modern, responsive and user-friendly web experiences
              using React.js and the latest frontend technologies.
            </p>

            <div className="home-buttons">
              <a href="#projects" className="btn primary">
                🚀 View My Work
              </a>

              <a href="/contact" className="btn secondary">
                📩 Contact Me
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;