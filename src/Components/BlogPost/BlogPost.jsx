// BlogPost.js

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../CreateContext/contextdata';
import './BlogPost.css';

const BlogPost = ({name,imgWidth}) => {
  const data = useContext(Data)
  // console.log(name)
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='post-container'>
        {data && data.map((index,value)=>{
            if(index.catagory===name){
            return(
            <Link state={index} to='/postpage' key={value}>
              <div  className={`blog-post ${expanded ? 'expanded' : ''}`}>
            <h2 className="post-title">{index.name}</h2>
            <p className="post-author">By Pranit</p>
             <img style={{'width':imgWidth}} className="post-image" src={index.img}  />
            <div className="post-content">
                {`${index.para.substring(0, 150)}`}
            </div>
            <button className="read-more-btn">Learn More</button>
        </div>
            </Link>
            )
        }
        })}
    </div>
  );
};

export default BlogPost;

