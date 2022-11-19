import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pharms from './components/Pharms'
import Garde from './components/Garde'

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Pharms/>
      <Garde/>
    </div>
  );
}

export default App;
