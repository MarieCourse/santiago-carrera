// import { useEffect } from 'react';
import './Nav.sass';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  // const [showLinks, setShowLinks] = useState(false);
  // // const location = useLocation();

  // const handleShowLinks = () => {
  //   setShowLinks(!showLinks);
  // };
  // // Fermeture de la Nav après avoir cliqué sur un lien
  // const closeNav = () => {
  //   if (showLinks) {
  //     setShowLinks(false);
  //   }
  // };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        SANTIAGO CARRERA
      </a>
      <ul className="navbar__links">
        <li className="navbar__item">Series</li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Naturaleza suspendida
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Ausencia
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Sustancia
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Submarino
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Isla
          </Link>
        </li>
        <span className="navbar__separateur"></span>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Bio
          </Link>
        </li>
        <span className="navbar__separateur"></span>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Statement
          </Link>
        </li>
        <span className="navbar__separateur"></span>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Contacto
          </Link>
        </li>
      </ul>
      <button className="navbar__burger">
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
