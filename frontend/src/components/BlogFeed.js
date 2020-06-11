import React, { useEffect,useState} from 'react'
import {BlogPost} from 'components/BlogPost'
import {Link} from 'react-router-dom'

const url = 'http://localhost:8080/blog'

export const BlogFeed = () => {
    const [post, setPost] = useState(null)
    const [postedMessage, setPostedMessage] = useState('')

// useEffect(()=>{
//   fetch(url)
//   .then((res) => res.json())
//   .then((json) => {
//     console.log('this is json', json)
//     setPost(json)
//   })
// },[postedMessage])

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(json => setPost(json))
}, [postedMessage])

const onFormSubmit = message => {
  setPostedMessage(message)
}
// const handleEditorChange = (post, editor) => {
//   console.log('Content was updated:', post);
//   setPost(post)
// }
    

    return ( 
      <div>

        {post&&
          post.map((blog) => ( 
            <div>
            
          <Link to={`/blog/${blog._id}`}>
          <BlogPost onFormSubmit={onFormSubmit}/>
          <h1>{blog.title} 
          </h1>
          <h3>{blog.content}</h3>
          </Link>
          
          </div>
          ))} 
          </div>
      )
    }