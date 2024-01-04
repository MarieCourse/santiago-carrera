import './Nav.sass';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import Bio from '../Bio/Bio';
import Statement from '../Statement/Statement';
import Contact from '../Contact/Contact';

function Nav() {
  const { isOpen, openModal, closeModal, content } = useModal();
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  // Fermeture de la Nav après avoir cliqué sur un lien
  const closeNav = () => {
    if (showLinks) {
      setShowLinks(false);
    }
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <a href="/" className="navbar__logo" onClick={closeNav}>
        SANTIAGO CARRERA
      </a>
      <ul className="navbar__links">
        <li
          className="navbar__title"
          onClick={() => {
            closeNav();
            window.location.href = '/';
          }}
        >
          Proyectos
        </li>
        {projectsData.map((project) => (
          <li key={project.id}>
            <Link
              to={`/${project.id}`}
              className="navbar__link"
              onClick={closeNav}
            >
              {project.title}
            </Link>
          </li>
        ))}
        <span className="navbar__separateur"></span>
        <li
          className="navbar__title"
          onClick={() => {
            closeNav();
            openModal({ type: 'text', content: <Bio /> });
          }}
        >
          Bio
        </li>
        <span className="navbar__separateur"></span>
        <li
          className="navbar__title"
          onClick={() => {
            closeNav();
            openModal({ type: 'text', content: <Statement /> });
          }}
        >
          Statement
        </li>
        <span className="navbar__separateur"></span>
        <li
          className="navbar__title"
          onClick={() => {
            closeNav();
            openModal({ type: 'text', content: <Contact /> });
          }}
        >
          Contacto
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
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
