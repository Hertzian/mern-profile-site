import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const frontPageApi = createApi({
  reducerPath: 'frontPage',
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
      })
    }
  }
})

export const {
  useGetGeneralProfileQuery
} = frontPageApi
export { frontPageApi }