import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className="container-fluid header">
      <div className="navbar-container">

        <div className="logo">
          <h2 className="logo-text">MyPortfolio</h2>
        </div>

        <ul className="nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>

          <li className={location.pathname === "/About" ? "active" : ""}>
            <Link to="/About">About</Link>
          </li>

          <li className={location.pathname === "/skills" ? "active" : ""}>
            <Link to="/skills">Skills</Link>
          </li>

          <li className={location.pathname === "/Qualification" ? "active" : ""}>
            <Link to="/Qualification">Qualification</Link>
          </li>

          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Header;
