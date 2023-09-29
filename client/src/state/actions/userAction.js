import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_PROFILE,
  PROFILE_ERROR
} from '../types'

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT })
}

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/api/users/profile')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({ type: AUTH_ERROR })
  }
}

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }

  try {
    const res = await axios.post('/api/users/login', { email, password }, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    dispatch(loadUser())
  } catch (err) {
    dispatch({ type: LOGIN_FAIL })
  }
}

export const getFrontProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users/get-front-profile')
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({ type: PROFILE_ERROR })
  }
}