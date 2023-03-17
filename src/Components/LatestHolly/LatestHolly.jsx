import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const LatestHolly = () => {

  const [data,setdata]=useState('')
  useEffect(()=>{
    axios.get('https://blog-backend-aim5.onrender.com/hollywood')
    .then((res)=>setdata(res.data))
  },[])
  return (
    <div>
      {data &&
        data.map((index,value)=>{
          if(index.catagory==='hollywood'){
            return (
              <Link key={value} state={index} to='/latesttravel'>
              <div className='latestbolly'>
              <img className='bollyimg' src={index.img} alt="" />
              <div>
                <h1 className='bollyhead'>{index.name}</h1>
                <p className='bollypara'>{index.para}</p>
              </div>
              
              </div>
              </Link>
            )
          }
        })
      }
    </div>
  )
}

export default LatestHolly