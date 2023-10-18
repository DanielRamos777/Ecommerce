
import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Nombre:', name);
    console.log('Teléfono:', phone);
    console.log('Correo:', email);
    console.log('Mensaje:', message);
    console.log('Acepto términos y condiciones:', termsAccepted);
    // Puedes hacer una petición a un servidor, enviar un correo electrónico, etc.
    // También puedes reiniciar los valores de los campos del formulario si lo deseas
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setTermsAccepted(false);
  };

  return (
    <div>
      <h1>CONTACTO</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-label">
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        </label>
        <label className="form-label">
          Teléfono:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" />
        </label>
        <label className="form-label">
          Correo:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
        </label>
        <label className="form-label">
          Mensaje:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-textarea" />
        </label>
        <label className="form-label">
          Acepto términos y condiciones:
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="form-checkbox"
          />
        </label>
        <button type="submit" className="form-button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;