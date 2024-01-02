import React, { useContext } from 'react'
import './LatestBolly.css'
import { Data } from '../CreateContext/contextdata'
import { Link } from 'react-router-dom'


const LatestBolly = () => {
  const data=useContext(Data)
// console.log(props)
  return (
    <div>
      {
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
    </div>
  
    
  )
}

export default LatestBolly