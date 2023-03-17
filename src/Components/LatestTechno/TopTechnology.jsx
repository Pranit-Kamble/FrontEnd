import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TopTechnology = () => {
    
    const [data,setdata]=useState('')
    useEffect(()=>{
      axios.get('https://blog-backend-aim5.onrender.com/technology')
      .then((res)=>setdata(res.data))
    },[])
    return (
        <div className='hometechno'>
          {data &&
            data.map((index,value)=>{
              if(index.catagory==='technology'){
                return(
                  <Link key={value} state={index} to='/latesttravel'>
                  <div className='technocon technocontop'>
                  <img className='technoimg technoimgtop' src={index.img} alt="" />
                  <h3>{index.name}</h3>
                  {/* <p className='technopara top2'>{index.para}</p> */}
                  </div>
                  </Link>
                )
              }
            })
          }
        
      </div>
      )
}

export default TopTechnology