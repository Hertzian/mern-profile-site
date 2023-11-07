import { configureStore, } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { frontPageApi } from './apis/frontPageApi'
import { authApi } from './apis/authApi'
import { usersApi } from './apis/usersApi'
import { placesApi } from './apis/placesApi'

import { authReducer, setLoginCredentials, logout } from './slices/authSlice'
import { usersReducer, updateStateProfile, setStateProfile } from './slices/usersSlice'
import { placesReducer, setStateAllPlaces, setStateNewPlace, updateStatePlace, deleteStatePlace } from './slices/placesSlice'

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    usersSlice: usersReducer,
    placesSlice: placesReducer,
    [frontPageApi.reducerPath]: frontPageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [placesApi.reducerPath]: placesApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(frontPageApi.middleware)
      .concat(authApi.middleware)
      .concat(usersApi.middleware)
      .concat(placesApi.middleware)
  }
})

setupListeners(store.dispatch)

export {
  setLoginCredentials, logout,
  updateStateProfile, setStateProfile,
  setStateAllPlaces, setStateNewPlace, updateStatePlace, deleteStatePlace,
}
export { useGetGeneralProfileQuery, } from './apis/frontPageApi'
export { useLoginMutation } from './apis/authApi'
export { useGetProfileQuery, useUpdateProfileMutation } from './apis/usersApi'
export { useGetAllPlacesQuery, useGetSinglePlaceQuery, useCreatePlaceMutation, useUpdatePlaceMutation, useDeletePlaceMutation } from './apis/placesApi'