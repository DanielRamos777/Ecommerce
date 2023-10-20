
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../db/db';

const Cart = () => {
  const productsCollection = collection(db, 'products');
  const products = {
    name: "123",
    price: 10,
    category: "Nuevo",
    stock: 0
  };

  const createOrdenInFirebase = () => {
    addDoc(productsCollection, products)
      .then(docRef => console.log(docRef.id))
      .catch(err => console.log(err));
  };

  const { cart, clearCart, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calculatedTotal = 0;
    cart.forEach(item => {
      calculatedTotal += item.price * item.quantity;
    });
    setTotal(calculatedTotal);
  }, [cart]);

  const handleDeleteItem = (itemId) => {
    removeItem(itemId);
  };

  if (cart.length === 0) {
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
      <h3>Total: S/{total}.00</h3>
      <div>
        <button onClick={() => clearCart()} className="Button">
          Limpiar carrito
        </button>
        <Link to='/products' className='Option'>
          Seguir comprando
        </Link>
        <Link to='/checkout' className='Option' onClick={createOrdenInFirebase}>Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;