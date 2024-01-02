import React, { useContext } from 'react'
import { Data } from '../CreateContext/contextdata'
import './LatestFit.css'
import { Link } from 'react-router-dom'

const LatestFit = (props) => {
  const data=useContext(Data)
  return (
    <div className='hometechno'>
        {
          data.map((index,value)=>{
            if(index.catagory==='fitness'){
              return (
                <Link key={value} state={index} to='/latesttravel'>
                <div  className='fitcon'>
                <img className='fitimg' src={index.img} alt="" />
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

export default LatestFit