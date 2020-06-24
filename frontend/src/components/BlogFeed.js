import React, { useEffect,useState} from 'react'
import '../Style/BlogFeed.css'

const url = 'https://final-project-by-tuliany.herokuapp.com/blog'
        
export const BlogFeed = () => {
    const [post, setPost] = useState(null)
    const [postedMessage, setPostedMessage] = useState('')

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(json => setPost(json))
}, [postedMessage])


    return ( 
      <div className="blog-container">
        <div class="blog-header">
          <div class="blog-cover">
          </div>
        </div>
        <div className="blog-body">

        {post&&
          post.map((blog) => ( 
          <div className="blog-summary">
          <h10 dangerouslySetInnerHTML= {{ __html: blog.content }}></h10>
          {/* <h15>{moment(createdAt).fromNow()}</h15> */}
          </div>
          ))} 
        </div>
        </div>
      )
    }