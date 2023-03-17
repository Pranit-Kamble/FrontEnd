import React from 'react'
import LatestTechno from '../../Components/LatestTechno/LatestTechno'
import './Technology.css'
import TopTechnology from '../../Components/LatestTechno/TopTechnology'

const Technology = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Technology</h1>
      <div className='technologycon'>
      <LatestTechno/>
    </div>
   
      <h1 style={{textAlign:'center'}}>Top Posts</h1>
      <div className="technologycon">
      <TopTechnology/>
      </div>
   
    </div>
  )
}

export default Technology