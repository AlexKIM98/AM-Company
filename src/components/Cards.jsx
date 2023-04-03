import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsEnvelope } from "react-icons/bs";
import flecha from '../img/flechaBlanca.png'
import './Cards.css';

const Cards = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div className='telas'>
         <div name='contacto' className='w-full h-screen  flex justify-center items-center p-4'>
            <div className='pb-8'> 
                <p className='text-6xl font-bold inline border-b-4 border-red-600 text-gray-300' >TELAS</p>
                </div>
                <img src={flecha} className='flecha' alt='Arrow'></img>
                <img src={flecha} className='flecha' alt='Arrow'></img>
                </div>
        
        <div className='card-container'>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Algodon c/ lycra 30/1</h5>
                <h6>- Ancho: 1,65 </h6>
                <h6>- Rinde: 2,80 </h6>
                <h6>- Composicion: Algodon 92% Lycra 8% </h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Algodon c/ lycra 24/1</h5>
                <h6>- Ancho: 1,65 </h6>
                <h6>- Rinde: 2,20 </h6>
                <h6>- Composicion: Algodon 92% Lycra 8%  </h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Jersey 30/1 Peinado</h5>
                <h6>- Ancho: 0,92 </h6>
                <h6>- Rinde: 3,80 </h6>
                <h6>- Composicion: Algodon 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Jersey 24/1 Peinado</h5>
                <h6>- Ancho: 0,92 </h6>
                <h6>- Rinde: 2,50 </h6>
                <h6>- Composicion: Algodon 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Jersey 20/1 Peinado</h5>
                <h6>- Ancho: 0,92 </h6>
                <h6>- Rinde: 2,10 </h6>
                <h6>- Composicion: Composicion 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Rustico 24/1 Peinado</h5>
                <h6>- Ancho: 0,96 </h6>
                <h6>- Rinde: 2,30 </h6>
                <h6>- Composicion: Algodon 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Frisa Poal Peinado Uni</h5>
                <h6>- Ancho: 0,94 </h6>
                <h6>- Rinde: 1,60 </h6>
                <h6>- Composicion: Algodon 65% Poliester 35%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Puño 20-1 Frisa Uni</h5>
                <h6>- Ancho: 0,50 </h6>
                <h6>- Rinde: 3,70 </h6>
                <h6>- Composicion: Algodon 35% Poliester 32% Lycra 3%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Morley Algodon 24-1 c- Lycra</h5>
                <h6>- Ancho: 1,10 </h6>
                <h6>- Rinde: 3,70 </h6>
                <h6>- Composicion: Algodon 92% Lycra 8%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Microfibra Lisa</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: 2,70</h6>
                <h6>- Composicion: Poliester 92% Lycra 8%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Waffle Peinado</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: 3,360 </h6>
                <h6>- Composicion: Algodon 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Rustico Brush</h5>
                <h6>- Ancho: 1,50 </h6>
                <h6>- Rinde: 2,20 </h6>
                <h6>- Composicion: Rayon 95% Spandex 5%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Frisa c/ Lycra</h5>
                <h6>- Ancho: 1,65 </h6>
                <h6>- Rinde: 2,40 </h6>
                <h6>- Composicion: Rayon 95% Spandex 5% </h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Frisa Estampada c/ Lycra</h5>
                <h6>- Ancho: 1,58 </h6>
                <h6>- Rinde: 2,20 </h6>
                <h6>- Composicion: Polifriz 97% Spandex 3%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-NACIONAL-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Morley Viscosa c/ Lycra CF</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: 3,00 </h6>
                <h6>- Composicion: Rayon 96% Spandex 4%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Scuba Creep</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: 2,30 </h6>
                <h6>- Composicion:</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Tull Mesh</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: 6,00 </h6>
                <h6>- Composicion: Poliester 95% Spandex 5%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Paño Escoses</h5>
                <h6>- Ancho: 1,55 </h6>
                <h6>- Rinde: - </h6>
                <h6>- Composicion: Poliester 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Lentejuelas #1 - 04</h5>
                <h6>- Ancho: 1,30 </h6>
                <h6>- Rinde: - </h6>
                <h6>- Composicion: Poliester 95% Spandex 5%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Lentejuelas #2 - 03</h5>
                <h6>- Ancho: 1,50 </h6>
                <h6>- Rinde: </h6>
                <h6>- Composicion: Poliester 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'> Punto Lurex #1 - 01</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: </h6>
                <h6>- Composicion: Poliester 80% Lurex 15% Spandex 5% </h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Punto Lurex #2</h5>
                <h6>- Ancho: 1,50 </h6>
                <h6>- Rinde: </h6>
                <h6>- Composicion: Nylon 70% Lurex 25% Spandex 5%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Bengalina Lisa PD</h5>
                <h6>- Ancho: 1,50 </h6>
                <h6>- Rinde: </h6>
                <h6>- Composicion: Rayon 65% Nylon 30% Spandex 5%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Bengalina Engomada</h5>
                <h6>- Ancho: 1,50 </h6>
                <h6>- Rinde: </h6>
                <h6>- Composicion: Rayon 65% Nylon 30% Spandex 5%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Saten de Punto</h5>
                <h6>- Ancho: 1,50 </h6>
                <h6>- Rinde: 2,65 </h6>
                <h6>- Composicion: Poliester 93% Spandex 7%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Corderito Bifaz</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: 2,40 </h6>
                <h6>- Composicion: Polieter 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>

            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'> Polar c/ Corazones</h5>
                <h6>- Ancho: 1,57 </h6>
                <h6>- Rinde: 2,40 </h6>
                <h6>- Composicion: Poliester 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Polar Rayado</h5>
                <h6>- Ancho: 1,57 </h6>
                <h6>- Rinde: 2,40 </h6>
                <h6>- Composicion: Poliester 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Polar PD</h5>
                <h6>- Ancho: 1,60 </h6>
                <h6>- Rinde: 2,30 </h6>
                <h6>- Composicion: Poliester 100%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>
            <div className='card'>
                <h5>-IMPORTADO-</h5>
                <span className='bar'></span>
                <h5 className='btc'>Jacquard Cuadrille</h5>
                <h6>- Ancho: 1,40 </h6>
                <h6>- Rinde: 2,20 </h6>
                <h6>- Composicion: Poliester 86% Rayon 11% Spandex 3%</h6>
                <Link to='/contacto' className='btn'><BsEnvelope size={30} style={{color: '#fff', margin:'0 auto'}} /></Link>
            </div>


        </div>
    </div>
  )
}

export default Cards