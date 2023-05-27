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

  return (
    <div className='home'>
      <a href="#travel"><Header/></a>
      <br />
   
      <h1 id='travel'>Latest Travel<hr style={{border:'2px solid brown'}} /> </h1>
      <div  className='latesttravel'>
      <LatestTravel/>
      </div>
      <hr style={{borderTop:'20px ridge black',borderRadius:'0%',width:'100%',marginTop:'20px'}}/>
      <h2>Latest Bollywood Stories <hr style={{border:'2px solid brown'}} /></h2>
      <div className='homebolly'>
        <div className='box box1'>
       <LatestBolly/>
      
        </div>
        <div className='box box2'>Advertisement</div>
      </div>
      <hr style={{borderTop:'20px ridge black',borderRadius:'0%',width:'100%',marginTop:'20px'}}/>
      <h2>Latest Technology <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
        <LatestTechno/>
      </div>
      <hr style={{borderTop:'20px ridge black',borderRadius:'0%',width:'100%',marginTop:'20px'}}/>
      <h2>Latest Hollywood Stories <hr style={{border:'2px solid brown'}} /></h2>
      <div className='homebolly'>
        <div className='box box1'>
       <LatestHolly/>
        </div>
        <div className='box box2'>Advertisement</div>
      </div>
      <hr style={{borderTop:'20px ridge black',borderRadius:'0%',width:'100%',marginTop:'20px'}}/>
      <h2>All Time Best Anime <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
     <LatestFit/>
      </div>
      <hr style={{borderTop:'20px ridge black',borderRadius:'0%',width:'100%',marginTop:'20px'}}/>
      <h2>Latest Food <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
      <LatestFood/>
      </div>
      <br /><br />
      
    </div>
  )
}

export default Home