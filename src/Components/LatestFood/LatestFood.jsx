import React, { useContext } from 'react'
import { Data } from '../CreateContext/contextdata'
import './LatestFood.css'
import { Link } from 'react-router-dom'

const LatestFood = () => {
  const data=useContext(Data)
  return (
   <div className='hometechno'>
    {
      data.map((index,value)=>{
        if(index.catagory==='food'){
          return (
            <Link key={value} state={index} to='/latesttravel'>
            <div  className='foodcon'>
            <img className='foodimg' src={index.img} alt="" />
            <h3>{index.name}</h3>
            <p className='technopara'>{index.para}</p>
            </div>
            </Link>
          )
        }
      })
    }
   </div>
  )
}

export default LatestFood