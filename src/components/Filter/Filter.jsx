import './Filter.css'
import { useState } from 'react';


function Filter({ handleFilter }) {
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleFilterClick = () => {
    handleFilter(categoryFilter);
  };

  return (
    <div className="FilterContainer">
      <h2 className="filterTitle">Filtro</h2>
      <div className="filterCategory">
        <label className="filterLabel">Categoría:</label>
        <select className="filterSelect" value={categoryFilter} onChange={handleCategoryFilterChange}>
          <option value="">Todas</option>
          <option value="unMes">1 Mes</option>
          <option value="tresMeses">3 Meses</option>
          <option value="unAño">Anual</option>
        </select>
      </div>
      <button className="filterButton" onClick={handleFilterClick}>Aplicar Filtro</button>
    </div>
  );
}

export default Filter;