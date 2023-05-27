import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
        <NavLink to='./'><li>Home</li></NavLink>
        <NavLink to='./bollywood'><li>Bollywood</li></NavLink>
        <NavLink to='./technology'><li>Technology</li></NavLink>
        <NavLink to='./hollywood'><li>Hollywood</li></NavLink>
        <NavLink to='./fitness'><li>Anime</li></NavLink>
        <NavLink to='./food'><li>Food</li></NavLink>
      </ul>  
      
     
     <hr className='Navbarhr' />
    </div>
  )
}

export default Navbar