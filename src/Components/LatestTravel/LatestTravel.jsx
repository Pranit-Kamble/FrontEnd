import React, { useEffect, useState } from 'react'
import './travel.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LatestTravel = () => {
 
  const [data,setdata]=useState('')
  useEffect(()=>{
    axios.get('https://blog-backend-aim5.onrender.com/travel')
    .then((res)=>setdata(res.data))
  },[])
  return (

    <div className='latesttravel'>
      {data &&
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