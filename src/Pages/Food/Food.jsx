import React from 'react'
import LatestFood from '../../Components/LatestFood/LatestFood'
import TopFood from '../../Components/LatestFood/TopFood'

const Food = () => {
  return (
    <div>
    <h1 style={{textAlign:'center'}}>Food</h1>
    <div className='fitnesscon'>
     <LatestFood/>
    </div>
    <h1 style={{textAlign:'center'}}>Top Post</h1>
    <div className='fitnesscon'>
      <TopFood/>
    </div>
    </div>
  )
}

export default Food