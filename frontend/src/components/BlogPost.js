import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'

export const BlogPost = (props) => {
  const history = useHistory()
  const [blogContent, setBlogContent] = useState('')
  const accessToken = useSelector((store)=>store.user.login.accessToken)

  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })
    const handleSubmit= (e) =>{
      e.preventDefault()
      console.log(blogContent)

      fetch ('https://final-project-by-tuliany.herokuapp.com/blogpost', {
      // fetch('http://localhost:8080/blogpost', {
        method: 'POST',
        body: JSON.stringify({ content: blogContent }),
        headers: {
          'Authorization' : accessToken, 
          'Content-Type': 'application/json'
        },
  
      }).then ((res) =>{
        if (!res.ok){
          console.log('error')
        } else {
          return res.json()
        }
      })
      .then (()=>{
        setBlogContent('')
      })
      .catch((err)=> console.log ('errors', err))
    }
return (
  <div>
    <form className="Blogpost">
    <Editor
        apiKey="irfkefnyff2zdr9b39ol4vv4ds0gby19jh2minqlh500ysyp"
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
           menubar: true,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | link | image | insertdatetime | wordcount| formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         value={blogContent}
         onChange={(e) => setBlogContent(e.target.getContent())}
       />
      <button 
        type="submit"
        onClick={handleSubmit}>Send message</button>
      </form>

  </div>

)
}











// SECOND TRY
// export const BlogPost = () =>{
//   const [content, setContent] = useState('')

//   const handleEditorChange = (e) =>{
//     e.preventDefault()
//     fetch('http://localhost:8080/blog',{
//       method: 'POST',
//       body: JSON.stringify({ content }),
//       headers: {
//         'Content-Type': 'application/json'
//       },

//     }).then ((res) =>{
//       if (!res.ok){
//         console.log('error')
//       } else{
//         return res.json()
//       }
//     })
//     .then (()=>{
//       setContent('')
//     })
//     .catch((err)=> console.log ('errors', err))
//   }
//   return (
//     <div>
//       <Editor
//               initialValue="<p>This is the initial content of the editor</p>"
//               init={{
//                 height: 500,
//                 menubar: false,
//                 plugins: [
//                   'advlist autolink lists link image charmap print preview anchor',
//                   'searchreplace visualblocks code fullscreen',
//                   'insertdatetime media table paste code help wordcount'
//                 ],
//                 toolbar:
//                   'undo redo | formatselect | bold italic backcolor | \
//                   alignleft aligncenter alignright alignjustify | \
//                   bullist numlist outdent indent | removeformat | help'
//               }}
//               value={content} onEditorChange={(e)=>setContent(e.target.value)}/>
//             <button onClick={handleEditorChange}>Submit content</button>
//     </div>
//   )
// }










// FIRST TRY
// export const BlogPost = () => {
//   const [message, setMessage] = useState('')

//   const handleEditorChange = (e) => {
//     e.preventDefault()
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({ message }),
//       headers: { 
//         'Content-Type': 'application/json' 
//     },
//     }).then ((res) =>{
//       if (!res.ok) {
//         console.log('error')
//       } else {
//         return res.json()
//       }
//     })
//       .then(() => {
//         setMessage('')
//       })
//       .catch ((err)=> console.log('errors', err))
//   }
//     return (
//       <div>  
//       <Editor
//         initialValue={message}
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount'
//           ],
//           toolbar:
//             'undo redo | link | image | searchreplace | insertdatetime | formatselect | bold italic backcolor | \
//             alignleft aligncenter alignright alignjustify | \
//             bullist numlist outdent indent | removeformat | help'
//         }}
//         onEditorChange={(e)=>setMessage(e.target.value)}
//       />
      
            
//         <button 
//           type="submit"
//           onChange={handleEditorChange}
//           >
//            POST BLOGPOST
//           </button>
//           {/* <p>{`${message}`}</p> */}
          
//       </div>
//     )
//   }

