import React, { useEffect,useState} from 'react'
import {BlogPost} from 'components/BlogPost'
import {Link} from 'react-router-dom'
import '../Style/BlogFeed.css'


const url = 'http://localhost:8080/blog'

export const BlogFeed = () => {
    const [post, setPost] = useState(null)
    const [postedMessage, setPostedMessage] = useState('')

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(json => setPost(json))
}, [postedMessage])


    return ( 
      <div>
        {post&&
          post.map((blog) => ( 
          <div>
          <Link to={`/blog/${blog._id}`}>          
          <h1 dangerouslySetInnerHTML= {{ __html: blog.content }}>
          </h1>
          </Link>
          </div>
          ))} 
          </div>
      )
    }