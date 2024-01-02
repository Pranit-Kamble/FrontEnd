import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../CreateContext/contextdata'

const TopTechnology = () => {
    const data=useContext(Data)
    return (
        <div className='hometechno'>
          {
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