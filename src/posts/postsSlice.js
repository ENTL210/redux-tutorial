import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', authorName: 'Edward Lam', content: 'Hello, World!' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded(state, action) {
      state.splice(0,0,action.payload)
    }
  }
})

export const {postAdded} = postsSlice.actions
export const postArray = state => state.posts
export default postsSlice.reducer
