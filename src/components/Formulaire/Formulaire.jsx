import './Formulaire.sass';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

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
        .typeError('Indicar un número de teléfono válido por favor'),
      message: yup.string().required('El mensaje no puede estar vacío'),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert('Gracias por su mensaje. Le responderé a la brevedad');
    const templateId = 'template_owloq5k';
    const serviceId = 'service_whx34ar';
    sendFeedback(serviceId, templateId, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(
        serviceId,
        templateId,
        variables,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {
        console.log('success', res);
      })
      .catch((err) => console.error('Hay un error en el envio del email', err));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="label-contact">
          Nombre :
        </label>
        <input
          className="input-contact"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
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
      </div>
      <div>
        <label htmlFor="message" className="label-contact">
          {' '}
          Mensaje :
        </label>
        <textarea
          className="input-contact"
          placeholder="Indique sus comentarios o mensaje por favor"
          id="message"
          cols="20"
          rows="5"
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
