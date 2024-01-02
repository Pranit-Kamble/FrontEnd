import React, { useContext } from 'react'
import { Data } from '../CreateContext/contextdata'
import { Link } from 'react-router-dom'

const LatestHolly = () => {
  const data=useContext(Data)
  return (
    <div>
      {
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