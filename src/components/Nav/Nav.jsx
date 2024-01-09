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
  // Custom hook for managing modal state
  const { isOpen, openModal, closeModal, content } = useModal();
  const [showLinks, setShowLinks] = useState(false);

  // Toggle visibility of links in the navigation
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  // Close the navigation after clicking on a link
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
        {/* Map through projectsData and create links for each project */}
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
      {/* Render the Modal component when isOpen is true */}
      {isOpen && (
        <Modal
          type="text"
          closeModal={closeModal}
          isOpen={isOpen}
          content={content}
        />
      )}
      {/* Toggle button for showing/hiding links */}
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
