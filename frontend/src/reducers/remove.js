import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogpost: {
    name: "blog post",
    items: [
      { id: 1, description: 'Breath in', done: false },
      { id: 2, description: 'Breath out', done: true },
      { id: 3, description: 'Dont worry', done: true },
      { id: 4, description: 'Be happy', done: false }
    ]
  }
}

export const remove = createSlice({
  name: "add blogpost",
  initialState: initialState,
  reducers: {
    removePost: (state, action) =>{
      const { itemIndex } = action.payload
      state.blogpost.items = state.blogpost.items.filter(
        (itemgi, index) => index !== itemIndex
      )
    }
  }
})