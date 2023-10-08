import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import setAuthToken from "../../utils/setAuthToken"

export const login = createAsyncThunk('users/login', async (formData) => {
  const res = await axios.post('/api/users/login', formData)
  const token = res.data.token
  setAuthToken(token)

  return token
})

export const getFrontProfile = createAsyncThunk('users/front', async () => {
  const res = await axios.get(`/api/users/get-front-profile`)

  return res.data
})
