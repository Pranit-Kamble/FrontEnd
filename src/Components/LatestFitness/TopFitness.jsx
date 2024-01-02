import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../CreateContext/contextdata'

const TopFitness = () => {
    const data=useContext(Data)
  return (
    <div className='hometechno'>
        {
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