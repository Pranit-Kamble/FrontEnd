import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import './TravelClick.css'
import { Data } from '../CreateContext/contextdata'
import { Link } from 'react-router-dom'



const TravelClick = () => {
  const location=useLocation()
  console.log(location)
  const data=useContext(Data)
  return (
    <div className='home'>
      <div className='singletravel'>
        <img className='singletrvelimg' src={location.state.img} alt="" />
        <h1 className='singletravelhead'>{location.state.name}</h1>
        <p className='singletravelpara'>{location.state.para}</p>
    </div>
    <div>
      <h1 style={{textAlign:'center'}}>Related Posts <hr /></h1>
      <div className='hometechno'>
      {
        data.map((index,value)=>{
          if(index.catagory===location.state.catagory && location.state.id!==index.id){
            return(
              <Link state={index} to='/latesttravel'>
              <div key={value} className='travel'>
                <img className='tarvelimg' src={index.img} alt="" />
                <h3>{index.name}</h3>
                <p className='travelpara'>{index.para}</p>
              </div>
              </Link>
            )
          }
        })
      }
      </div>
    </div>
    </div>
    
   
  )
}

export default TravelClick