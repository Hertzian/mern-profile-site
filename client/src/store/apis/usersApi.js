import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { apiUrl } from "../../utils/baseUrls"

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/users`,
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().credentialsSlice.token
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
    }
  }),

  endpoints: (builder) => {
    return {

      getProfile: builder.query({
        query: () => {
          return {
            url: '/',
            method: 'GET'
          }
        },
        providesTags: ['User']
      }),

      updateProfile: builder.mutation({
        query: (formData) => {
          return {
            url: '/',
            method: 'PUT',
            body: formData
          }
        },
        invalidatesTags: [{ type: 'User' }]
      }),

      uploadPortrait: builder.mutation({
        query: (formData) => {

          return {
            url: '/image/portrait',
            method: 'PUT',
            body: formData
          }
        }
      }),

      uploadBackground: builder.mutation({
        query: (formData) => {
          return {
            url: '/image/background',
            method: 'PUT',
            body: formData
          }
        }
      })

    }
  }
})

export const { useGetProfileQuery, useUpdateProfileMutation, useUploadPortraitMutation, useUploadBackgroundMutation } = usersApi