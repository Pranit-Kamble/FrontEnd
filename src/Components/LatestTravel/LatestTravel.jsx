import React, { useContext } from 'react'
import './travel.css'
import { Data } from '../CreateContext/contextdata'
import { Link } from 'react-router-dom'

const LatestTravel = () => {
  const data= useContext(Data)
  console.log(data)
  return (

    <div className='latesttravel'>
      {
        data.map((index,value)=>{
          if(index.catagory==='travel'){
            return (
            <Link key={value} state={index} to='/latesttravel'>
            <div  className='travel'>
              <img className='tarvelimg' src={index.img} alt="" />
              <h3>{index.name}</h3>
              <p className='travelpara'>{index.para}</p>
            </div>
            </Link>
            )
          }
         
        })
      }
   
   </div>
   
  )
}

export default LatestTravel