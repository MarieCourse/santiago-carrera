// import { useEffect } from 'react';
import './Nav.sass';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import Bio from '../Bio/Bio';
import Statement from '../Statement/Statement';

function Nav() {
  const { isOpen, openModal, closeModal, content } = useModal();
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
        <li className="navbar__title">Proyectos</li>
        {projectsData.map((project) => (
          <li key={project.id}>
            <Link to={`/${project.id}`} className="navbar__link">
              {project.title}
            </Link>
          </li>
        ))}
        <span className="navbar__separateur"></span>
        <li
          className="navbar__title"
          onClick={() => openModal({ type: 'text', content: <Bio /> })}
        >
          Bio
        </li>
        <span className="navbar__separateur"></span>
        <li
          className="navbar__title"
          onClick={() => openModal({ type: 'text', content: <Statement /> })}
        >
          Statement
        </li>
        <span className="navbar__separateur"></span>
        <li>
          <Link to="/" className="navbar__title">
            Contacto
          </Link>
        </li>
      </ul>
      {isOpen && (
        <Modal
          type="text"
          closeModal={closeModal}
          isOpen={isOpen}
          content={content}
        />
      )}
      {/* <button className="navbar__burger">
        <span className="burger-bar"></span>
      </button> */}
    </nav>
  );
}

export default Nav;
