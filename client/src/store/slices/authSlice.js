import { createSlice } from "@reduxjs/toolkit"

const initialState = { token: localStorage.getItem('token') }

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setLoginCredentials: (state, { payload }) => {
      localStorage.setItem('token', payload.token)
      state.token = payload.token
    }
  }
})

export const { setLoginCredentials } = authSlice.actions
export const authReducer = authSlice.reducer