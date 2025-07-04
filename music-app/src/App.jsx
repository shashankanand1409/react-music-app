import { useState } from 'react'

import './App.css'
import bgImage from './assets/music-sheet-bg.svg'

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='webpage'>
        <div className='header'>
          <div className='button-flex'>
            <button className="toggle-modes-button">Western</button>
            <button className="toggle-modes-button">Classical</button> 
          </div>
          <div className='song-details'>
          <h2>Song Details</h2>
          <p>Details about the selected song will appear here.</p>
        </div>
        
          <div className="header-text-elements"> 
            <h3>Song title</h3>
            <h3>Album name</h3>
            <h3>Artist name</h3>
            <h3>Tempo</h3>
            <h3>Time Signature</h3>
          </div>
        </div>

        <div className='main-content'>
            
        </div>

        
      </div>
    </div>
  )
}
