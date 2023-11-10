import { createSlice } from "@reduxjs/toolkit"
import { v4 } from "uuid"
import { store } from ".."

const initialState = []

const alertsSlice = createSlice({
  name: 'alertsSlice',
  initialState,
  reducers: {
    setStateAlert: (state, { payload }) => {
      const id = v4()
      const newPayload = { id, ...payload }
      state.push(newPayload)

      setTimeout(() => {
        store.dispatch(removeStateAlert(newPayload))
      }, 3000 || newPayload.timeout)
    },

    removeStateAlert: (state, { payload }) => {
      return state.filter((alert) => {
        return alert.id !== payload.id
      })
    }

  }
})

export const { setStateAlert, removeStateAlert } = alertsSlice.actions
export const alertsReducer = alertsSlice.reducer