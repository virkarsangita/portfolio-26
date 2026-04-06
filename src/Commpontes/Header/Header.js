
import React, { useState } from "react";

import "./Header.css";

function Header() {
 
   const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="header">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <h2 className="logo-text">MyPortfolio</h2>
        </div>

        {/* Nav Links */}
       <ul className="nav-links">
  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#skills">Skills</a>
  </li>

  <li>
    <a href="#qualification">Qualification</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>
</ul>

        {/* CTA Button */}
       <button className="theme-btn" onClick={toggleTheme}>
  {darkMode ? "🌙 Dark" : "🌞 Light"}
</button>

      </div>
    </header>
  );
}

export default Header;