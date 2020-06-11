import React from 'react'
import moment from 'moment'



export const BlogArticle = ({ article }) => {
  // const [title, setTitle] = useState('')
  // const [content, setContent] =useState('')
  

  // const handleSubmit= (event) => {
  //   event.preventDefault()
  //   fetch(`https://final-project-by-tuliany.herokuapp.com/blog/${_id}/`, {
  //     method: 'POST',
  //     body: JSON.stringify({title, content}),
  //     headers: { 'Content-Type': 'application/json' }
  //   }).then((res) => {
  //     if (!res.ok){
  //       console.log('error')
  //     } else {
  //       return res.json()
  //     }
  //   })

  return (
    <article className='happy-feed'>
      {/* <h3>{title}</h3>
      <h6>{content}</h6>
      <p>{moment(createdAt).fromNow()}</p> */}
    </article>
  )
}
