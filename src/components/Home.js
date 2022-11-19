import React from 'react'
import './Home.css'

function Home () {
  return (
    <div className='home'>
        <div className='content'>
            <p>A Port-Gentil...</p>
            <p>L'application Médic'App</p>
            <p> met vos Pharmacies  à votre portée </p>
            <button href='/' className='button'>Vos Pharmacies</button>
        </div>
    </div>
  )
}

export default Home