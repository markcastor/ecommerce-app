import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>

            </div>
            <div className='blog-content'>
                <p className='date'>1 April 2023</p>
                <h5 className='title'>A beautiful morning renaissance</h5>
                <p className='desc'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                <Link className='button' to='/blog/:id'>Read More</Link>

            </div>

        </div>
  )
}

export default BlogCard