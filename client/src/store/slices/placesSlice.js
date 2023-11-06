import { createSlice } from "@reduxjs/toolkit"

const initialState = { places: '' }

const placesSlice = createSlice({
  name: 'placesSlice',
  initialState,
  reducers: {
    setStateAllPlaces: (state, { payload }) => {
      state.places = payload
    },

    setStateNewPlace: (state, { payload }) => {
      state.places.push(payload.place)
    },

    updateStatePlace: (state, { payload }) => {
      state.places = state.places.map((place) => {
        if (place.id === payload.place.id) {
          return payload.place
        }
        return place
      })
    },

    deleteStatePlace: (state, { payload }) => {
      state.places = state.places.filter((place) => {
        return place.id !== payload.place
      })
    }

  }
})

export const { setStateAllPlaces, setStateNewPlace, updateStatePlace, deleteStatePlace } = placesSlice.actions
export const placesReducer = placesSlice.reducer