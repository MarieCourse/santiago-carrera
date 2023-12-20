import './Modal.sass';

function Modal({ image, closeModal, changeImage, isOpen }) {
  const modalClassName = isOpen ? 'modal modal__open' : 'modal';

  return (
    <div className={modalClassName}>
      <span className="modal__close" onClick={closeModal}>
        &times;
      </span>
      <div className="modal__content">
        <img className="modal__image" src={image} />
        <div className="modal__controls">
          <a className="previous" onClick={() => changeImage(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => changeImage(+1)}>
            &#10095;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
