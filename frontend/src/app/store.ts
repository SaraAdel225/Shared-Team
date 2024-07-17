import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './feature/loginSlice'
import registerSlice from './feature/registerSlice'
// ...

export const store = configureStore({
  reducer: {
    login:loginSlice,
    register : registerSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

