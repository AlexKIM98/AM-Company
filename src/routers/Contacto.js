import React from 'react'
import { Nav } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contacto = () => {
  return (
    <div>
      <NavBar/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contacto