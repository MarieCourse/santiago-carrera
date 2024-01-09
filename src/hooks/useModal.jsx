import { useState } from 'react';

// Custom hook for managing modal state
const useModal = () => {
  // State for modal visibility
  const [isOpen, setIsOpen] = useState(false);
  // State for modal content
  const [content, setContent] = useState(null);

  // Function to open the modal with specified content
  const openModal = ({ content }) => {
    setContent(content);
    setIsOpen(true);
    // Add a class to the body to prevent scrolling when the modal is open
    document.body.classList.add('modal-open');
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    // Remove the class from the body to allow scrolling when the modal is closed
    document.body.classList.remove('modal-open');
  };

  // Return the state and functions for external use
  return {
    isOpen,
    content,
    openModal,
    closeModal,
  };
};

export default useModal;
