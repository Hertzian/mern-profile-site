import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const login = async (email, password) => {
  try {
    const res = await axios.post(`/api/users/login`, { email, password })
    const token = res.data
    localStorage.setItem('token', token.token)
    setAuthToken(token)
  } catch (err) {
    console.log(err)
  }
}

export const updateProfile = async (userData) => {
  console.log('actions: ', userData)
  const res = await axios.put(`/api/users/profile`, { userData })
  console.log(res)
}

export const hasToken = () => localStorage.getItem('token')

export const logout = () => localStorage.removeItem('token')
