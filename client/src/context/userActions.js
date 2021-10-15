import axios from 'axios'
//import setAuthToken from '../utils/setAuthToken'

//export const login = async (email, password) => {
//try {
//const res = await axios.post(`/api/users/login`, { email, password })
//const token = res.data
//localStorage.setItem('token', token.token)
//setAuthToken(token.token)
//} catch (err) {
//console.log(err)
//}
//}

export const getProfile = async () => {
  try {
    const res = await axios.get('/api/users/profile')
    return res.data.user
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

export const readAccessData = async () => {
  try {
    const res = await axios.get('/api/users/read-access')
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const updateAccess = async (userAccess) => {
  const { email, password } = userAccess
  await axios.put('/api/users/update-access', { email, password })
}

//pending checking
//export const userVerify = async (token) => {
//try {
//const res = await axios.post(`/api/users/verify`, {
//localToken: token
//})
//return res.data.verifiqueichons
//} catch (err) {
//console.log(err)
//return false
//}
//}

export const hasToken = () => localStorage.getItem('token')

export const logout = () => localStorage.removeItem('token')
