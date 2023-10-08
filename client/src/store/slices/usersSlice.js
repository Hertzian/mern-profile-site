import { createSlice } from "@reduxjs/toolkit"
import {
  getFrontProfile,
  login,
} from "../thunks/usersThunk"
import setAuthToken from "../../utils/setAuthToken"

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: {},
    isLoading: false,
    error: null,
    isAuthenticated: false,
    token: ''
  },
  reducers: {
    logout(state, action) {
      setAuthToken()
      state.token = ''
      state.isAuthenticated = false
    }
  },
  extraReducers(builder) {
    builder.addCase(getFrontProfile.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getFrontProfile.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(getFrontProfile.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true
      state.isAuthenticated = false
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.isAuthenticated = true
      state.token = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.isAuthenticated = false
      state.error = action.error
    })
  }

})

export const { logout } = usersSlice.actions
export const usersReducer = usersSlice.reducer