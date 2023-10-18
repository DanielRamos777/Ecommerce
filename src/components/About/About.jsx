import React from 'react';
import './About.css'
import streaming from './img/streaming.jpg'

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">ACERCA DE</h1>
      <div className="about-text">
        <h2>Nosotros:</h2>
          <p>Bienvenidos a Streaming, tu destino confiable para acceder al emocionante mundo del entretenimiento en streaming. En Streaming, estamos dedicados a brindarte las mejores experiencias de streaming, con una selección diversa de cuentas premium que satisfarán todas tus necesidades de entretenimiento.</p>
          <p>Nuestra pasión por el streaming y la tecnología nos impulsa a ofrecerte las últimas y más emocionantes cuentas de plataformas de streaming líderes en el mercado. Con años de experiencia en la industria, hemos construido una reputación de confiabilidad y excelencia en el suministro de cuentas de calidad.</p>
          <p>En Streaming, entendemos la importancia de una experiencia de entretenimiento sin interrupciones, por lo que nos comprometemos a ofrecer un servicio inigualable a nuestros clientes. Nuestra misión es convertirnos en tu socio de confianza para todas tus necesidades de streaming.</p>
          <h2>Misión:</h2>
          <p>En Streaming, nuestra misión es brindar a nuestros clientes acceso a la mejor experiencia de entretenimiento en streaming posible. Nos esforzamos por ofrecer cuentas premium de las principales plataformas de streaming a precios competitivos. Creemos que todos merecen disfrutar de contenidos de alta calidad sin importar su ubicación o presupuesto.</p>
          <p>Estamos comprometidos con la satisfacción del cliente, y trabajamos incansablemente para garantizar que obtengas el valor que mereces. Nuestra misión es facilitar el acceso a tus programas, películas y series favoritas de manera rápida y segura. Queremos ser tu primer destino cuando se trata de cuentas de streaming premium.</p>
          <h2>Visión:</h2>
          <p>En Streaming, nuestra visión es convertirnos en un referente en la industria de las cuentas de streaming, ofreciendo una amplia variedad de opciones para clientes de todo el mundo. Nos esforzamos por ser un líder confiable en el suministro de cuentas premium y ser reconocidos por la calidad de nuestros productos y servicios.</p>
          <p>Vemos un futuro en el que cualquier persona pueda disfrutar de los contenidos que ama sin complicaciones, y estamos comprometidos a allanar el camino hacia esa visión. Continuaremos expandiendo nuestra gama de cuentas y mejorando nuestros servicios para satisfacer las necesidades cambiantes de nuestros clientes.</p>
          <p>En Streaming, creemos que el entretenimiento en streaming no tiene límites, y nuestra visión es liderar el camino hacia un mundo donde todos puedan acceder a un entretenimiento de alta calidad de manera sencilla y asequible.</p>
          <p>Estos textos son solo ejemplos y puedes personalizarlos según la identidad y los objetivos de tu negocio. Asegúrate de transmitir tu compromiso con la calidad y la satisfacción del cliente en tus mensajes.</p>
          </div>
      <img src={streaming} alt="Una pantalla de televisión que muestra varios servicios de streaming" className="streaming" />
    </div>
  );
}

export default About;