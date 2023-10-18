
import Carousel from '../Carousel/Carousel';
import imagen1 from '../Carousel/imgs/imagen1.jpg';
import imagen2 from '../Carousel/imgs/imagen2.jpg';
import imagen3 from '../Carousel/imgs/imagen3.jpg';
import imagen4 from '../Carousel/imgs/imagen4.jpg'
import imagen5 from '../Carousel/imgs/imagen5.jpg'
import imagen6 from '../Carousel/imgs/imagen6.jpg'
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const imagesTop = [
    imagen1,
    imagen2,
    imagen3,
  ];
  const imagesbottom = [
    imagen4,
    imagen5,
    imagen6,
  ];

  return (
    <div className="home-container">
      <h1>Inicio</h1>
      <Carousel images={imagesTop} />
      <Carousel images={imagesbottom} />
      <div className="paragraph-container">
        <p className="centered-paragraph">En Streaming, entendemos que el entretenimiento en streaming es una parte esencial de la vida moderna. La capacidad de sumergirse en tus películas, series y programas favoritos en cualquier momento y en cualquier lugar es una experiencia que todos merecen. Es por eso que estamos aquí para ofrecerte una solución perfecta.</p>
        <li>
            <Link className='buttom' to={'/products'}>Ver Productos</Link>
        </li>
      </div>
    </div>
  );
};

export default Home;