import React from 'react'
 import './Home.css'

const Home = (props) => {
  return (
    <div>
      <div className='div1'>
        <button className='latest-album'>Get our Latest Album</button><br/>
        <button className='play-btn'>PLAY</button>
      </div>
      <selection className='container'>
        <div className='tour-item'>
        <span className='tour-date'>JUL 22</span>
        <span className='tour-place'>BRISTOW, VA</span>
        <span className='tour-space-place'>JIGGY LUBE LIVE</span>
        <button className='buy-btn'>BUY TICKETS</button>
      </div><hr/>
      <div className='tour-item'>
        <span className='tour-date'>JUL 19</span>
        <span className='tour-place'>TORONTO</span>
        <span className='tour-space-place'>ONBUDWEISER STAGE</span>
        <button className='buy-btn'>BUY TICKETS</button>
      </div><hr/>
      <div className='tour-item'>
        <span className='tour-date'>AUG 7</span>
        <span className='tour-place'>PHOENIX AZ</span>
        <span className='tour-space-place'>AK-CHIN PAVILION</span>
        <button className='buy-btn'>BUY TICKETS</button>
      </div><hr/>
      <div className='tour-item'>
        <span className='tour-date'>AUG 2</span>
        <span className='tour-place'>LAS VEGAS</span>
        <span className='tour-space-place'>T-MOBILE ARENA NV</span>
        <button className='buy-btn'>BUY TICKETS</button>
      </div><hr/>
      </selection>
      <h2 className='About-end'>The Generics</h2>
      </div>
  )
}

export default Home

