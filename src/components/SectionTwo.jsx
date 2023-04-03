import React from 'react'
import amvidrio from '../img/amvidrio.jpeg'
import './SectionTwo.css';

const SectionTwo = () => {
  return (
    <div className='section2'>
        <div className='container'>
 <div className='container-left'>
                <h4> La traducción de All Matters (AM) significa 'Todo importa'. La empresa fue bautizada de esa manera haciendo referencia que todo en la vida es importante, ya sea un buen o mal momento. Que en los malos momentos aprendemos a valorar de las pequeñas cosas, que de los errores aprendemos a tomar mejores decisiones y que el exito es alcanzado a través de la consistencia y el trabajo duro.</h4>
                <h4> Ese es el mensaje que la empresa quiere transmitir a sus clientes. Que de la unión, perseverancia y disciplina, podremos alcanzar nuestras metas sin importar que situación nos enfrentemos.</h4>
            </div>
        <div className='container-right'>
            <img src={amvidrio} className='img-2' alt='AM Company'/>
        </div>
    </div>
</div>
  )
}

export default SectionTwo