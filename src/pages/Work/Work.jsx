import { useState } from 'react';
import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import Modal from '../../components/Modal/Modal';
import Error from '../../components/Error/Error';

function Work() {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [actualImage, setActualImage] = useState(0);

  const selectedProject = projectsData.find((project) => project.id === id);
  // Vérifie si selectedProject existe avant de déstructurer ses propriétés
  if (!selectedProject) {
    // Gére le cas où selectedProject est indéfini ou nul
    return <Error />;
  }
  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du projet sélectionné.
  const { title, info, pictures } = selectedProject;

  const openModal = (index) => {
    setActualImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeImage = (direction) => {
    let newIndex = actualImage + direction;

    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    } else if (newIndex >= pictures.length) {
      newIndex = 0;
    }
    setActualImage(newIndex);
  };

  return (
    <div className="main" key={id}>
      <h2>{title}</h2>
      <div className="gallery">
        {pictures.map((picture, index) => (
          <img
            className="gallery__image"
            key={index}
            src={picture}
            alt={`${title} by Santiago Carrera`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <p className="info">{info}</p>
      {modalOpen && (
        <Modal
          image={pictures[actualImage]}
          closeModal={closeModal}
          changeImage={changeImage}
          isOpen={modalOpen}
        />
      )}
    </div>
  );
}

export default Work;
