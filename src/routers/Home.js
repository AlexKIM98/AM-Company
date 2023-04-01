import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import SectionOne from '../components/SectionOne'
import SectionTwo  from '../components/SectionTwo'

const Home = () => {
  return (
    <div>
       <NavBar/> 
       <Carousel/>
       <SectionOne/>
       <SectionTwo/>
       <Footer/>

    </div>
  )
}

export default Home