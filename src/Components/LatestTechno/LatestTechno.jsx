import React, { useContext } from 'react'
import './LatestTechno.css'
import { Data } from '../CreateContext/contextdata'
import { Link } from 'react-router-dom'

const LatestTechno = () => {
  const data=useContext(Data)
  return (
    <div className='hometechno'>
      {
        data.map((index,value)=>{
          if(index.catagory==='technology'){
            return(
              <Link key={value} state={index} to='/latesttravel'>
              <div className='technocon'>
              <img className='technoimg' src={index.img} alt="" />
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

export default LatestTechno