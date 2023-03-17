import React from 'react'
import LatestFit from '../../Components/LatestFitness/LatestFit'
import './Fitness.css'
import TopFitness from '../../Components/LatestFitness/TopFitness'

const Fitness = () => {
  return (
    <div className='home'>
      <h1 style={{textAlign:'center'}}>Anime</h1>
      <LatestFit/>
      <br />
      <h1>Top Posts</h1>
      <TopFitness/>
    </div>
   
  )
}

export default Fitness