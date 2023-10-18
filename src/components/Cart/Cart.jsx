
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleDeleteItem = (itemId) => {
    removeItem(itemId);
  };

  if (calculateTotal() === 0) {
    return (
      <div>
        <h1>No hay ítems en el carrito</h1>
        <Link to='/products' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(p => (
        <CartItem key={p.id} item={p} quantity={p.quantity} onDelete={handleDeleteItem} />
      ))}
      <h3>Total: S/{calculateTotal()}.00</h3>
      <div>
        <button onClick={() => clearCart()} className="Button">
          Limpiar carrito
        </button>
        <Link to='/products' className='Option'>
          Seguir comprando
        </Link>
        <Link to='/checkout' className='Option'>Verificar</Link>
      </div>
    </div>
  );
};

export default Cart;