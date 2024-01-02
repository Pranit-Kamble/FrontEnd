import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import LatestTravel from '../../Components/LatestTravel/LatestTravel'
import LatestBolly from '../../Components/LatestBollywood/LatestBolly'
import LatestTechno from '../../Components/LatestTechno/LatestTechno'
import LatestHolly from '../../Components/LatestHolly/LatestHolly'
import LatestFit from '../../Components/LatestFitness/LatestFit'
import LatestFood from '../../Components/LatestFood/LatestFood'


const Home = () => {

  // console.log(data.bollywood.post1.img)
  
  return (
    <div className='home'>
      <Header/>
      <br />
   
      <h1>Latest Travel<hr style={{border:'2px solid brown'}} /> </h1>
      <div className='latesttravel'>
      <LatestTravel/>
      </div>
      <br />
      <h2>Latest Bollywood Stories <hr style={{border:'2px solid brown'}} /></h2>
      <div className='homebolly'>
        <div className='box box1'>
       <LatestBolly/>
      
        </div>
        <div className='box box2'>Advertisement</div>
      </div>
      <br />
      <h2>Latest Technology <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
        <LatestTechno/>
      </div>
      <br />
      <h2>Latest Hollywood Stories <hr style={{border:'2px solid brown'}} /></h2>
      <div className='homebolly'>
        <div className='box box1'>
       <LatestHolly/>
        </div>
        <div className='box box2'>Advertisement</div>
      </div>
      <br />
      <h2>All Time Best Anime <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
     <LatestFit/>
      </div>
      <br />
      <h2>Latest Food <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
      <LatestFood/>
      </div>
      <br /><br />
      
    </div>
  )
}

export default Home