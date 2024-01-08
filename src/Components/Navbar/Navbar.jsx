import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [state,changestate]=useState(true)
  const handleclick=()=>{
    changestate(!state)
  }

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <div className={`navcon ${scrolling ? 'scrolling' : ''}`}>
     <div className='con2'> <span className='the'>The</span><span className='siren'>Siren</span> </div>
     <label  className="hamburger">
  <input type="checkbox"/>
  <svg onClick={handleclick} viewBox="0 0 32 32">
    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className="line" d="M7 16 27 16"></path>
  </svg>
</label>
     
      
      <ul className={state ? 'hide':'show'} type='none'> 
        <a href='#travel'><li>Travel</li></a>
        <a href='#bollywood'><li>Bollywood</li></a>
        <a href='.#technology'><li>Technology</li></a>
        <a href='#hollywood'><li>Hollywood</li></a>
        <a href='#fitness'><li>Anime</li></a>
        <a href='#food'><li>Food</li></a>
      </ul>  
      
     
     {/* <hr className={`Navbarhr ${scrolling ? 'scrolling' : ''}`} /> */}
    </div>
  )
}

export default Navbar