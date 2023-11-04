import { createSlice } from "@reduxjs/toolkit"

const initialState = { token: localStorage.getItem('token') }

const credentialsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginCredentials: (state, { payload }) => {
      localStorage.setItem('token', payload.token)
      state.token = payload.token
    }
  }
})

export const { setLoginCredentials } = credentialsSlice.actions
export const credentialsReducer = credentialsSlice.reducer