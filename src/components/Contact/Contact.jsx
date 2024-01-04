import './Contact.sass';
import Formulaire from '../Formulaire/Formulaire';

function Contact() {
  return (
    <div>
      <h2>Contacto</h2>
      <div className="modal__contact">
        <Formulaire />
        <div className="contact__info">
          <a href="mailto:meriscarrera@gmail.com">Email ejemplo@gmail.com</a>
          <a href="tel:+5491160529214">Tel. 06 06 06 06 06</a>
          <a
            href="https://www.instagram.com/santi_photo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="src\assets\instagram.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
