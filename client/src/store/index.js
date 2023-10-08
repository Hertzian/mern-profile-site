import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { usersReducer, logout } from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})

setupListeners(store.dispatch)

export * from './thunks/usersThunk'
export { logout }