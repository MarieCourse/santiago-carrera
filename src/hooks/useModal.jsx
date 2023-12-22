import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = ({ type, content }) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  console.log('isOpen:', isOpen);
  console.log('content:', content);

  return {
    isOpen,
    content,
    openModal,
    closeModal,
  };
};

export default useModal;
