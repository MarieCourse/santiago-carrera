import { useRef, useEffect } from 'react';
import './Modal.sass';

function Modal({ type, content, image, closeModal, changeImage, isOpen }) {
  const modalClassName = isOpen ? 'modal modal__open' : 'modal';
  const contentRef = useRef(null);
  const closeBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // Focus sur le bouton de fermeture de la boite dès son ouverture'
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  // Navigation avec le clavier
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

  const renderContent = () => {
    switch (type) {
      case 'gallery':
        return (
          <>
            <img className="modal__image" src={image} aria-hidden={!isOpen} />
            <div className="modal__controls">
              <a
                className="modal__control previous"
                onClick={() => changeImage(-1)}
                ref={prevBtnRef}
                tabIndex={isOpen ? '0' : '-1'}
                role="button"
                aria-label="Previous Image"
              >
                &#10094;
              </a>
              <a
                className="modal__control next"
                onClick={() => changeImage(+1)}
                ref={nextBtnRef}
                tabIndex={isOpen ? '0' : '-1'}
                role="button"
                aria-label="Next Image"
              >
                &#10095;
              </a>
            </div>
          </>
        );
      case 'text':
        return (
          <div
            className="modal__text"
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
