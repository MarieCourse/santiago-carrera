// import { useEffect } from 'react';
import './Nav.sass';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projects.json';

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
        {projectsData.map((project) => (
          <li key={project.id} className="navbar__item">
            <Link to={`/${project.id}`} className="navbar__link">
              {project.title}
            </Link>
          </li>
        ))}

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
