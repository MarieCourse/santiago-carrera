import Bio from '../Bio/Bio';
import './Modal.sass';

function Modal({ type, content, image, closeModal, changeImage, isOpen }) {
  const modalClassName = isOpen ? 'modal modal__open' : 'modal';

  const renderContent = () => {
    switch (type) {
      case 'gallery':
        return (
          <>
            <img className="modal__image" src={image} />
            <div className="modal__controls">
              <a
                className="modal__control previous"
                onClick={() => changeImage(-1)}
              >
                &#10094;
              </a>
              <a
                className="modal__control next"
                onClick={() => changeImage(+1)}
              >
                &#10095;
              </a>
            </div>
          </>
        );
      case 'text':
        return (
          <div className="modal__small">
            {/* //   <>
          //     <h2>Bio</h2>
          //     <p className="modal__text">{content}</p>
          //   </> */}
            <Bio />
          </div>
        );
      case 'form':
        return <form className="modal__form">{content}</form>;
      default:
        return null;
    }
  };

  return (
    <div className={modalClassName}>
      <span className="modal__close" onClick={closeModal}>
        &times;
      </span>
      <div className="modal__content">{renderContent()}</div>
    </div>
  );
}

export default Modal;
