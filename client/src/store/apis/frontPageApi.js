import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiUrl } from "../../utils/baseUrls"

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