import './Contact.sass';
import Formulaire from '../Formulaire/Formulaire';

function Contact() {
  return (
    <div>
      <h2>Contacto</h2>
      <div className="modal__contact">
        <Formulaire />
        <div className="contact__info">
          <p>Email ejemplo@gmail.com</p>
          <p>Tel. 06 06 06 06 06</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
