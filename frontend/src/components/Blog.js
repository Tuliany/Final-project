import React, {useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';

const url = 'https://final-project-by-tuliany.herokuapp.com/feed'

export const Blog = (props) => {
  // const [content, setContent] = useState([])
  const [updatedContent, setUpdatedContent] = useState('')

  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    setUpdatedContent(content)
  }

  const handleSubmit = event =>{
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      body:JSON.stringify({updatedContent}),
      headers: {'Content-Type': 'application/json'}
    })
    .then (()=>{
      setUpdatedContent('')
      props.handleEditorChange(updatedContent)
    })
  }

    return (
      <div>
      <Editor
        initialValue="This is the initial content of the editor"
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
    
        <button 
          type="submit"
          onClick={handleSubmit}
          >
           POST BLOGPOST
          </button>
          <p>{`${updatedContent}`}</p>
          
      </div>
    )
  }

