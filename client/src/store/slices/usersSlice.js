import { createSlice } from "@reduxjs/toolkit"
import { getFrontProfile } from "../thunks/usersThunk"

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: {},
    isLoading: false,
    error: null,
    isAuthenticated: false,
    token: ''
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
  }

})

export const usersReducer = usersSlice.reducer