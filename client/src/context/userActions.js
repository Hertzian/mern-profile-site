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
  const { name, lastname, github, linkedin, phone, bio, profession } = userData
  try {
    await axios.put(`/api/users/profile`, {
      name,
      lastname,
      github,
      linkedin,
      phone,
      bio,
      profession
    })
  } catch (err) {
    console.log(err)
  }
}

export const hasToken = () => localStorage.getItem('token')

export const logout = () => localStorage.removeItem('token')
