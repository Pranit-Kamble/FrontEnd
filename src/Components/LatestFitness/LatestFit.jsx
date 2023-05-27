import React from 'react'
import './LatestFit.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const LatestFit = () => {

  const [data,setdata]=useState('')
  useEffect(()=>{
    axios.get('https://blog-backend-aim5.onrender.com/anime')
    .then((res)=>setdata(res.data))
  },[])
  return (
    <div className='hometechno'>
        {data &&
          data.map((index,value)=>{
            if(index.catagory==='fitness'){
              return (
                <Link key={value} state={index} to='/latesttravel'>
                <div  className='fitcon'>
                <img className='fitimg' src={index.img} alt="" />
                <h3>{index.name}</h3>
                <p className='fitpara'>{index.para}</p>
                <div> <b>Anime/</b> August 21/7/2000</div>
            </div>
               </Link>
              )
            }
          })
        }
    </div>
  )
}

export default LatestFit