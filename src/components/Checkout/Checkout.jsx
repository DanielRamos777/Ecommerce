
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { db } from '../../db/db';
import CheckoutFrom from '../CheckoutFrom/CheckoutFrom';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const totalValue = total || 0; 
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total: totalValue,
        date: Timestamp.fromDate(new Date())
      };
      const orderRef = collection(db, 'orders');
      const orderAdded = await addDoc(orderRef, objOrder);
      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }
  if (orderId) {
    return (
      <div>
        <h1>El id de su orden es: {orderId}</h1>
        <Link to="/">Regresar a la página de inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutFrom onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;