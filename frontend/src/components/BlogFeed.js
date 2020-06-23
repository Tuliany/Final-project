import React, { useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import moment from 'moment' 

import '../Style/BlogFeed.css'



const url = 'https://final-project-by-tuliany.herokuapp.com/blog'
        

export const BlogFeed = () => {
    const history = useHistory()
    const userName = useSelector((store) => store.user.login.userName)
    const [post, setPost] = useState(null)
    const [postedMessage, setPostedMessage] = useState('')
    const accessToken = useSelector((store) => store.user.login.accessToken)

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(json => setPost(json))
}, [postedMessage])

// useEffect(() => {
//   if (!accessToken) {
//     history.push('/')
//   }
// })

    return ( 
      <div className="blog-container">
        <div class="blog-header">
          <div class="blog-cover">
            
          </div>
        </div>
        <div className="blog-body">

        {post&&
          post.map((blog) => ( 
          // <Link to={`/blog/${blog._id}`}>     
          <div className="blog-summary">
          <h10 dangerouslySetInnerHTML= {{ __html: blog.content }}></h10>
          {/* <h15>{moment(createdAt).fromNow()}</h15> */}
          </div>
        //  </Link>
          ))} 
        </div>
        </div>
      )
    }