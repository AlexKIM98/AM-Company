import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import logo from '../img/amlogo.png'
import { BsHouse } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsListColumnsReverse } from "react-icons/bs";
import {FaBars, FaTimes} from 'react-icons/fa';

import './NavBar.css';




const NavBar = () => {

const [click, setClick] = useState(false)

const handleClick = () => {
    setClick(!click)
}

  return (
    <Stack className='nav-header' 
    direction="row" 
    alignItems="center" 
    p={2}
    sx={{position:'sticky', background: 'transparent', justifyContent:'space-between'}} 
    >
        <Link to='/' className='logo-am'>
            <img 
            src={logo}
            style={{width: 80, height: 80, marginTop: 0, }}
            />   
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link className='nav-link' id='casa' to='/'><BsHouse size={30} style={{color: '#fff', marginRight:'2rem'}}/></Link>
            </li>
            <li>
                <Link className='nav-link' id='telas' to='/telas'><BsListColumnsReverse  size={30} style={{color: '#fff', marginRight:'2rem'}}/></Link>
            </li>
            <li>
                <Link className='nav-link' id='sobre' to='/contacto'><BsEnvelope size={30} style={{color: '#fff', marginRight:'2rem'}} /></Link>
            </li>
        </ul>
        <div className='hamburguer' onClick={handleClick}>
        {click ? (<FaTimes size={20}  style={{color:'#ffff'}}/>) : (<FaBars size={20}  style={{color:'#fff'}}/>)}
        </div>
    </Stack>
  )
}

export default NavBar

