import './Formulaire.sass';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Formulaire() {
  const schema = yup
    .object({
      name: yup.string().max(50).required('Indicar su nombre por favor'),
      email: yup
        .string()
        .email('Indicar un email válido por favor')
        .max(255)
        .required('Indicar un email válido por favor'),
      phone: yup
        .number()
        .typeError('Indicar un numero de telefono valido por favor'),
      message: yup.string().required('El mensaje no puede estra vacio'),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    alert('Gracias por su mensaje. Le responderé a la brevedad');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onsubmit)}>
      <div className="form-content">
        <label htmlFor="name" className="label-contact">
          Nombre :
        </label>
        <input
          className="input-contact"
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          {...register('name')}
        />
        {errors.name && <p id="c-yup">{errors.name.message}</p>}
        <label htmlFor="email" className="label-contact">
          Email :
        </label>
        <input
          className="input-contact"
          type="email"
          id="email"
          name="email"
          placeholder="exemple@gmail.com"
          {...register('email')}
        />
        {errors.email && <p id="c-yup">{errors.email.message}</p>}
        <label htmlFor="phone" className="label-contact">
          Teléfono :
        </label>
        <input
          className="input-contact"
          type="text"
          id="phone"
          name="phone"
          placeholder="+12345678"
          {...register('phone')}
        />
        {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
        <label htmlFor="message" className="label-contact">
          {' '}
          Mensaje :
        </label>
        <textarea
          className="message-contact"
          placeholder="Merci de renseigner vos questions ou commentaires"
          id="message"
          cols="20"
          rows="10"
          name="message"
          {...register('message')}
        ></textarea>
        {errors.message && <p id="c-yup">{errors.message.message}</p>}
        <button className="button-contact" type="Submit" value="Envoyer">
          Enviar
        </button>
      </div>
      <script src="scriptContact.js"></script>
    </form>
  );
}

export default Formulaire;
