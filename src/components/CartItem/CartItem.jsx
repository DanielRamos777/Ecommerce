import './CartItem.css';

const CartItem = ({ item, quantity, onDelete }) => {
  const { id, name, price } = item;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="cart-item">
      <h3 className="item-name">{name}</h3>
      <p className="item-quantity">Cantidad: {quantity}</p>
      <p className="item-price">Precio: S/{price}.00</p>
      <button className="delete-button" onClick={handleDelete}>X</button>
    </div>
  );
};

export default CartItem;