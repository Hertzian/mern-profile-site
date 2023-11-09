import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const frontPageApi = createApi({
  reducerPath: 'frontPageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api'
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