import React from 'react'
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div name='contacto' className='w-full h-screen  flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/7c51e3a1-27ae-4db0-935a-62e0df893d7e' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300' >CONTACTO</p>
                <p className='text-2xl text-gray-300 py-4'>//Contactanos para conocer un poco mas sobre nuestro productos y nuestros precios. Te estaremos respondiendo en la brevedad!</p>
            </div>
            <input className='bg-[#ccd6d6] p-2' type='text' placeholder='Nombre' name='nombre'/>
            <input className='my-4 p-2 bg-[#ccd6d6]' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='mensaje' rows='10' placeholder='Consultas'></textarea>
            <button className='text-white border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>

        </form>
    </div>


  )
   
}

export default ContactForm