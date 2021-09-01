import { createContext, useReducer } from 'react'
import axios from 'axios'
import placeReducer from './placeReducer'
import { GET_PLACES, GET_PLACE, PLACES_ERROR } from './types'

export const PlaceContext = createContext()

const PlaceState = (props) => {
  const initialState = {
    places: null,
    loading: true,
    error: null
  }

  const [state, dispatch] = useReducer(placeReducer, initialState)

  const getPlaces = async () => {
    try {
      const res = await axios.get('/api/places')
      dispatch({ type: GET_PLACES, payload: res.data.places })
    } catch (err) {
      dispatch({ type: PLACES_ERROR, payload: err.response.data.message })
    }
  }

  const getPlace = async (placeId) => {
    try {
      const res = await axios.get(`api/place/${placeId}`)
      dispatch({ type: GET_PLACE, payload: res.data })
    } catch (err) {
      dispatch({ type: PLACES_ERROR, payload: err.response.data.message })
    }
  }

  return (
    <PlaceContext.Provider
      value={{
        places: state.places,
        loading: state.loading,
        error: state.error,
        getPlaces,
        getPlace
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  )
}

export default PlaceState
