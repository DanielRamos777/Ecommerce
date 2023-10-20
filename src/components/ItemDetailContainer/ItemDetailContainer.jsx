
import './itemDetailContainer.css';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../db/db';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'productos', itemId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const productData = { id: productSnapshot.id, ...productSnapshot.data() };
          setProduct(productData);
        } else {
          console.log('El producto no existe');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      <div className='centered'>
        <ItemDetail {...product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;