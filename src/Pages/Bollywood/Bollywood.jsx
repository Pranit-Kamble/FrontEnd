import React from 'react'
import LatestBolly from '../../Components/LatestBollywood/LatestBolly'
import './Bollywood.css'
import TopBollywood from '../../Components/LatestBollywood/TopBollywood'


const Bollywood = () => {

  return (
  <div className='home'>
    <div className='homebolly'>
        <div className='box box1'>
          <h1>Movies</h1>
       <LatestBolly/>
      
        </div>
        <div className='box box1'>
          <h1>Top posts</h1>
          <TopBollywood/>
          </div>
      </div>
  </div>
  )
}

export default Bollywood