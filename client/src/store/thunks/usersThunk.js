import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const login = createAsyncThunk('users/login', async () => {
})

export const getFrontProfile = createAsyncThunk('users/front', async () => {
  const res = await axios.get(`/api/users/get-front-profile`)

  return res.data
})