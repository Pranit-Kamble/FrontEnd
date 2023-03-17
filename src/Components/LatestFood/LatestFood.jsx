import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './LatestFood.css'
import { Link } from 'react-router-dom'

const LatestFood = () => {

  const [data,setdata]=useState('')
  useEffect(()=>{
    axios.get('https://blog-backend-aim5.onrender.com/food')
    .then((res)=>setdata(res.data))
  },[])
  return (
   <div className='hometechno'>
    {data &&
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