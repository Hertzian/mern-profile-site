import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiUrl = process.env.REACT_APP_API_URL

export const frontPageApi = createApi({
  reducerPath: 'frontPageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl
  }),

  endpoints(builder) {
    return {
      getGeneralProfile: builder.query({
        query: () => {
          return {
            url: '/users/get-front-profile',
            method: 'GET'
          }
        }
      }),

      getProject: builder.query({
        query: (projectId) => {
          return {
            url: `/projects/${projectId}`,
            method: 'GET'
          }
        }
      })
    }
  }
})

export const { useGetGeneralProfileQuery, useGetProjectQuery } = frontPageApi