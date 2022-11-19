import React from 'react'
import './Garde.css'
import Degarde from './images/Degarde.jpg'

const Garde = () => {
  return (
    <div className='garde'>
        <h2>PHARMACIE DE GARDE</h2>
          <span className="linerr"></span>
        <div className='all'>
            <div className='gardeimg'>
                <img src={Degarde} alt='logo'/>
            </div>
            <div className='texte'>
            <p>Nous sommes situés à côté de</p>
            <p>MandjiSport au centre-ville</p>
            <p>De Port-Gentil</p>
            <a href='/' className='btn'>
                <button>Pharmacie Centrale</button>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Garde