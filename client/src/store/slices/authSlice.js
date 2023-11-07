import { createSlice } from "@reduxjs/toolkit"

const initialState = { token: localStorage.getItem('token') }

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setLoginCredentials: (state, { payload }) => {
      localStorage.setItem('token', payload.token)
      state.token = payload.token
    },

    logout: (state, actions) => {
      localStorage.removeItem('token')
      state.token = ''
    }
  }
})

export const { setLoginCredentials, logout } = authSlice.actions
export const authReducer = authSlice.reducer