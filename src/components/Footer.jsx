import React from 'react'
import './Footer.css';
import { FaInstagram,FaMailBulk,FaPhone,} from 'react-icons/fa'
import { Link } from 'react-router-dom';

import Map from './Map';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <Map/>
        <div className='email'>
        <h4 style={{display: 'flex', alignItems:'center'}}> <FaMailBulk size={20} style={{color: 'red',marginRight:'2rem' }} />amcompanytextil@gmail.com</h4>
        </div>
        <div className='phone' >
                    <h4
                    style={{display: 'flex', alignItems:'center'}}> <FaPhone size={20} style={{color: 'red', marginRight:'2rem'}}/>+54 9 11-3056-0790 </h4>
          </div>
          </div>
          <div className='right'>
                <h4>Acerca de nosotros</h4>
                <h5>"AM COMPANY Tratamos de superarnos día a día para consolidar nuestro liderazgo tanto en el cumplimiento de los plazos establecidos como en la calidad de nuestro trabajo. Nos afianzamos en la confianza, y esa confianza se refuerza diariamente con nuestro compromiso."</h5>
                <div className='social'>
                <h4><a href='https://www.instagram.com/textilam/' target='_blank' rel="noopener noreferrer"><FaInstagram size={30} style={{color: 'red', marginRight:'1rem', marginTop:'2rem', width:'fit-content'} }/></a></h4>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer