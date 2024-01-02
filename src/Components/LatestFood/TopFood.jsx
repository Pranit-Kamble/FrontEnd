import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../CreateContext/contextdata'

const TopFood = () => {
    const data=useContext(Data)
  return (
    <div className='hometechno'>
    {
      data.map((index,value)=>{
        if(index.catagory==='food'){
          return (
            <Link key={value} state={index} to='/latesttravel'>
            <div  className='foodcon foodcontop'>
            <img className='foodimg foodimgtop' src={index.img} alt="" />
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

export default TopFood