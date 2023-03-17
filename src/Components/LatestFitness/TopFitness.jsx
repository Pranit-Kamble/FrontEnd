import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TopFitness = () => {
    // const data=useContext(Data)
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
                <div  className='fitcon fitcontop'>
                <img className='fitimg fitimgtop' src={index.img} alt="" />
                <h3>{index.name}</h3>
                <p className='fitpara'>{index.para}</p>
            </div>
               </Link>
              )
            }
          })
        }
    </div>
  )
}

export default TopFitness