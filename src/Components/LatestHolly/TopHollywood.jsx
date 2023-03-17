import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TopHollywood = () => {

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
                  <div className='latestbolly top'>
                  <img className='bollyimg top1' src={index.img} alt="" />
                  <div>
                    <h3 className='bollyhead top2'>{index.name}</h3>
                    <p className='bollypara top3'>{index.para}</p>
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

export default TopHollywood