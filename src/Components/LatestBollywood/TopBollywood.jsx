import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../CreateContext/contextdata'
import './LatestBolly.css'

const TopBollywood = () => {
    const data= useContext(Data)
    return (
        <div>
          {
            data.map((index,value)=>{
              if(index.catagory==='bollywood'){
                return (
                  <Link key={value}  state={index} to='/latesttravel'>
                  <div className='latestbolly top'>
                  <img className='bollyimg top1' src={index.img} alt="" />
                  <div className='bollyhead top2' >
                    <h3>{index.name}</h3>
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

export default TopBollywood