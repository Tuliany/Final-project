import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  thought: {
    message: "",
    _id: null,
    hearts: null,
    createdAt: null
  }
}

export const message = createSlice({
  name:'user',
  initialState: initialState, 
  reducers: { 
    setMessage: (state, action) => {
      const { messages } = action.payload
      console.log(`message: ${messages}`)
      state.thought.message = messages
  },
    setId: (state, action) => {
      const {id} = action.payload
      console.log(`Id: ${id}`)
      state.thought._id = id
    },
    setHearts: (state, action) => {
      const {heart} = action.payload
      console.log(`hearts: ${heart}`)
      state.thought.hearts = heart
    },
    setDate: (state, action) => {
      const {date} = action.payload
      console.log(`date: ${date}`)
      state.thought.createdAt = date
    }
  }
})


//THUNK
export const post = (message) => {
  const POST_URL = 'https://final-project-by-tuliany.herokuapp.com/feed'
  return (dispatch, getState) => {
    fetch(`${POST_URL}`,
    {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
    .then (()=>{
      dispatch(message.actions.setMessage({messages: message}))
    })
  }
}

export const messageList = (feed) => {
  const FEED_URL = 'https://final-project-by-tuliany.herokuapp.com/feed'
  return (dispatch, getState) => {
    fetch(`${FEED_URL}`,
    {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
    .then (() => {
      dispatch(messageList.actions.setMessage({ messageList: JSON.message}))
    })
  }
}