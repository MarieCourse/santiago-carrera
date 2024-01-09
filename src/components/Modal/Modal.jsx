import { useRef, useEffect } from 'react';
import './Modal.sass';
import { useSwipeable } from 'react-swipeable';

function Modal({ type, content, image, closeModal, changeImage, isOpen }) {
  // Determine the CSS class based on the modal's open/closed state
  const modalClassName = isOpen ? 'modal modal__open' : 'modal';
  const contentRef = useRef(null);
  const closeBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // Focus on the close button when the modal is opened
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        changeImage(-1);
        break;
      case 'ArrowRight':
        changeImage(1);
        break;
      default:
        break;
    }
  };

  // Set up swipe handlers for image navigation
  const handlers = useSwipeable({
    onSwipedLeft: () => changeImage + 1,
    onSwipedRight: () => changeImage - 1,
  });
  // Render content based on the modal type
  const renderContent = () => {
    switch (type) {
      case 'gallery':
        return (
          <div className="content--image">
            <a
              className="previous"
              onClick={() => changeImage(-1)}
              ref={prevBtnRef}
              tabIndex={isOpen ? '0' : '-1'}
              role="button"
              aria-label="Previous Image"
            >
              &#10094;
            </a>
            <div className="image-container" {...handlers}>
              <img className="image" src={image} aria-hidden={!isOpen} />
            </div>
            <a
              className="next"
              onClick={() => changeImage(+1)}
              ref={nextBtnRef}
              tabIndex={isOpen ? '0' : '-1'}
              role="button"
              aria-label="Next Image"
            >
              &#10095;
            </a>
          </div>
        );
      case 'text':
        return (
          <div
            className="content--text"
            role="document"
            aria-label="Modal Content"
          >
            {content}
          </div>
        );
      default:
        return null;
    }
  };

  // Render the modal component
  return (
    <div
      className={modalClassName}
      onKeyDown={handleKeyDown}
      tabIndex={isOpen ? '0' : '-1'}
    >
      {isOpen && (
        <>
          <span
            className="modal__close"
            onClick={closeModal}
            ref={closeBtnRef}
            tabIndex={0}
            role="button"
            aria-label="Close Modal"
          >
            &times;
          </span>
          <div
            ref={contentRef}
            className="modal__content"
            role="dialog"
            aria-modal="true"
          >
            {renderContent()}
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
