import React, {useState, useEffect} from 'react';
import { blog } from '../reducers/blog'
import {useDispatch, useSelector} from 'react-redux'
import { Editor } from '@tinymce/tinymce-react';

const url = 'https://final-project-by-tuliany.herokuapp.com/feed'



export const Blog = () => {
  const dispatch = useDispatch()
  const blog = useSelector((store)=> store.editor.blog.content)

  const [content, setContent] = useState('')

  const handleEditorChange = event => {
    event.preventDefault()
    dispatch(content)
  }
  

  useEffect(()=>{
    dispatch(blog.actions.setContent({message:""}))
  },[dispatch])


  return (
    <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        on
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={handleEditorChange}
      />
  )
}





// export const Blog = props => {
//   const [content, setContent] = useState('')
  
//   const handleEditorChange = event => {
//     event.preventDefault()
//     fetch('url', {
//       method:'POST',
//       body:JSON.stringify({content}),
//       headers: { 'Content-Type':'application/json'}
//     })
//     .then(()=> {
//       setContent('')
//       props.handleEditorChange(content)
//     })
   
//   }

//     return (
//     <div>
//       <Editor
//         initialValue="<p>This is the initial content of the editor</p>"
//         on
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount'
//           ],
//           toolbar:
//             'undo redo | formatselect | bold italic backcolor | \
//             alignleft aligncenter alignright alignjustify | \
//             bullist numlist outdent indent | removeformat | help'
//         }}
//         onEditorChange={handleEditorChange}
//       />
//      <button
//       value={content}
//       type='submit'
//       onClick={handleEditorChange}>
//         Post
//         </button>

//      </div>
//     )
//   }
