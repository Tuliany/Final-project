import React, { useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from 'reducers/remove.js'
import '../Style/BlogFeed.css'

const url = 'https://final-project-by-tuliany.herokuapp.com/blog'
        
export const BlogFeed = (itemIndex) => {
    const [post, setPost] = useState(null)
    const [postedMessage, setPostedMessage] = useState('')
    const item = useSelector((store) => store.remove.blogpost.items[itemIndex])
    const dispatch = useDispatch ()

    const onRemovedClicked = (e) => {
      dispatch(
        remove.actions.removePost({
          itemIndex
        })
      )
    }


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
          <button
            className="remove"
            onClick={onRemovedClicked}>🗑
          </button>
          </div>
          ))} 
        </div>
        </div>
      )
    }