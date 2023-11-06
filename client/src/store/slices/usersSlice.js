import { createSlice } from "@reduxjs/toolkit"

const initialState = { user: '' }

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setStateProfile: (state, { payload }) => {
      state.user = payload
    },

    updateStateProfile: (state, { payload }) => {
      state.user = payload.user
    }
  }
})

export const { updateStateProfile, setStateProfile } = usersSlice.actions
export const usersReducer = usersSlice.reducer