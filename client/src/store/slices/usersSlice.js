import { createSlice } from "@reduxjs/toolkit"

const initialState = { user: '' }

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    updateStateProfile: (state, { payload }) => {
      state.user = payload.user
    }
  }
})

export const { updateStateProfile } = usersSlice.actions
export const usersReducer = usersSlice.reducer