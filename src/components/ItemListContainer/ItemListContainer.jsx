
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../asyncMock/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import Filter from "../Filter/Filter";

const ItemListContainer = ({ greeting }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then(response => {
        setAllProducts(response);
        setFilteredProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then(response => {
          setFilteredProducts(response);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setFilteredProducts(allProducts);
    }
  }, [categoryId, allProducts]);

  const handleFilter = (categoryFilter) => {
    if (categoryFilter !== "") {
      const updatedFilteredProducts = allProducts.filter(product => product.category === categoryFilter);
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