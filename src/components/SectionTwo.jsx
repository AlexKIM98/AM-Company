import React from 'react'
import amvidrio from '../img/amvidrio.jpeg'
import './SectionTwo.css';

const SectionTwo = () => {
  return (
    <div className='section2'>
        <div className='container'>
 <div className='container-left'>
                <h4> La traduccion de All Matters (AM) significa 'Todo importa'. La empresa fue bautizada de esa manera haciendo referencia que todo en la vida es importante, ya se un buen momento como tambien lo es uno malo. Que de los malos momentos aprendemos a valorar de los buenos, que de los errores podemos aprender y que  el exito es alcanzado a traves del fracaso.</h4>
                <h4> Ese es el mensaje que la empresa quiere transmitir a sus clientes. Que a traves de la union, la honestidad y el trabajo duro, juntos podremos alcanzar nuestras metas sin importar que situacion nos enfrentemos.</h4>
            </div>
        <div className='container-right'>
            <img src={amvidrio} className='img-2' alt='AM Company'/>
        </div>
    </div>
</div>
  )
}

export default SectionTwo