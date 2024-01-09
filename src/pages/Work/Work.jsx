import { useState } from 'react';
import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import Modal from '../../components/Modal/Modal';
import Error from '../../components/Error/Error';
import useModal from '../../hooks/useModal';

// Work component to display details of a selected project
function Work() {
  // Retrieve the project ID from the URL parameters
  const { id } = useParams();
  // Custom hook for managing modal state
  const { isOpen, openModal, closeModal } = useModal();

  // State to track the index of the currently displayed image in the gallery
  const [actualImage, setActualImage] = useState(0);

  // Find the selected project in the projectsData array
  const selectedProject = projectsData.find((project) => project.id === id);

  // Check if selectedProject exists before destructuring its properties
  if (!selectedProject) {
    // Handle the case where selectedProject is undefined or null
    return <Error />;
  }
  // Destructuring objects to extract individual properties from the selected project object
  const { title, info, pictures } = selectedProject;

  // Function to open the modal with the selected image
  const handleOpenModal = (index) => {
    setActualImage(index);
    openModal({ type: 'gallery', content: pictures });
  };

  // Function to change the displayed image in the gallery
  const changeImage = (direction) => {
    let newIndex = actualImage + direction;

    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    } else if (newIndex >= pictures.length) {
      newIndex = 0;
    }
    setActualImage(newIndex);
  };

  // Render the details of the selected project
  return (
    <div className="main" key={id}>
      <h2>{title}</h2>
      <p className="info">{info}</p>
      <div className="gallery">
        {/* Map through pictures and display images in the gallery */}
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
      {/* Render the Modal component when isOpen is true */}
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
