import React from 'react'
import './Home.css'
import BlogPost from '../../Components/BlogPost/BlogPost'
import Landing from '../../Components/Landing/Landing'
import PostPage from '../../Components/PostPage/PostPage'


const Home = () => {
  // console.log(data.bollywood.post1.img)
  
  return (
    <div className='home'>
      {/* <Header/> */}
      
      <Landing/>
      <h1 id='travel'>Best of Travel </h1>
      <div  className='latesttravel'>
      <BlogPost imgWidth='250px' name = 'travel' />
      </div>

      <h1 id='bollywood'>Best of Bollywood</h1>
      <div  className='latesttravel'>
      <BlogPost imgWidth='200px' name = 'bollywood' />
      </div>

      <h1  id='hollywood'>Best of Hollywood </h1>
      <div className='latesttravel'>
      <BlogPost imgWidth='200px' name = 'hollywood' />
      </div>

      <h1 id='technology'>Best of Technology</h1>
      <div  className='latesttravel'>
      <BlogPost imgWidth='250px' name = 'technology' />
      </div>

      <h1 id='food'>Best of Food </h1>
      <div  className='latesttravel'>
      <BlogPost imgWidth='250px' name = 'food' />
      </div>

      <h1 id='fitness'>Best of Anime </h1>
      <div className='latesttravel'>
      <BlogPost imgWidth='200px' name = 'fitness' />
      </div>
      
    </div>
  )
}

export default Home