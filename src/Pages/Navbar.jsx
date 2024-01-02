import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [state,changestate]=useState(true)
  const handleclick=()=>{
    changestate(!state)
    let lielement=document.getElementsByTagName('li')
    if(state===true){
      for(let i=0;i<=5;i++){
        lielement[i].style.display='block'
      }
    }
    else{
      for(let i=0;i<=5;i++){
        lielement[i].style.display='none'
      }
    }
    // changestate(!state)
  }
  return (
    <div className='navcon'>
     <div className='con2'> <span className='the'>The</span><span className='siren'>Siren</span> </div>
     <button onClick={handleclick} className='hamburger'><i className="fa fa-solid fa-bars"></i></button>
     
      
         <ul type='none'> 
        <Link to='./'><li>Home</li></Link>
        <Link to='./bollywood'><li>Bollywood</li></Link>
        <Link to='./technology'><li>Technology</li></Link>
        <Link to='./hollywood'><li>Hollywood</li></Link>
        <Link to='./fitness'><li>Anime</li></Link>
        <Link to='./food'><li>Food</li></Link>
      </ul>  
      
     
     <hr className='Navbarhr' />
    </div>
  )
}

export default Navbar