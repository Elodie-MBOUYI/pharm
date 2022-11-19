import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import logoPh from './images/logoPh.png'

import './Navbar.css'



function Navbar() {
    const [click,setClick] = useState()
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src={logoPh} alt='logo'/>
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color:'#04A118'}} />) 
                : (<FaBars size={30} style={{color:'#04A118'}} />)}
                
            </div>
        <ul className= {click ? "nav-menu active" : "nav-menu "}>
                <li className='nav-item'>
                    <a href='/'> Accueil</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Pharmacies</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Pharmacie de Garde</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar