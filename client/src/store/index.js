import { configureStore, } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { frontPageApi } from './apis/frontPageApi'

export const store = configureStore({
  reducer: {
    [frontPageApi.reducerPath]: frontPageApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(frontPageApi.middleware)
  }
})

setupListeners(store.dispatch)

export { useGetGeneralProfileQuery } from './apis/frontPageApi'