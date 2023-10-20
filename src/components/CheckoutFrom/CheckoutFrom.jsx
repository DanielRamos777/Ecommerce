
import './CheckoutFrom.css';
import { useState } from 'react';

const CheckoutFrom = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      alert('Por favor, complete todos los campos');
      return;
    }
    const userData = {
      name,
      phone,
      email
    };
    onConfirm(userData);
  };

  return (
    <div className='containerForm'>
      <form onSubmit={handleConfirm} className='Form'>
        <label className='Label'>
          Nombre
          <input
            className='Input'
            type='text'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className='Label'>
          Teléfono
          <input
            className='Input'
            type='text'
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className='Label'>
          Correo electrónico
          <input
            className='Input'
            type='text'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <button type='submit'>Confirmar</button>
      </form>
    </div>
  );
};

export default CheckoutFrom;