import React, { useEffect } from 'react'
import './LatestBolly.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const LatestBolly = () => {

  const[data,setdata]=useState('')
  useEffect(()=>{
    axios.get('https://blog-backend-aim5.onrender.com/bollywood')
    .then((res)=>setdata(res.data))
  },[])
  console.log(data)

  return (
    <>
      {data &&
        data.map((index,value)=>{
          if(index.catagory==='bollywood'){
            return (
              <Link key={value}  state={index} to='/latesttravel'>
              <div className='latestbolly'>
              <img className='bollyimg' src={index.img} alt="" />
              <div className='bollyhead' >
                <h1>{index.name}</h1>
                <p className='bollypara'>{index.para}</p>
              </div>
              
              </div>
              </Link>
            )
          }
        })
      }
    </>
  
    
  )
}

export default LatestBolly