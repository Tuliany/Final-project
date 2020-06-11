import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isSaved: false
  }

export const blog = createSlice ({
  name:'blog',
  initialState,
  reducers: {
    setBlog: (state, action) => {
    state.initialState = action.payload
    }
  }
})
