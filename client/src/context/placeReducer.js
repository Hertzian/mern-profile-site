import { GET_PLACES, GET_PLACE, PLACES_ERROR } from './types'

const placeReducer = (state, action) => {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        loading: false,
        places: action.payload
      }

    case GET_PLACE:
      return {
        ...state,
        loading: false,
        place: action.payload
      }

    case PLACES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default placeReducer
