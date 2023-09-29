import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_PROFILE,
  PROFILE_ERROR
} from "../types"

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: payload
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }

    case PROFILE_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')

      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }

    default:
      return state
  }
}

export default userReducer