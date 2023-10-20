
import { useState } from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className='NavBar'>

      <Link to='/'>
        <h3 className='Logo'>Streaming</h3>
      </Link>


      <ul className={`navbar-menu ${isDropdownOpen ? 'open' : ''}`}>
        <li>
          <Link className='buttom' to={'/'}>Inicio</Link>
        </li>
        <li>
            <Link className='buttom' to={'/products'}>Productos</Link>
        </li>
        <li>
          <Link className='buttom' to="/contact">Contacto</Link>
        </li>
        <li>
            <Link className='buttom' to={'/About'}>Acerca de</Link>
        </li>
        <CartWidget className='CartWidget' />
      </ul>
    </nav>
  );
}

export default NavBar;