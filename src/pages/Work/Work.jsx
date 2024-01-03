import { useState } from 'react';
import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import Modal from '../../components/Modal/Modal';
import Error from '../../components/Error/Error';
import useModal from '../../hooks/useModal';

function Work() {
  const { id } = useParams();
  // const [modalOpen, setModalOpen] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const [actualImage, setActualImage] = useState(0);

  const selectedProject = projectsData.find((project) => project.id === id);
  // Vérifie si selectedProject existe avant de déstructurer ses propriétés
  if (!selectedProject) {
    // Gére le cas où selectedProject est indéfini ou nul
    return <Error />;
  }
  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du projet sélectionné.
  const { title, info, pictures } = selectedProject;

  const handleOpenModal = (index) => {
    setActualImage(index);
    openModal({ type: 'gallery', content: pictures });
  };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

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
      <p className="info">{info}</p>
      <div className="gallery">
        {pictures.map((picture, index) => (
          <img
            className="gallery__image"
            key={index}
            src={picture}
            alt={`${title} by Santiago Carrera`}
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </div>
      {isOpen && (
        <Modal
          type="gallery"
          image={pictures[actualImage]}
          closeModal={closeModal}
          changeImage={changeImage}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}

export default Work;
