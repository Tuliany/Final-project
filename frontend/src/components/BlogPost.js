import React, {useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';

const url = 'https://final-project-by-tuliany.herokuapp.com/blogpost'

export const BlogPost = props => {
  const [message, setMessage] = useState('')

  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    setMessage(content)
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setMessage('')
        props.onFormSubmit(message)
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
            'undo redo | link | image | searchreplace | insertdatetime | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={handleEditorChange}
      />
        <form className='blog-post'>
          <textarea
          value= {message}
          onChange={event=> setMessage(event.target.value)}>
            </textarea>
            
        <button 
          type="submit"
          onClick={handleSubmit}
          >
           POST BLOGPOST
          </button>
          {/* <p>{`${message}`}</p> */}
          </form>
      </div>
    )
  }

