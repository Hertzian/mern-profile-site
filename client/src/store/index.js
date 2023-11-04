import { configureStore, } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { frontPageApi } from './apis/frontPageApi'
import { authApi } from './apis/authApi'
import { credentialsReducer, setLoginCredentials } from './slices/credentialsSlice'

export const store = configureStore({
  reducer: {
    credentials: credentialsReducer,
    [frontPageApi.reducerPath]: frontPageApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(frontPageApi.middleware)
      .concat(authApi.middleware)
  }
})

setupListeners(store.dispatch)

export { setLoginCredentials }
export { useGetGeneralProfileQuery, } from './apis/frontPageApi'
export { useLoginMutation } from './apis/authApi'