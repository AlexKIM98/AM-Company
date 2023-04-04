import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import importado from '../img/importado.jpg'
import nacional from '../img/fabric-3506846_1920.jpg'
import telas from '../img/black-932213.jpg'

import './Carousel.css';


function CarouselH() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='carousel-container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="img-fluid shadow-4"
          style={{height:700}}
          src={telas}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>AM COMPANY</h3>
          <h2> - Since 2018 - </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="img-fluid shadow-4"
           style={{height:700}}
          src={nacional}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>NACIONAL</h3>
          <h2 className='nacional'>Fabricando y brindando telas de origen nacional de alta calidad, compitiendo con las mejores telas del mundo a un precio ajustado para nuestro mercado para que puedas seguir brindandole lo mejor a tus clientes, a un precio ideal.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="img-fluid shadow-4"
           style={{height:700}}
          src={importado}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>IMPORTADO</h3>
          <h2>
            A través de nuestras telas importadas, te mantenemos conectado a la moda del mundo, para que siempre puedas estar un paso por delante de tus clientes y los puedas sorprender.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselH;