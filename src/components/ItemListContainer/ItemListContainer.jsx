
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/db";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Filter from "../Filter/Filter";

const ItemListContainer = ({ greeting }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "productos");
        const productsSnapshot = await getDocs(productsRef);
        const productsData = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const applyFilter = () => {
      if (categoryId) {
        const filtered = allProducts.filter(
          (product) => product.category === categoryId
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(allProducts);
      }
    };

    applyFilter();
  }, [categoryId, allProducts]);

  const handleFilter = (categoryFilter) => {
    if (categoryFilter !== "") {
      const updatedFilteredProducts = allProducts.filter(
        (product) => product.category === categoryFilter
      );
      setFilteredProducts(updatedFilteredProducts);
    } else {
      setFilteredProducts(allProducts);
    }
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <Filter handleFilter={handleFilter} />
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;