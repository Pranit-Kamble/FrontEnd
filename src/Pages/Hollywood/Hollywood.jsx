import React from 'react'
import LatestHolly from '../../Components/LatestHolly/LatestHolly'
import './Hollywood.css'
import TopHollywood from '../../Components/LatestHolly/TopHollywood'

const Hollywood = () => {

  return (
    <div className='home'>
    <div className='homebolly'>
        <div className='box box1'>
          <h1>Movies</h1>
       <LatestHolly/>
      
        </div>
        <div className='box box1'>
          <h1>Top posts</h1>
          <TopHollywood/>
          </div>
      </div>
  </div>
  )
}

export default Hollywood