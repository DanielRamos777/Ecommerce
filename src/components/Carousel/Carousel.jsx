
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <button className="prev-button" onClick={handlePrev}>&lt;</button>
      <img className="image" src={images[currentImage]} alt="Imagen del carrusel" />
      <button className="next-button" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;