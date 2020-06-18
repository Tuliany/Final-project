import React, { useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { FbComment } from 'components/FbComment'
import '../Style/BlogFeed.css'
import moment from 'moment'


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
      <div className="container">
        {post&&
          post.map((blog) => ( 
          
          <Link to={`/blog/${blog._id}`}>     
          {/* {blog.content}      */}
          <h10 dangerouslySetInnerHTML= {{ __html: blog.content }}></h10>
          <div class="fb-like" data-href="https://final-project-by-tuliany.herokuapp.com/blog" data-width="" data-layout="button_count" data-action="like" data-size="large" data-share="true"/>
          <div class="fb-comments" data-href="https://final-project-by-tuliany.herokuapp.com/blog" data-numposts="5" data-width="" />
         </Link>
          ))} 

        </div>
      )
    }