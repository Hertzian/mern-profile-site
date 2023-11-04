import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: ''
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export const { } = usersSlice.actions
export const usersReducer = createSlice.reducer