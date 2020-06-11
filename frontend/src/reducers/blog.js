import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  blog: {
    content: null,
    message:'',
  }
}

export const editor = createSlice ({
  name:'editor',
  initialState: initialState,
  reducers: {
    set: (state, action) => {
      const { content } = action.payload
      console.log(`Content: ${content}`)
      state.blog.content = content
    }
  }
})

// THUNK 
export const blog = (content) => {
const BLOG_URL ='https://final-project-by-tuliany.herokuapp.com/feed'
return (dispatch, getState) => {
fetch(`${BLOG_URL}`, 
{
  method: 'POST',
  body: JSON.stringify({ content }),
  headers: { 'Content-Type': 'application/json'}
})
.then((res) => {
  if (!res.ok){
  throw 'Not able to post' 
   }
   return res.json()
})
 .then((json)=> {
   dispatch(blog.actions.setContent({ content: json.content }))
  })
 .catch((err) => {
   dispatch(.actions.setErrorMessage({ errorMessage: err }))
 })
}
}