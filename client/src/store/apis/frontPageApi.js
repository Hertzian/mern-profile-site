import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const frontPageApi = createApi({
  reducerPath: 'frontPageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api/users'
  }),

  endpoints(builder) {
    return {
      getGeneralProfile: builder.query({
        query: () => {
          return {
            url: '/get-front-profile',
            method: 'GET'
          }
        }
      }),

    }
  }
})

export const { useGetGeneralProfileQuery, } = frontPageApi