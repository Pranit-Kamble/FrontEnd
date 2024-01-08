import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './PostPage.css'

const PostPage = () => {
    const location=useLocation()
  return (
    <div className='post-page'>
        <Link to='/'><button>Go Back</button></Link>
        <img src={location.state.img} alt="" />
        <h3 className='title'>{location.state.name}</h3>
        <p className='desc'> {location.state.para}</p>
    </div>
  )
}

export default PostPage