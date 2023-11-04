import { configureStore, } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { frontPageApi } from './apis/frontPageApi'
import { authApi } from './apis/authApi'
import { usersApi } from './apis/usersApi'

import { authReducer, setLoginCredentials } from './slices/authSlice'
import { usersReducer, updateStateProfile } from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    usersSlice: usersReducer,
    [frontPageApi.reducerPath]: frontPageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(frontPageApi.middleware)
      .concat(authApi.middleware)
      .concat(usersApi.middleware)
  }
})

setupListeners(store.dispatch)

export { setLoginCredentials, updateStateProfile }
export { useGetGeneralProfileQuery, } from './apis/frontPageApi'
export { useLoginMutation } from './apis/authApi'
export { useGetProfileQuery, useUpdateProfileMutation } from './apis/usersApi'