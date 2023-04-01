import React from 'react'
import './SectionOne.css';
import duo from '../img/duo.jpeg';
import SectionTwo from './SectionTwo';


const SectionOne = () => {
  return (
    <div className='section1'>
        <div className='container'>
            <div className='container-left'>
            <img src={duo} className='img-1' alt='Aaron y Jose' width={600} height={600}/>
            </div>
            <div className='container-right'>
                <h4>Aaron Suh y Jose Shin, los fundadores de AM Company poseen mas de 15 años de experiencia en la industria textil. Gracias a su sacrificio, dedicacion y perserverancia lograron seguir avanzando hacia  adelante a pesar de las dificultades que se han presentado en los ultimos años. Sus principios se basan en la honestidad, el trabajo duro y la eficacia. </h4>
                <h4>Trabajando en conjunto con distintas fabricas e textileras, logran abastecer a los negocios ubicados en Avellaneda del barrio Flores, uno de los motores mas grandes en el rubro textil de la Argentina, la cual distribuyen ropa a la gran mayoria de las provincias del pais. Planean seguir expandiendo la empresa y seguir apoyando a grandes negocios, como tambien a los nuevos negocios que se inician en el hermoso mundo de la moda, aconsejandolos y guiandolos en cada paso.</h4>
            </div>
        </div>
    </div>
  )
}

export default SectionOne